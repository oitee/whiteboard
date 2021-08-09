export function Queue(){
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

function test(){
let q = new Queue();
console.log(q.isEmpty() == true);
console.log(q.peek() == "Queue is empty");
console.log(q.dequeue() == "Queue is empty");
console.log(q.enqueue(1) == 1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue() == 1);
console.log(q.peek() == 3);
console.log(q.isEmpty() == false);
}
//test();
