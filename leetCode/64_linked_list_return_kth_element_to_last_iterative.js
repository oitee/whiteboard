import * as linkedList from './62_linked_list_remove_duplicates.js';

// Cracking the coding interview problem (2.2)
// Implement an algorithm to find the kth to last element of a singly linked list
// The following solution is an interative implementation of the solution
// The key is to maintain two pointers: one to a node, and another to node + kth node;
// When the latter is null, the former is our candidate node
// This way we iterate through the entire list only once
// Also space complexity of O(1)

function kthToLast(head, k) {
    let candidateNode = head;
    let forwardNode = head;
    let i = 1;
    while(i < k){
        forwardNode = forwardNode.next;
        if(!forwardNode){
            return null; 
        }
        i++;
    }
    while(forwardNode.next){
        forwardNode = forwardNode.next;
        candidateNode = candidateNode.next;
    }
    return candidateNode;

}

const list1 = linkedList.buildLinkedList(['A', 'B', 'C', 'D', 'E'], 2);
const list2 = linkedList.buildLinkedList([1, 2, 3, 4, 5, 9], 3)


console.log(kthToLast(list1, 2).data === 'D');
console.log(kthToLast(list1, 1).data === 'E');
console.log(kthToLast(list1, 5).data === 'A');
console.log(kthToLast(list2, 3).data === 4);