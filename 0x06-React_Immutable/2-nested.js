const { fromJS } = require('immutable');

export default function accessImmutableObject(object, array) {
  const map = fromJS(object);

  return (map.getIn([array[0], array[1]]));
}