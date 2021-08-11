function BinaryTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

/*function inOrderTraversal(root, arr = []) {
  if (root == null) {
    return;
  }
  inOrderTraversal(root.left, arr);
  arr.push(root.data);
  inOrderTraversal(root.right, arr);
  return arr;
}

function printBst(root) {
  let printArr = inOrderTraversal(root);
  console.log(printArr);
}*/

export function arrayToBst(arr) {
  let root = new BinaryTree(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    insert(root, arr[i]);
  }
  return root;
}

function insert(currentNode, data, parent) {
  if (currentNode == null) {
    if (data <= parent.data) {
      parent.left = new BinaryTree(data);
      return;
    }
    parent.right = new BinaryTree(data);
    return;
  }
  if (data <= currentNode.data) {
    insert(currentNode.left, data, currentNode);
  } else {
    insert(currentNode.right, data, currentNode);
  }
}
//
//
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

let printInOrderTraversal = printTraversal(inOrderTraversal);
function test(){
let arr = [-881, 3, 4, 99, 100, 0, -111, 99, 1];
let root1 = arrayToBst(arr);
printInOrderTraversal(root1);
}
//test()
