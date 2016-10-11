function peakElementHelper(arr, first, last) {
  //find middle location
  var mid = Math.floor((first + last)/2);

  // found a peak
  if ((mid === 0 || arr[mid-1] <= arr[mid]) && (mid === arr.length - 1 || arr[mid+1] <= arr[mid])) {
    return arr[mid];
  // left value is larger
  } else if (mid > 0 && arr[mid - 1] > arr[mid]) {
    return peakElementHelper(arr,first, (mid-1));
  } else {
    return peakElementHelper(arr, (mid + 1), last);
  }
}

function peakElement(arr) {
  return peakElementHelper(arr, 0, arr.length - 1);
}

// Further, how would you find ALL peaks in an array?........
