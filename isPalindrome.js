function isPalindrome(string) {
  var len = string.length;
  for (var i = 0; i < len/2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
//Doesn't take into account capital letters
