import { Map } from "./node_modules/immutable/dist/immutable";

const getImmutableObject = (obj) => {
  const map = Map(obj);
  return map;
};

const map = getImmutableObject({
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
});

console.log(map);