function findIndex(arr) {
  var leftSum = 0;
  var totalSum = 0;
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    totalSum+= arr[i];
  }

  for (var j = 0; j < arr.length; j++) {
    if (leftSum === totalSum - arr[j] - leftSum) {
      result.push(j);
    }
    leftSum+= arr[j];
  }
  return result;
}
