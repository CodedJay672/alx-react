import { fromJS } from "./node_modules/immutable/dist/immutable";

export const getImmutableObject = (obj) => {
  const map = fromJS(obj);
  return map;
};
