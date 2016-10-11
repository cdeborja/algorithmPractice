Function.prototype.myCurry = function(numArgs) {
  var curriedArgs = [];
  var fn = this;

  function _curriedFn (arg) {
    curriedArgs.push(arg);

    if (curriedArgs.length === numArgs) {
      return fn.apply(null, curriedArgs);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};
