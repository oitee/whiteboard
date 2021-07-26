// Writing a function called `replicate` that builds a linked-list that takes an array of numbers and returns a list that represents that same array.
function printList(me){
    if(me == undefined){
        return;
    }
    console.log(me.data);
    printList(me.next);
    
}

 //function Node
 function Node(value) {
    this.data = value;
    this.next = undefined;
  }

function replicate(arr) {
 
  //for first element;
  let list = new Node(arr[0]);
  //temp = list;
  var temp = list;

  //for-loop for length
  for (let i = 1; i < arr.length; i++) {
    temp.next = new Node(arr[i]);
    temp = temp.next;
  }
  return list;
}

let list1 = replicate([1, 2, 3, 4, 5]);
//let list2 = replicate([]);
let list3 = replicate([1, 2, 3, undefined, 4]);


//calling printList() for the three lists
printList(list1);
//printList(list2);
printList(list3);
