// It's a number that, when rotated, is still the same number.
// 88 101 and 69 are all examples of this
// 10 and 696 are not
function stroboNum(int) {
  num = int.toString();

  var rotate = {};
  rotate["8"] = "8";
  rotate["0"] = "0";
  rotate["6"] = "9";
  rotate["9"] = "6";
  rotate["1"] = "1";

  for (var j = 0; j < num.length/2; j++) {
    var end = num.length - 1 - j;
    if (num[j] !== rotate[num[end]]) {
      return false;
    }
  }

  return true;
}


// similar problem is ambigram , where a word is rotated 180 degrees againsts its
//level plane
