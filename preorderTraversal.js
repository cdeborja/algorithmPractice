// preorder traversal is aka DFS

function dfs (root) {
  var stack = [];
  var result = [];
  var cur = root;
  stack.push(cur);

  while (stack.length > 0) {
    cur = stack.pop();
    result.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return result;

}
