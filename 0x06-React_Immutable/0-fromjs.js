import { fromJS } from "./node_modules/immutable/dist/immutable";

const getImmutableObject = (obj) => {
  const map = fromJS(obj);
  return map;
};

export default getImmutableObject;