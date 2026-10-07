export function getMessageBox():
  HTMLElement | null {

  const editors = document.querySelectorAll(
    '[contenteditable="true"]'
  );

  for (const editor of editors) {

    const element =
      editor as HTMLElement;

    if (
      element.getAttribute(
        "data-tab"
      )
    ) {
      return element;
    }
  }

  return null;
}

export function insertMessage(
  message: string
): boolean {

  const editor =
    getMessageBox();

  if (!editor) {
    console.warn(
      "WhatsCRM: Message box not found"
    );

    return false;
  }

  editor.focus();

  editor.textContent = message;

  editor.dispatchEvent(
    new InputEvent(
      "input",
      {
        bubbles: true,
        cancelable: true,
        inputType: "insertText",
        data: message,
      }
    )
  );

  return true;
}