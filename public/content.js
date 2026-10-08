console.log("WhatsCRM Content Script Loaded");

const templates = [
  {
    id: 1,
    command: "/hola",
    title: "Saludo",
    message:
      "Hola 👋, gracias por comunicarte con nosotros. ¿En qué podemos ayudarte?"
  },
  {
    id: 2,
    command: "/cotizacion",
    title: "Cotización",
    message:
      "Con gusto te ayudamos con tu cotización. Por favor indícanos los productos que deseas cotizar."
  },
  {
    id: 3,
    command: "/pago",
    title: "Pago",
    message:
      "Te compartimos los datos para realizar el pago."
  },
  {
    id: 4,
    command: "/seguimiento",
    title: "Seguimiento",
    message:
      "Estamos realizando seguimiento a tu solicitud. Te mantendremos informado."
  }
];

const commands = templates.map(
  template => template.command
);

let menu = null;
let currentChatBox = null;

function createMenu() {
  const el = document.createElement("div");

  el.id = "whatscrm-menu";

  Object.assign(el.style, {
    position: "fixed",
    left: "50px",
    top: "50px",
    background: "#202c33",
    color: "#fff",
    border: "1px solid #2f3b43",
    borderRadius: "8px",
    minWidth: "300px",
    zIndex: "2147483647",
    display: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,.3)",
    fontFamily: "Segoe UI",
    overflow: "hidden"
  });

  document.body.appendChild(el);

  return el;
}

function hideMenu() {
  if (menu) {
    menu.style.display = "none";
  }
}

function insertTemplate(command) {
  if (!currentChatBox) {
    return;
  }

  const template = templates.find(
    t => t.command === command
  );

  if (!template) {
    return;
  }

  currentChatBox.focus();

  currentChatBox.textContent = template.message;

  currentChatBox.dispatchEvent(
    new Event("input", {
      bubbles: true
    })
  );

  hideMenu();
}

function showMenu(matches) {
  if (!menu) {
    menu = createMenu();
  }

  if (!matches.length) {
    hideMenu();
    return;
  }

  menu.innerHTML = "";

  matches.forEach(command => {
    const template = templates.find(
      t => t.command === command
    );

    const item = document.createElement("div");

    Object.assign(item.style, {
      padding: "10px",
      cursor: "pointer",
      borderBottom: "1px solid #2f3b43"
    });

    item.innerHTML = `
      <div style="font-weight:600">
        ${template.command}
      </div>
      <div style="font-size:12px;color:#aebac1">
        ${template.title}
      </div>
    `;

    item.addEventListener("mouseenter", () => {
      item.style.background = "#2f3b43";
    });

    item.addEventListener("mouseleave", () => {
      item.style.background = "";
    });

    item.addEventListener("click", () => {
      insertTemplate(command);
    });

    menu.appendChild(item);
  });

  menu.style.display = "block";
}

function evaluateEditor(chatBox) {
  currentChatBox = chatBox;

  const text = (chatBox.textContent || "").trim();

  if (!text) {
    hideMenu();
    return;
  }

  if (!text.startsWith("/")) {
    hideMenu();
    return;
  }

  const matches =
    text === "/"
      ? commands
      : commands.filter(cmd =>
          cmd.toLowerCase().startsWith(
            text.toLowerCase()
          )
        );

  showMenu(matches);
}

function attachListener(chatBox) {
  if (chatBox.dataset.whatscrmAttached) {
    return;
  }

  chatBox.dataset.whatscrmAttached = "true";

  console.log("Editor encontrado");

  chatBox.addEventListener("input", () => {
    evaluateEditor(chatBox);
  });

  chatBox.addEventListener("keyup", () => {
    evaluateEditor(chatBox);
  });

  chatBox.addEventListener("keydown", () => {
    setTimeout(() => {
      evaluateEditor(chatBox);
    }, 0);
  });
}

const observer = new MutationObserver(() => {
  const chatBox = document.querySelector(
    '[data-testid="conversation-compose-box-input"]'
  );

  if (chatBox) {
    attachListener(chatBox);
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});