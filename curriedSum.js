function curriedSum (numArgs) {
  var numbers = [];

  function _curriedSum (num) {
    numbers.push(num);

    if (numbers.length >=numArgs) {
      var total = 0;
      numbers.forEach( function(num) {
        total+= num;
      });
      return total;

    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}
