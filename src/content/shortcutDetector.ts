import {
  insertMessage,
} from "./templateInjector";

export function registerShortcutListener() {

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Tab") {
        return;
      }

      const activeElement =
        document.activeElement;

      if (
        !activeElement ||
        !(
          activeElement instanceof
          HTMLElement
        )
      ) {
        return;
      }

      const text =
        activeElement.textContent ?? "";

      if (
        text.trim() === "/hola"
      ) {

        event.preventDefault();

        insertMessage(
`Hola Carlos

Gracias por contactarnos.`
        );
      }

    }
  );

}