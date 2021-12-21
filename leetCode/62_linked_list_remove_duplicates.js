// Cracking the coding interview problem (2.1)
// Write code to remove duplicates from an unsorted linked list, without using a temporary buffer

function Node(val, next) {
  this.data = val;
  this.next = next;
}

function removeDups(node) {
  const root = node;
  while (node) {
    removeNode(node);
    node = node.next;
  }
  return root;

  function removeNode(node) {
    let runner = node;
    while (runner.next) {
      if (runner.next.data === node.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
  }
}


function buildLinkedList(arr){
    const root = new Node(arr[0]);
    let node = root;
    for(let i = 1; i < arr.length; i++){
        node.next = new Node(arr[i]);
        node = node.next;
    }
    return root;
}

function printLinkedList(node, onlyData = true){
    console.log(`linked List beginning with ${node.data}`);
    while(node){
        if(onlyData){
            console.log(node.data);
        }
        else{
            console.log(node);
        }
        node = node.next;
    }
}

let list1 = buildLinkedList([1, 2, 2, 5, 2, 3, 4, 5, 5, 5]);
removeDups(list1)
printLinkedList(list1);

