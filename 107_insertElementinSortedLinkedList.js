function Node(value) {
  this.data = value;
  this.next = undefined;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);

function insertElement(head, value) {
  if (head == undefined) {
    head = new Node(value);
    return head;
  }
  if (head.data >= value) {
    let temp = new Node(value);
    temp.next = head;
    head = temp;
    return head;
  }
  let tail = head.next;
  if (tail == undefined) {
    tail = new Node(value);
    return head;
  }
  let tailPrev = head;
  while (tail != undefined) {
    if (tail.data >= value) {
      temp = new Node(value);
      tailPrev.next = temp;
      temp.next = tail;
      return head;
    }
    tail = tail.next;
    tailPrev = tailPrev.next;
  }
  tailPrev.next = new Node(value);
  return head;
}
