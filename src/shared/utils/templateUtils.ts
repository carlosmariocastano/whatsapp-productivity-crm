import type { Template } from "../types/template";

export function findTemplateByShortcut(
  shortcut: string,
  templates: Template[]
): Template | undefined {
  return templates.find(
    (template) =>
      template.shortcut.toLowerCase() ===
      shortcut.toLowerCase()
  );
}