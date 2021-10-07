//https://leetcode.com/problems/add-two-numbers/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let prevNode = null;
  let root;
  while (l1 != null || l2 != null) {
    let sum;
    if (l1 != null && l2 != null) {
      sum = l1.val + l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 == null) {
      sum = l2.val + carry;
      l2 = l2.next;
    } else {
      sum = l1.val + carry;
      l1 = l1.next;
    }
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    let newNode = new ListNode(sum);
    if (prevNode == null) {
      root = newNode;
      prevNode = newNode;
    } else {
      prevNode.next = newNode;
      prevNode = newNode;
    }
  }
  if (carry > 0) {
    let newNode = new ListNode(1);
    prevNode.next = newNode;
  }
  return root;
};

//==========Testing Functions=============================
function convertToLinkedList(arr) {
  let root = new ListNode(arr[0]);
  let prevNode = root;
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i];
    let newNode = new ListNode(element);
    prevNode.next = newNode;
    prevNode = prevNode.next;
  }
  return root;
}

function addSumArray(arr1, arr2){
  let result = [];
  let carry = 0;
  let biggerLength = Math.max(arr1.length, arr2.length);
  for(let i = 0; i < biggerLength; i++){
    let sum;
    if(arr1[i] !== undefined && arr2[i] !== undefined){
      sum = arr1[i] + arr2[i] + carry;
    }
    else if(arr1[i] == undefined){
      sum = arr2[i] + carry;
    } else{
      sum = arr1[i] + carry;
    }
    if(sum > 9){
      carry = 1;
      sum = sum % 10;
    }
    else{
      carry = 0;
    }
    result.push(sum);
  }
  if(carry > 0){
    result.push(1);
  }
  return result;
}

function convertToArray(node){
  let result = [];
  while(node != null){
    result.push(node.val);
    node = node.next;
  }
  return result;
}

function testValues(arr1, arr2){
let root1 = convertToLinkedList(arr1);
let root2 = convertToLinkedList(arr2);
let expectedResult = addSumArray(arr1, arr2);
let actualResult = addTwoNumbers(root1, root2);
actualResult = convertToArray(actualResult);
for(let i = 0; i < actualResult.length; i++){
  if(actualResult[i] !== expectedResult[i]){
    return false;
  }
}
return true;
}
//=============Tests=======================
console.log(testValues([2,4,3], [5, 6, 4]));
console.log(testValues([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
console.log(testValues([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
], [5, 6, 4]));

