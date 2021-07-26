//function to print the list of elements in a linked list in asceding order
function Node(value) {
  this.data = value;
  this.next = undefined;
}
let list = new Node(2);
list.next = new Node(3);
list.next.next = new Node("4");
list.next.next.next = new Node("5!");

function printList(list) {
  while (list != undefined) {
    console.log(list.data);
    list = list.next;
  }
}

function printListReverse(list) {
  let resultArr = [];
  while (list != undefined) {
    resultArr.unshift(list.data);
    list = list.next;
  }
  console.log(...resultArr);
}
printList(list);
printListReverse(list);

