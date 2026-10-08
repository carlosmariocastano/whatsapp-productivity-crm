export function insertTemplate(
  chatBox: HTMLElement,
  message: string
): void {
  chatBox.focus();

  const selectAllEvent = new KeyboardEvent(
    "keydown",
    {
      key: "a",
      code: "KeyA",
      ctrlKey: true,
      bubbles: true
    }
  );

  chatBox.dispatchEvent(selectAllEvent);

  const backspaceEvent =
    new KeyboardEvent("keydown", {
      key: "Backspace",
      code: "Backspace",
      bubbles: true
    });

  chatBox.dispatchEvent(backspaceEvent);

  const dataTransfer = new DataTransfer();

  dataTransfer.setData(
    "text/plain",
    message
  );

  const pasteEvent = new ClipboardEvent(
    "paste",
    {
      clipboardData: dataTransfer,
      bubbles: true,
      cancelable: true
    }
  );

  chatBox.dispatchEvent(pasteEvent);
}