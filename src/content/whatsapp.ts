export function getChatBox(): HTMLElement | null {
  return document.querySelector(
    '[data-testid="conversation-compose-box-input"]'
  );
}