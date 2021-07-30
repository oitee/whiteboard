// write a function to insert an element before a given element of a linked list

function Node(value) {
  this.data = value;
  this.next = undefined;
}

//list builder
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

function targetMinusOne(list, data) {
  if (list.next == undefined) {
    return;
  }
  if (list.next.data == data) {
    return list;
  }
  return targetMinusOne(list.next, data);
}

function insertion(list, data, newData) {
  if (list == undefined) {
    return;
  }
  let newElement = new Node(newData);
  if (list.data == data) {
    newElement.next = list;
    return newElement;
  }
  let target = targetMinusOne(list, data);
  if (target == undefined) {
    return;
  }
  newElement.next = target.next;
  target.next = newElement;
  return list;
}

//printing the first list
console.log("original list: ");
let head1 = listBuilder([1, 2, 3, 4, 5]);
printList(head1);
console.log("revised list(3,9): ");
head1 = insertion(head1, 3, 9);
printList(head1);

//trying with other variations
console.log("original list2 : ");
let head2 = listBuilder([1, 2, 3, 4, 5]);
printList(head2);
console.log("revised list(0,9): ");
head2 = insertion(head2, 0, 9);
printList(head2);

console.log("original list: ");
let head3 = listBuilder([1, 2, 3, 4, 5]);
printList(head3);
console.log("revised list(1,9): ");
head3 = insertion(head3, 1, 9);
printList(head3);

console.log("original list: ");
let head4 = listBuilder([1, 2, 3, 4, 5]);
printList(head4);
console.log("revised list(5,9): ");
head4 = insertion(head4, 5, 9);
printList(head4);
