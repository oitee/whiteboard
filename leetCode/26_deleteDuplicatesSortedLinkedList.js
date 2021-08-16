
//Given the head of a sorted linked list, delete all duplicate nodes and return the head of the linked list
//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var deleteDuplicates = function (head) {
    if(head == null || head.next == null){
        return head;
    }
    let node = head;
    while(node.next != null){
        if(node.val === node.next.val){
            node.next = node.next.next;
        }
        else{
            node = node.next;
        }
        
    }
    return head;
};
