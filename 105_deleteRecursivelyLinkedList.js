// delete an element's first occurence in a linked list, using recursion
function Node(value) {
  this.data = value;
  this.next = undefined;
}

function deleteFirst(head, x) {
  if (head == undefined) {
    return head;
  }
  if (head.data == x) {
    return head.next;
  }
  head.next = deleteFirst(head.next, x);
  return head;
}

function deleteAll(head, x) {
  if (head == undefined) {
    return head;
  }
  if (head.data == x) {
    return deleteAll(head.next, x);
  }

  head.next = deleteAll(head.next, x);
  return head;
}

function listBuilder(arr) {
  let head = new Node(arr[0]);
  let tail = head;
  for (let i = 1; i < arr.length; i++) {
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}

function printList(list) {
  if (list == undefined) {
    return;
  }
  console.log(list.data);
  printList(list.next);
}

let list1 = listBuilder([1, 2, 1, 2, 3, 5]);
let list2 = listBuilder([1, 2, 1, 2, 3, 5]);

printList(deleteFirst(deleteFirst(deleteFirst(list1, 1), 2), 5));
console.log(" ");
printList(deleteAll(deleteAll(deleteAll(list2, 1), 2), 5));
