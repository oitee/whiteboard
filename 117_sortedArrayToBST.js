import * as binary from "./110_binaryTree.js";
function arrayToBalancedBST(arr, root){
    if (root == undefined){
        root = new binary.BinaryTree();
    }
    if(arr.length == 1){
        root.data = arr[0];
        return;
    }
    else{
        let middle = Math.floor(arr.length/2);
        root.data = arr[middle];
        let leftArr = arr.slice(0, middle);
        let rightArr = arr.slice(middle + 1);
        if(leftArr.length != 0){
            root.left = new binary.BinaryTree();
            arrayToBalancedBST(leftArr, root.left);
        }
        if(rightArr.length != 0){
            root.right = new binary.BinaryTree();
            arrayToBalancedBST(rightArr, root.right);
        }
    }
    return root;
}

function printLevelOrder(root){
    let arr = [];
    arr[0] = root;
    while (arr.length != 0){
        let deq = arr.shift();
        console.log(deq.data);
        if(deq.left != null){
            arr = [...arr, deq.left];
        }
        else{console.log(deq.data + " does not have a left child");}
        if(deq.right != null){
            arr = [...arr, deq.right];
        }
        else{console.log(deq.data + " does not have a right child");}
    }
}

let arr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let root1 = arrayToBalancedBST(arr);
printLevelOrder(root1);