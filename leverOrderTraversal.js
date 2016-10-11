// level order search AKA BFS

function BFS(root) {
  var queue = [];
  var result = [];
  var cur = root;
  queue.push(cur);

  while (queue.length > 0) {
    cur = queue.shift();
    result.push(cur.val);
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return result;
}
