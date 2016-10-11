function addToMinHeap (heap, val) {
  heap.push(val);

  var lastNode = heap.length - 1;
  var parent = Math.ceil(lastNode/2 - 1);

  while (heap[parent] > heap[lastNode]) {
    swap(heap, parent, lastNode);
    lastNode = parent;
    parent = Math.ceil(lastNode/2 - 1);
  }
}
