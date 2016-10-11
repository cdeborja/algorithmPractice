function inOrderTreeTraversal (root) {
  var stack = [];
  var result = [];
  var cur = root;

  while (cur !== null || stack.length > 0) {
    while(cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }
  return result;
}
