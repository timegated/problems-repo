// root is an array
// a tree is basically an array

var countnodes = function (root) {
  if (!root) {
    // no nodes no tree
    return 0;
  }

  // however if there are nodes, we count them recursively
  return 1 + countnodes(root.left) + countnodes(root.right);
};