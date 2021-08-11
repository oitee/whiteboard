import * as binary from "./110_binaryTree.js";
import * as levelorder from "./116_levelOrderTraversalUsingQueue.js";
import * as arrayToBst from "./114_arrayToBST.js";
function deleteBST(root, node) {
  if (node == null) {
    return root;
  }
  let parentNode = findParent(root, node);
  let direction;
  if (parentNode != undefined) {
    if (parentNode.left == node) {
      direction = "left";
    } else {
      direction = "right";
    }
  }
//when the target node is childless
//its parent should point to null instead of the target node
  if (node.right == null && node.left == null) {
    if(parentNode == undefined){
      return;
    }
    parentNode[direction] = null;
  }
//when the target node has one child
//target node's parent should point to the target node's only child
  if (node.right == null) {
    if (parentNode == undefined) {
      root = root.left;
      return root;
    }
    parentNode[direction] = node.left;
    return root;
  }
  if (node.left == null) {
    if (parentNode == undefined) {
      root = root.right;
      return root;
    }
    parentNode[direction] = node.right;
    return root;
  }
 //when the target node has both children
 //we need to find its immediate successor
 //and replace its value with that of the target node
 //the immediate successor will be the left-most node in the target node's right sub-tree

  let successorNode = findSmallestInRightSubTree(node);
  if (successorNode == node.right) {
    node.data = node.right.data;
    node.right = node.right.right;
    return root;
  }
  node.data = successorNode.data;
  return root;
}

function findSmallestInRightSubTree(node){
  if(node.right.left == null){
    return node.right;
  }
  let parent = node.right;
  leftchild = parent.left;
  while(leftchild.left != null){
    parent = leftchild;
    leftchild = leftchild.left;
  }
  let returnValue = leftchild.data;
  parent.left = null;
  return returnValue;
}
  

function findParent(root, targetNode){
  if(root == targetNode){
    return;
  }
  /*console.log(root.data);
  console.log(root == targetNode);
  console.log("target");
  console.log(targetNode);
  console.log();*/
  if(root.left.data == targetNode.data || root.right.data == targetNode.data){
    return root;
  }
  if(targetNode.data < root.data){
    return findParent(root.left, targetNode);
  }
  else{
    return findParent(root.right, targetNode);
  }

}

//testing
let root1 = arrayToBst.arrayToBst([99, 100, 121, 13, -1, 881, 12]);
console.log(levelorder.levelOrderTraversal(root1));
//console.log(root1.right.right.data);
deleteBST(root1, root1.right.right.data);
console.log(levelorder.levelOrderTraversal(root1));