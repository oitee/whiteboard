//https://leetcode.com/problems/symmetric-tree/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    }
   var isSymmetric = function(root) {
       if(root == null || (root.left == null && root.right == null)){
           return true;
       }
       let generations = [];
       generations.push(root.left);
       generations.push(root.right);
       while(generations.length != 0){
           let popped = generations;
           generations = [];
           for(let i = 0; i < popped.length; i++){
               if(popped[i] != null){
                   generations.push(popped[i].left);
                   generations.push(popped[i].right);
               }
           }
           //console.log("new");
           //console.log(popped);
           while(popped.length != 0){
            console.log("popped.length" + popped.length);
            console.log("new iteration");
            //console.log(popped[0]);
            //console.log(popped[popped.length - 1]);
            if(popped[0] == null || popped[popped.length - 1] == null){
                if(popped[0] != null || popped[popped.length - 1] != null){
                    return false;
                }
                popped.pop();
                popped.shift();
            }   
            else{
                if(popped[0].val != popped[popped.length - 1].val){
                   return false;
               }
               
               popped.pop();
               popped.shift();
               //console.log("popst pop and shift under else: " + popped);
            }
           }
       }
       return true;
   };

let root = new TreeNode(2);
root.left = new TreeNode(97);
root.right = new TreeNode(97);
root.left.right = new TreeNode(87);
root.right.left = new TreeNode(87);
root.left.right.left = new TreeNode(-7);
root.right.left.right = new TreeNode(-7);

console.log(isSymmetric(root));