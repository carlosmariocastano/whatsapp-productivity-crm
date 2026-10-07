export function extractVariables(
  template: string
): string[] {
  const matches =
    template.match(/\{(\w+)\}/g) || [];

  return [
    ...new Set(
      matches.map((item) =>
        item
          .replace("{", "")
          .replace("}", "")
      )
    ),
  ];
}