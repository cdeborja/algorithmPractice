var isValidHelper = function(current, min, max) {
    if (current.left !== null) {
        if (current.val <= current.left.val || current.left.val <= min || !isValidHelper(current.left, min, current.val)) {
            return false;
        }
    }
    if (current.right !== null) {
        if (current.val >= current.right.val || current.right.val >= max || !isValidHelper(current.right, current.val, max)) {
            return false;
        }
    }

    return true;
};

var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    return isValidHelper(root, -Infinity, Infinity);
};
