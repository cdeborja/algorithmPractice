function swap(data, i, j) {
  var temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

function heapsort (arr) {
  build_max_heap(arr);
  var last = arr.length - 1;
  while (last > 0) {
    swap(arr,0,last);
    shift_down_el(arr , 0, last);
    last--;
  }
  console.log(arr);
}

function build_max_heap(arr) {
  // we choose last element in our array because it is the last node
  // that will have a parent
  var last = arr.length - 1;
  var currentNode = last/2 - 1;
  // currentNode is the last right parent at the deepest
  currentNode = Math.ceil(currentNode);
    while (currentNode >= 0) {
      shift_down_el(arr, currentNode, arr.length);
      currentNode--;
    }
}

function shift_down_el(heap, i, max) {
  while (i < max) {
    // we set i_big to i because we will first assume that the parent
    // is the largest value
    var i_big = i;
    var c1 = 2 * i + 1;
    var c2 = c1 + 1;

    // we update the location if that node is larger
    if (heap[i_big] < heap[c1] && c1 < max) {
      i_big = c1;
    }
    if (heap[i_big] < heap[c2] && c2 < max) {
      i_big = c2;
    }
    // we hit the return only if we didn't make any swaps
    if (i_big === i) {
      return;
    }
    swap(heap, i, i_big);
    i = i_big;
  }
}
