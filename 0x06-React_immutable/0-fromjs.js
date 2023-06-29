const { fromJS } = require('immutable');

const getImmutableObject = (obj) => {
  const map = fromJS(obj);
  return map;
}

export default getImmutableObject;
