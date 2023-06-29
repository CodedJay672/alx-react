import { Map } from "./node_modules/immutable/dist/immutable";

export const mergeDeelyElements = (page1, page2) => {
  return Map(page1).mergeDeep(Map(page2));
}