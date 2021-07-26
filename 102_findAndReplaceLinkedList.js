function Node(value) {
  this.data = value;
  this.next = undefined;
}

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(4);
list1.next.next.next = new Node(1);

function printList(me){
    if(me == undefined){
        return;
    }
    console.log(me.data);
    printList(me.next);
}
printList(list1);

function findAndReplace(list, x, y) {
  if (list.data === x) {
    list.data = y;
  }
    if (list.next == undefined) {
    return;
  }

  findAndReplace(list.next, x, y);
}
findAndReplace(list1, 1, 11);
printList(list1);