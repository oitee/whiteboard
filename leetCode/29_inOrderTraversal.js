//https://leetcode.com/problems/binary-tree-inorder-traversal/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
    }


var inorderTraversal = function(root) {
    let result = [];
    if(root == null){
        return result;
    }
    traversal(root, result);
    function traversal(node, result){
        if(node == undefined){
            return;
        }
        traversal(node.left, result);
        result.push(node.val);
        traversal(node.right, result);
    }
    return result;
};