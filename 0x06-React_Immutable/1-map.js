import { Map } from "./node_modules/immutable/dist/immutable";

const getImmutableObject = (obj) => {
  const map = Map(obj);
  return map;
};

export default getImmutableObject;