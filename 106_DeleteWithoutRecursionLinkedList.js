function Node(data) {
  this.data = data;
  this.next = null;
}
function printList(node) {
  if (node.next == null) {
    console.log(node.data);
    return;
  }
  console.log(node.data);
  printList(node.next);
}

function arrayToLinkedList(arr) {
  //for the head node
  let head = new Node(arr[0]);
  let tail = head;

  //creating the linked list iteratively
  for (let i = 1; i < arr.length; i++) {
    tail.next = new Node(arr[i]);
    tail = tail.next;
  }
  return head;
}

let list1 = arrayToLinkedList([1, 2, 3, 4, 5]);
printList(list1);

function search(list, x) {
  while (list != undefined) {
    if (list.data == x) {
      return list;
    }
    list = list.next;
  }
  return;
}

function searchPreviousNode(list, x) {
  //checking if list exists
  // and if list points to the last node of the list
  if (list == undefined || list.next == null) {
    return;
  }
  //loop to find out the node which points to the node that carries x
  while (list.next != null) {
    if (list.next.data == x) {
      return list;
    }
    list = list.next;
  }
  return;
}

function insertAfter(list, data, newData) {
  let newNode = new Node(newData);
  //calling the search() function, to find out the node carrying 'data'
  let targetNode = search(list, data);
  // returning an appropriate message if 'data' does not exist within 'list'
  if (targetNode == undefined) {
    return data + "does not exist";
  }
  //checking if the head node is the targetNode
  //if yes, we will need to change the head node
  if (targetNode == list) {
    newNode.next = list;
    return newNode;
  }
  //if the targetNode is any other node in the list
  //newNode should point to the node after targetNode
  //and targetNode should point to newNode
  newNode.next = targetNode.next;
  targetNode.next = newNode;
  return list;
}

list1 = insertAfter(list1, 4, 44);
printList(list1);

function insertBefore(list, data, newData) {
  let newNode = new Node(newData);
  //checking if the head node contains 'data'
  if (list.data == data) {
    newNode.next = list;
    return newNode;
  }
  //calling searchPreviousNode(), to find the (n-1)th node
  let previous = searchPreviousNode(list, data);
  //checking to see if 'previous' is undefined
  if (previous == undefined) {
    return data + "does not exist";
  }
  //if previous any node other than the head node in the list
  //the 'newNode' should point to the node after 'previous' node
  //and the 'previous' node should point to the 'newNode'
  newNode.next = previous.next;
  previous.next = newNode;
  return list;
}

list1 = insertBefore(list1, 44, 55);
printList(list1);

function deletion(list, x){
    if (list.data == x){
        return list.next;
    }
    let targetNode = search(list, x);
    if (targetNode == undefined){
        return x + "does not exist";
    }
    let previous = searchPreviousNode(list, x);
    previous.next = targetNode.next;
    return list;
}
list2 = deletion(list1, 556);
console.log(list2);
list1 = deletion(list1, 55);
printList(list1);