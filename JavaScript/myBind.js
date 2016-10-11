Function.prototype.myBind = function (ctx) {
  var fn = this;
  var bindArgs = [].slice.apply(arguments, 1);
  return function () {
    var callArgs = [].slice.apply(arguments, 0);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

// Is this correct?
