function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

// under assumption that
function addNodeToBST (root, newNode) {
  if (root.val === null) {
    root.val = newNode.val;
    //checks if our value already exists in BST
  } else if (root.val === newNode.val) {
    console.log("Already exists in tree");
    // add to left side of root
  } else if (newNode.val < root.val) {
    if (!root.left) {
      root.left = newNode;
    } else {
      addNodeToBST(root.left, newNode);
    }
    // add to right side of root
  } else {
    if (!root.right) {
      root.right = newNode;
    } else {
      addNodeToBST(root.right, newNode);
    }
  }
}
