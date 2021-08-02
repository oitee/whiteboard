function StackArray(){
    this.arr = [];
    this.isEmpty = function(){
        return this.index < 0;
    }
    this.index = -1;
    this.pop = function(){
        if(this.isEmpty()){
            return "stack underflow";
        }
        let popped = this.arr[this.index];
        this.index--;
        return popped;
    }
    this.push = function(x){
        this.index++;
        this.arr[this.index] = x;
        return x;
    }
    this.peek = function(){
        if(this.isEmpty()){
            return "stack empty";
        }
        return this.arr[this.index];
    }
}
let s = new StackArray;
console.log(s.pop());
console.log(s.push(1));
s.push(2);
s.push(3);
s.push(4);
s.push(5);
console.log(s.peek()==5);
console.log(s.peek());
console.log(s.peek());