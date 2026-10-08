export function getMatches(
  text: string,
  commands: string[]
): string[] {
  if (text === "/") {
    return commands;
  }

  return commands.filter(command =>
    command.toLowerCase().startsWith(
      text.toLowerCase()
    )
  );
}