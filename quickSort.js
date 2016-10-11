function quickSort (arr) {
  if (arr.length < 2) {
    return arr;
  }

  var pivot = 0;
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([arr[pivot]]).concat(quickSort(right));

}
function swap (arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// using constant space
// this will not work on duplicate values
function quickSort2 (arr, front, back) {
  if (back <= front) {
    return arr;
  }

  var start = front;
  var end = back;

  var pivot = Math.floor((start + end)/2);
  var pivotVal = arr[pivot];

  while (start < end) {
    while (arr[start] < pivotVal) {
      start++;
    }
    while (pivotVal < arr[end]) {
      end--;
    }
    if (start < end) {
      swap(arr, start, end);
    }
  }

  pivot = start;

  arr = quickSort2(arr, front, pivot - 1);
  arr = quickSort2(arr, pivot + 1, back);
  return arr;
}

// use reader/writer method and minimized space
// this works!!!!

function quickSort3 (arr) {
  var front = 0;
  var back = arr.length - 1;
  quickSort3helper (arr, front, back);
}


function quickSort3helper (arr, front, back) {
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
  // if our last location where r is is greater than the pivotval,
  // that means we've gone too far and need to go back one to have
  // values less than the pivot up until r and then values greater than
  // or equal to to the right of the r
  if (arr[r] > pivotVal) {
    r--;
  }

  quickSort3helper(arr, front, r);
  quickSort3helper(arr, r + 1, back);
}
