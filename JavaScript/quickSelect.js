function selectKth(arr, k) {
  if (arr.length < 1 || arr.length <= k) {
    return null;
  }

  return selectHelper(arr, 0, arr.length - 1, k);
}

function selectHelper (arr, front, back, k) {
  if (arr.length < 2 || back - front <= 0) {
    return;
  }

  var r = front;
  var w = back;
  var pivotVal = arr[r];

  while (r < w) {
    if (arr[r] >= pivotVal) {
      var temp = arr[r];
      arr[r] = arr[w];
      arr[w] = temp;
      w--;
    } else {
      r++;
    }
  }

  if (arr[r] > pivotVal) {
    r--;
  }

  if (k <= r) {
    selectHelper(arr, front, r, k);
  } else {
    selectHelper(arr, r + 1, back, k);
  }
  return arr[k];
}
