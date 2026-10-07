export function interpolate(
  content: string,
  variables: Record<string, string>
) {
  return content.replace(
    /\{(\w+)\}/g,
    (_, key) => variables[key] || `{${key}}`
  );
}