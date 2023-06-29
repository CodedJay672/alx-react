import { Map } from "./node_modules/immutable/dist/immutable";

export default function accessImmutableObject(object, array) {
  const map = Map(object);

  return Map(map.getIn(array, undefined));
}
