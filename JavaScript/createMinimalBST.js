function createBST(arr) {
  return createMinimalBST(arr, 0, arr.length - 1);
}

function createMinimalBST(arr, start, end) {
  if (start > end) {
    return null;
  }

  var mid = Math.floor((start + end)/2);
  var n = new TreeNode(arr[mid]);

  n.left = createMinimalBST(arr, start, mid - 1);
  n.right = createMinimalBST(arr, mid + 1, end);
  return n;
}
