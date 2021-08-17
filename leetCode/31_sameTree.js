//https://leetcode.com/problems/same-tree/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    }

var isSameTree = function(p, q) {
    if(p == null){
        return q == null;
    }
    let qP = [p];
    let qQ = [q];
    while(qP.length != 0){
        if(qP.length != qQ.length){
            return false;
        }
        let queuedP = qP.pop();
        let queuedQ = qQ.pop();
        if(queuedQ == undefined){
            return false;
        }
        if(queuedP.val != queuedQ.val){
            return false;
        }
        if(queuedP.left != null){
            if(queuedQ.left == null){
                return false;
            }
            qP.push(queuedP.left);
        }
        if(queuedP.right != null){
            if(queuedQ.right == null){
                return false;
            }
            qP.push(queuedP.right);
        }
        if(queuedQ.left != null){
            if(queuedP.left == null){
                return false;
            }
            qQ.push(queuedQ.left);
        }
        if(queuedQ.right != null){
            if(queuedP.right == null){
                return false;
            }
            qQ.push(queuedQ.right);
        }
    }
    return true;
};

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(1);

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(1);

console.log(isSameTree(root1, root));