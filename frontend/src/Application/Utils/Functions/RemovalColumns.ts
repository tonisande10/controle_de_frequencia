export function RemovalColumns(
  columns: string[],
  columnsToRemove: string[]
): string[] {
  return columns.filter((column) => !columnsToRemove.includes(column));
}

export function ChooseColumns(
  columns: string[],
  columnsToChoose: string[]
): string[] {
  return columns.filter((column) => columnsToChoose.includes(column));
}
