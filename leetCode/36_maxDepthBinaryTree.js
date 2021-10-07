//https://leetcode.com/problems/maximum-depth-of-binary-tree/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  function findDepth(node, depth = 0) {
    if (!node) {
      return depth;
    }
    depth++;
    let depthLeft = findDepth(node.left, depth);
    let depthRight = findDepth(node.right, depth);
    if (depthLeft >= depthRight) {
      return depthLeft;
    }
    return depthRight;
  }

  return findDepth(root);
};
console.log(maxDepth(null) == 0);
let root1 = new TreeNode(1);
console.log(maxDepth(root1)== 1);

root1.left = new TreeNode(2);
console.log(maxDepth(root1) == 2);

root1.left.left = new TreeNode(3);
console.log(maxDepth(root1) == 3);

root1.left.right = new TreeNode(3);
console.log(maxDepth(root1) == 3);

root1.right = new TreeNode(2);
console.log(maxDepth(root1) == 3);

root1.right.right = new TreeNode(3);
console.log(maxDepth(root1) == 3);

root1.right.left = new TreeNode(3);
console.log(maxDepth(root1) == 3);

root1.right.left.right = new TreeNode(4);
console.log(maxDepth(root1) == 4);


