function Stack() {
  this.head;
  this.Node = function (value) {
    this.data = value;
    this.next = null;
  };
  this.isEmpty = function () {
    return this.head == undefined;
  };
  this.pop = function () {
    if (this.isEmpty()) {
      return "stack underflow";
    }
    let popped = this.head.data;
    this.head = this.head.next;
    return popped;
  };
  this.push = function (x) {
    if (this.isEmpty()) {
      this.head = new this.Node(x);
      return this.head.data;
    }
    let pushedNode = new this.Node(x);
    pushedNode.next = this.head;
    this.head = pushedNode;
    return this.head.data;
  };
  this.peek = function () {
    if (this.isEmpty()) {
      return "stack empty";
    }
    return this.head.data;
  };
}
let s = new Stack();
//console.log(s);
console.log(s.pop());
console.log(s.push(5));
s.push(6);
s.push(7);
s.push(9);
console.log(s.peek());
console.log(s.peek());
console.log(s.peek());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());