function Node(data) {
  this.data = data;
  this.next = null;
}

let head = new Node(7); //head node
head.next = new Node(8); // second node
head.next.next = new Node(9); // third node
head.next.next.next = new Node(10); // fourth node

function search(list, x) {
  while (list != undefined) {
    if (list.data == x) {
      return list;
    }
    list = list.next;
  }
  return;
}
console.log(search(head, 9)); //Node { data: 9, next: Node { data: 10, next: null } }
console.log(search(head, 11)); // undefined
