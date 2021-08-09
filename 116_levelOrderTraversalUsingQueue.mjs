function levelOrderTraversal(root){
    let q = new Queue();
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

function BinaryTree(data){
    this.data = data;
    this.right = null;
    this.left = null;
}

let root = new BinaryTree(7);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(1);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(10);
root.right.left = new BinaryTree(8);
root.right.right = new BinaryTree(11);
root.right.right.right = new BinaryTree(30);

console.log(levelOrderTraversal(root));





















function Queue(){
    this.arr = [];
    this.headIndex = 0;
    this.tailIndex;
    this.isEmpty = function(){
        if(this.arr.length == 0){
            return true
        };
        return this.headIndex > this.tailIndex;
    };
    this.enqueue = function(data){
        if(this.tailIndex == undefined){
            this.tailIndex = 0;
            this.arr[this.tailIndex] = data;
            return data;
        }
        this.arr[++this.tailIndex] = data;
        return data;
    };
    this.dequeue = function(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        let dequeued = this.arr[this.headIndex++];
        return dequeued;
    };
    this.peek = function(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.arr[this.tailIndex];
    }
}