function bSearch(arr, target) {
  if (arr < 1) {
    return -1;
  }

  var mid = Math.floor(arr.length/2);
  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return bSearch(arr.slice(0,mid), target);
  } else {
    var subResult = bSearch(arr.slice(mid + 1), target);
    if (subResult === -1 ) {
      return -1;
    } else {
      return subResult + arr.slice(0,mid).length + 1;
    }
  }

}
