import { templates } from "../data/templates";
import { getChatBox } from "./whatsapp";
import { getMatches } from "./shortcutDetector";
import { insertTemplate } from "./templateInjector";

const commands = templates.map(
  template => template.command
);

let menu: HTMLDivElement | null = null;
let currentChatBox: HTMLElement | null = null;

function createMenu(): HTMLDivElement {
  const element = document.createElement("div");

  element.id = "whatscrm-menu";

  Object.assign(element.style, {
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

  document.body.appendChild(element);

  return element;
}

function hideMenu() {
  if (menu) {
    menu.style.display = "none";
  }
}

function selectCommand(command: string) {
  if (!currentChatBox) {
    return;
  }

  const template = templates.find(
    t => t.command === command
  );

  if (!template) {
    return;
  }

  insertTemplate(
    currentChatBox,
    template.message
  );

  hideMenu();
}

function showMenu(matches: string[]) {
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

    if (!template) {
      return;
    }

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

      <div
        style="
          font-size:12px;
          color:#aebac1;
        "
      >
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
      selectCommand(command);
    });

    menu?.appendChild(item);
  });

  menu.style.display = "block";
}

function evaluateEditor(chatBox: HTMLElement) {
  currentChatBox = chatBox;

  const text =
    (chatBox.textContent || "").trim();

  if (!text) {
    hideMenu();
    return;
  }

  if (!text.startsWith("/")) {
    hideMenu();
    return;
  }

  const matches = getMatches(
    text,
    commands
  );

  showMenu(matches);
}

function attachListener(chatBox: HTMLElement) {
  if (
    chatBox.dataset.whatscrmAttached
  ) {
    return;
  }

  chatBox.dataset.whatscrmAttached =
    "true";

  chatBox.addEventListener(
    "input",
    () => evaluateEditor(chatBox)
  );

  chatBox.addEventListener(
    "keyup",
    () => evaluateEditor(chatBox)
  );

  chatBox.addEventListener(
    "keydown",
    () => {
      setTimeout(() => {
        evaluateEditor(chatBox);
      }, 0);
    }
  );
}

export function initializeWhatsCRM() {
  const observer =
    new MutationObserver(() => {
      const chatBox = getChatBox();

      if (chatBox) {
        attachListener(chatBox);
      }
    });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}