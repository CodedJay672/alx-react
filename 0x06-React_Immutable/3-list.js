import { List } from "./node_modules/immutable/dist/immutable";

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  const list = List(list);
  return list.push(element);
}