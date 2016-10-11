function stringParse (string, trueLength) {
  var spaceCount = 0;
  for (var i = 0; i < trueLength; i++) {
    if (string[i] === " ") {
      spaceCount++;
    }
  }
  var newLength = trueLength - 1 + 2 * spaceCount;

  var newArr = new Array(newLength);

  for (var j = trueLength - 1; j >= 0; j--) {
    if (string[j] !== " ") {
      newArr[newLength] = string[j];
      newLength--;
    } else {
      newArr[newLength] = "0";
      newArr[newLength-1] = "2";
      newArr[newLength-2] = "%";
      newLength-=3;
    }
  }
  return newArr.join("");
}
