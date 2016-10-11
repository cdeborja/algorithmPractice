function build_min_heap (arr) {
  // look for the last node
  var last = arr.length - 1;

  // the last node has a parent
  var currentNode = last/2 - 1;

  //use Math.ceil to handle case if left or right child
  currentNode = Math.ceil(currentNode);

  while (currentNode >= 0) {
    // pass in arr.length as max value so that we don't switch with a node
    // that is null
    shift_min_el(arr, currentNode, arr.length);
    currentNode--;
  }
}

function shift_min_el(heap, i, max) {
  // set the while loop that the node we are checking doesn't go beyond
  // how many values we have in the heap
  while (i < max) {

    // make strong assumption first that the currentNode, i, is actually the
    // smallest value
    var i_small = i;
    var c1 = 2 * i + 1;
    var c2 = c1 + 1;

    // do checks against each child node to see if the parent is actually the smallest
    // if it's not, switch the pointer of the smallest to that child
    if (c1 < max && heap[i_small] > heap[c1]) {
      i_small = c1;
    }

    if (c2 < max && heap[i_small] > heap[c2]) {
      i_small = c2;
    }

    // if we don't change the pointer, that means the children are both larger
    // than it's parent

    if (i === i_small) {
      return;
    }

    // if we do get a different smallest pointer, swap the parent node with that child node
    swap(heap, i, i_small);

    // and then make our current node where the node was swapped to
    i = i_small;
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
