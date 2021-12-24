import * as linkedList from './62_linked_list_remove_duplicates.js';

// Cracking the coding interview problem (2.2)
// Implement an algorithm to find the kth to last element of a singly linked list
// The following solution is a recursive implementation of the solution
// The key is to recursively reach the end of the list, passing the next node to the same function
// The base case (when node is null), return a counter = 0
// For each recursive call, see if the returned counter matches with k
// A) If yes, return both the counter and the node (returned by the recursive call)
// This forms our 'winning combination'; we pass it along all the way to the first recursive call
// B) If the counter does not match, increment the counter and return both the counter and the current node
// Note: we are returning two values: the counter and the node

function kthToLast(head, k) {
  function findCounterAndNode(head, k) {
    if (head == null) {
      return { counter: 0, node: null };
    }
    let { counter, node } = findCounterAndNode(head.next, k);

    if (counter === k) {
      return { counter: k, node: node };
    }
    return { counter: counter + 1, node: head };
  }

  const { node, counter } = findCounterAndNode(head, k);
  if (counter == k) {
    return node;
  }
  return null;
}



const list1 = linkedList.buildLinkedList(['A', 'B', 'C', 'D', 'E'], 2);
const list2 = linkedList.buildLinkedList([1, 2, 3, 4, 5, 9], 3)


console.log(kthToLast(list1, 2).data === 'D');
console.log(kthToLast(list1, 1).data === 'E');
console.log(kthToLast(list1, 5).data === 'A');
console.log(kthToLast(list2, 3).data === 4);

