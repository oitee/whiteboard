import * as queue from './111_ImplementingQueueUsingArray.js';
import { BinaryTree } from "./110_binaryTree.js";
export function levelOrderTraversal(root){
    let q = new queue.Queue();
    let arr = [];
    q.enqueue(root);
    while(!q.isEmpty()){
        let dQ = q.dequeue();
        if(dQ.left != null){
            q.enqueue(dQ.left);
        }
        if(dQ.right != null){
            q.enqueue(dQ.right);
        }
        arr.push(dQ.data);
    }
    return arr;
}

let root = new BinaryTree(7);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(1);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(10);
root.right.left = new BinaryTree(8);
root.right.right = new BinaryTree(11);
root.right.right.right = new BinaryTree(30);

function test(){
console.log(levelOrderTraversal(root));
}
//test();

