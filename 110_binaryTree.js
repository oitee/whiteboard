function BinaryTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
let root = new BinaryTree(7);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(1);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(8);
root.right.right = new BinaryTree(11);
root.right.right.right = new BinaryTree(30);

function printTraversal(traversalFn) {
  return function (root) {
    let printArr = [];
    traversalFn(root, printArr);
    console.log(printArr);
  };
}

function inOrderTraversal(root, printArr = []) {
  if (root == null) {
    return;
  }
  inOrderTraversal(root.left, printArr);
  printArr.push(root.data);
  inOrderTraversal(root.right, printArr);
}

printInOrderTraversal = printTraversal(inOrderTraversal);
printInOrderTraversal(root);

function preOrderTraversal(root, printArr = []) {
  if (root == null) {
    return;
  }
  printArr.push(root.data);
  preOrderTraversal(root.left, printArr);
  preOrderTraversal(root.right, printArr);
}
printPreOrder = printTraversal(preOrderTraversal);
printPreOrder(root);

function postOrderTraversal(root, printArr = []) {
  if (root == null) {
    return;
  }
  postOrderTraversal(root.left, printArr);
  postOrderTraversal(root.right, printArr);
  printArr.push(root.data);
}

printPostOrder = printTraversal(postOrderTraversal);
printPostOrder(root); 
