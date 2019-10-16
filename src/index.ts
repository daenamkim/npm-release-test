export function IsNullOrEmpty(str: string): boolean {
  return !str || (!!str && str.trim().length === 0);
}
