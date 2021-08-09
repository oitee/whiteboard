import * as queue from './110_ImplementingQueueLinkedList.mjs';
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
  let visits = []; 
  visits.push(root.data);
  let levelNodes = [];
  levelNodes.push(root);
  while (levelNodes.length != 0) {
    levelNodes = visitNextGen(levelNodes, visits);
  }

  return visits;
}

function visitNextGen(currentGen, visits) {
  let nextGen = [];
  for (let i = 0; i < currentGen.length; i++) {
    if (currentGen[i].left != null) {
      visits.push(currentGen[i].left.data);
      nextGen.push(currentGen[i].left);
    }
    if (currentGen[i].right != null) {
      visits.push(currentGen[i].right.data);
      nextGen.push(currentGen[i].right);
    }
  }
  return nextGen;
}


let q = new queue.Queue();



console.log(levelOrderTraversal(root).toString() === [7, 2, 8, 1, 5, 11, 30].toString());
