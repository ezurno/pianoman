import { IKeyNoteMapProps } from "./store";

export function findValue(object: IKeyNoteMapProps, valueToFind: string) {
  for (const key in object) {
    if (object[key] === valueToFind) {
      return key;
    }
  }
  return null;
}
