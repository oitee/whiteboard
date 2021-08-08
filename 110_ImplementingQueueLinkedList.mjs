export function Queue() {
  this.Node = function (value) {
    this.data = value;
    this.next = null;
  };
  this.tail;
  this.head;
  this.isEmpty = function () {
    if (this.head == undefined) {
      return true;
    }
    return false;
  };
  this.enqueue = function (x) {
    if (this.isEmpty()) {
      this.head = new this.Node(x);
      this.tail = this.head;
      return this.head.data;
    }
    let newNode = new this.Node(x);
    newNode.next = this.head;
    this.head = newNode;
    return this.head.data;
  };
  this.secondLastNode = function () {
    let prev = this.head;
    //although this.head will not be empty when we call from dequeue
    //still, checking this, in case this function is used elsewhere inside Queue
    if (prev == undefined) {
      return;
    }
    while (prev.next != null) {
      if (prev.next == this.tail) {
        return prev;
      }
      prev = prev.next;
    }
    return;
  };
  this.dequeue = function () {
    if (this.isEmpty()) {
      return "queue empty";
    }
    let removed = this.tail;
    //if there is only one node, we should empty the queue after dequeueing this node
    if (this.head == this.tail) {
      this.head = undefined;
      this.tail = undefined;
      return removed.data;
    }
    //if this.head and this.tail are not the same nodes
    //we need to find the second last node
    let secondLast = this.secondLastNode();
    //when we call this.secondLastNode() at this stage, we will always get a node in return
    //because we know that Queue is not empty and that this.head != this.tail
    //but, just to prevent any inadvertent error messages,
    //checking to see if the return value of this.secondLastNode() is undefined
    if (secondLast != undefined) {
      secondLast.next = null;
      this.tail = secondLast;
      return removed.data;
    }
    return;
  };
  this.oldest = function () {
    if (this.isEmpty()) {
      return "queue empty";
    }
    return this.tail.data;
  };
  this.latest = function () {
    if (this.isEmpty()) {
      return "queue empty";
    }
    return this.head.data;
  };
}
test();
function test() {
  let q = new Queue();

  console.log(q.isEmpty());
  console.log(q.dequeue());
  console.log(q.enqueue(1));
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  console.log(q.oldest());
  console.log(q.latest());
  console.log(q.dequeue());
  console.log(q.oldest());
}
