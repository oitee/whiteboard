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

function levelOrderTraversal(root) {
  if (root == null) {
    return root;
  }
  let directory = [];
  directory.push(root.data);
  let levelNodes = [];
  levelNodes.push(root);
  let newDirectory;
  while (true) {
    newDirectory = addChildrensData(levelNodes, directory);
    if (directory == newDirectory) {
      break;
    }
    levelNodes = nextGenNodes(levelNodes);
    if (levelnodes == []) {
      break;
    }
  }

  console.log(directory);
}

function addChildrensData(parentNodes, directory) {
  let directoryNew = directory;
  for (let i = 0; i < parentNodes.length; i++) {
    if (parentNodes[i].left != null) {
      directoryNew.push(parentNodes[i].left.data);
    }
    if (parentNodes[i].right != null) {
      directoryNew.push(parentNodes[i].right.data);
    }
  }
  return directoryNew;
}

function nextGenNodes(parentNodes) {
  let children = [];
  for (let i = 0; i < parentNodes.length; i++) {
    if (parentNodes[i].left != null) {
      children.push(parentNodes[i].left);
    }
    if (parentNodes[i].right != null) {
      children.push(parentNodes[i].right);
    }
  }
  return children;
}

levelOrderTraversal(root);
