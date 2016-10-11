// http://www.algolist.net/Data_structures/Binary_search_tree/Removal

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

function removeNode (root, parent, val) {
  if (root === null) {
    console.log("Node doesn't exist");
  }

  if (val < root.val) {
    removeNode(root.left, root, val);
  } else if (root.val < val) {
    removeNode(root.right, root ,val);
  } else {
    // no children, current node is a leaf
    if (!root.left && !root.right) {
      if (root.val < parent.val) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      // two children, need to choose the highest from the left, or the lowest
      // from the right -- in this case, choosing lowest from right subtree
      // ultimately, we would want to remove the node that keeps the
      // BST balanced
    } else if (root.left && root.right) {
      var lowestLeft = root.right;
      while (lowestLeft.left) {
        lowestLeft = lowestLeft.left;
      }
      root.val = lowestLeft.val;
      // since we've removed our current target value,
      // we need to remove the new duplicate value
      removeNode(root.right, root, root.val);
    } else if (!root.left) {
      if (root.val < parent.val) {
        parent.left = root.right;
      } else {
        parent.right = root.right;
      }
      // no right child
    } else {
      if (root.val < parent.val) {
        parent.left = root.left;
      } else {
        parent.right = root.left;
      }
    }
  }
}
