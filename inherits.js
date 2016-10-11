var inherits = function (ChildClass, BaseClass) {
  function Surrogate () { this.constructor = ChildClass ;}
  Surrogate.prototype = BaseClass.prototype;
  ChildClass.prototype = new Surrogate();
};
