//Merge two sorted linked lists
//https://leetcode.com/problems/merge-two-sorted-lists/
function linkedListBuilder(arr) {
  let head = new ListNode(arr[0]);
  let tail = head;
  for (let i = 1; i < arr.length; i++) {
    tail.next = new ListNode(arr[i]);
    tail = tail.next;
  }
  return head;
}

function printList(list) {
  if (list == undefined) {
    return;
  }
  console.log(list.val);
  printList(list.next);
  return;
}

function ListNode(val, next) {
  //this.val = val;
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  let l3head = null;
  let l3tail = null;
  let temp;
  while (l2 != undefined || l1 != undefined) {
    if (l2 != undefined && l1 == undefined) {
      temp = new ListNode(l2.val);

      l2 = l2.next;
    } else if (l1 != undefined && l2 == undefined) {
      temp = new ListNode(l1.val);

      l1 = l1.next;
    } else if (l1.val < l2.val) {
      temp = new ListNode(l1.val);

      l1 = l1.next;
    } else {
      temp = new ListNode(l2.val);

      l2 = l2.next;
    }
    if (l3head == null) {
      l3head = temp;
      l3tail = l3head;
    } else {
      l3tail.next = temp;
      l3tail = temp;
    }
  }
  return l3head;
};

let list1 = linkedListBuilder([1, 2, 4]);
let list2 = linkedListBuilder([1, 3, 4]);
console.log("first list:");
printList(list1);
console.log("second list:");
printList(list2);
let list3 = mergeTwoLists(list1, list2);
console.log("list1 and list 2, sorted:");
printList(list3);
let list4 = mergeTwoLists(list2, list1);
console.log("list2 and list1 sorted:");
printList(list4);

/*let list5 = linkedListBuilder([]);
let list6 = linkedListBuilder([]);
console.log("first list:");
printList(list5);
console.log("second list:");
printList(list6);*/
let list7 = mergeTwoLists(undefined, undefined);
console.log("undefined and undefined, sorted:");
printList(list7);
/*let list8 = mergeTwoLists(list6, list5);
console.log("list6 and list5 sorted:");
printList(list8);*/

/*let list10 = linkedListBuilder([]);*/
let list11 = linkedListBuilder([0]);
//console.log("first list:");
//printList(list10);
console.log("second list:");
printList(list11);
let list12 = mergeTwoLists(undefined, list11);
console.log("undefined and list 11, sorted:");
printList(list12);
//let list13 = mergeTwoLists(list11, list10);
//console.log("list11 and list10 sorted:");
//printList(list13);
