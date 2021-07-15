function Node(data){
    this.data = data;
    this.next = undefined;
}// constructor for one of a node of a linked list

let head = new Node(7);
head.next = new Node(8);


//write a fumction to print a linked list
function printList(node){
    if(node.next == undefined){
        console.log(node.data);
        return;
    }
    console.log(node.data);
    printList(node.next);
    
}

//better way to do this
function printList2(me){
    if(me == undefined){
        return;
    }
    console.log(me.data);
    printList2(me.next);
    
}


//create a five element list, and print it in order

let list2 = new Node(1);
list2.next = new Node(2);
list2.next.next = new Node(3);
list2.next.next.next = new Node(4);
list2.next.next.next.next = new Node(5);

console.log(list2);
printList2(list2);


function printReverseList(me){
    if(me == undefined){
        return;
    }
    printReverseList(me.next);
    console.log(me.data);
}
//this is called backtracking

printReverseList(list2);