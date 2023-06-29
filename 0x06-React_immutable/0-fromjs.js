const { fromJS } = require('immutable');

const getImmutableObject = (obj) => {
  const map = fromJS(obj);
  return map;
}

const response = getImmutableObject({
	     fear: true,
	     smell: -1033575916.9145899,
	     wall: false,
	     thing: -914767132
	});

console.log(response);
