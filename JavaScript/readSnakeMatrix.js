function readSnakeMatrix(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result = result.concat(arr[i]);
    } else {
      result = result.concat(readBackward(arr[i]));
    }
  }
  return result;
}

function readBackward(arr) {
  var result = [];
  for (var j = arr.length - 1; j >= 0; j--) {
    result.push(arr[j]);
  }
  return result;
}
