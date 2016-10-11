function Result () {
  this.val = null;
}

function findMaxSumPath(root) {
  var result = new Result();
  result.val = -Infinity;
  findSumPath(root, result);
  return result.val;
}

function findSumPath(node, result) {
  if (node === null) {
    return 0;
  }

  // find the path values of the left and right paths
  var l = findSumPath(node.left, result);
  var r = findSumPath(node.right, result);

  // determine which is larger, the left or the right branch, add it to the current
  // node. Then determine if that value is larger than just the node itself
  var maxSingle = Math.max(Math.max(l,r) + node.val, node.val);

  var maxTop = Math.max(maxSingle, l + r + node.val);

  result.val = Math.max(result.val, maxTop);

  // return maxSingle because the parent node can only take one of the branches,
  // meaning either that node included with the left is larger or that node
  // with the right branch is larger
  return maxSingle;
}
