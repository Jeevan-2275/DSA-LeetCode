class Solution {
public:
     bool helper(ListNode* head, TreeNode* root){
        if(head == NULL){
            return true;
        }    if(root == NULL ){
            return false;
        }       if(head->val != root->val){
            return false;
        }  
        return helper(head->next,root->left) || helper (head->next,root->right);
     }
    bool isSubPath(ListNode* head, TreeNode* root) {
        if(root == NULL){
            return false;
        }
        return helper(head, root) ||
        isSubPath(head,root->left) || isSubPath (head,root->right);
       
    }
 };
