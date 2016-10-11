var depth = function(node) {
    if (node === null) {
        return 0;
    }
    return Math.max(depth(node.left),depth(node.right)) + 1;
};

var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    var leftHeight = depth(root.left);
    var rightHeight = depth(root.right);

    if (Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true;
    }
    return false;
};
