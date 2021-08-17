//https://leetcode.com/problems/binary-tree-inorder-traversal/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var inorderTraversal = function (root) {
  let stackArr = [];
  if (root == undefined) {
    return stackArr;
  }
  stackArr.push(root);
  let result = [];
  let visited = new Set();

  
  /*while (stackArr.length > 0) {
    let popped = stackArr.pop();
    console.log(popped.val);
    let leftNotEmpty = (popped.left != null);
    let rightNotEmpty = (popped.right != null);
    if (leftNotEmpty && !(visited.has(popped.left))) {
      if (rightNotEmpty && !(visited.has(popped.right))) {
        stackArr.push(popped.right);
      }
      stackArr.push(popped);
      stackArr.push(popped.left);
    } else {
      result.push(popped.val);
      visited.add(popped);
      if (rightNotEmpty && !(visited.has(popped.right))) {
        stackArr.push(popped.right);
      }
    }
  }*/

  while (stackArr.length > 0){
    let peek = stackArr[stackArr.length - 1];  
    let leftNotEmpty = (peek.left != null);
      let leftNotVisited = !(visited.has(peek.left));
      let rightNotEmpty = (peek.right != null);
      let rightNotVisited = !(visited.has(peek.right));
      if(leftNotEmpty && leftNotVisited){
          stackArr.push(peek.left);
      }
      else{
          result.push(peek.val);
          visited.add(peek);
          stackArr.pop();
          if(rightNotEmpty && rightNotVisited){
              stackArr.push(peek.right);
          }
      }
  }
  return result;
};

let root1 = new TreeNode(6);
root1.left = new TreeNode(4);
root1.left.left = new TreeNode(2);
root1.left.right = new TreeNode(5);
root1.right = new TreeNode(12);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(111);
root1.right.right.right = new TreeNode(1111);

console.log(inorderTraversal(root1));


let root2 = new TreeNode(6);
root2.left = new TreeNode(4);
root2.right = new TreeNode(10);
root2.right.right = new TreeNode(14);
root2.right.right.right = new TreeNode(20);
console.log(inorderTraversal(root2));
