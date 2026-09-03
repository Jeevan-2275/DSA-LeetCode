/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if(root == NULL) return{};
        queue<TreeNode* > Queue;
        Queue.push(root);

        vector<vector<int>> answer;

        while(!Queue.empty()){
          vector<int>temp;
             int size = Queue.size(); 
          while(size--){
            TreeNode* curr = Queue.front();
            Queue.pop();

            temp.push_back(curr->val);

            if(curr->left){
                Queue.push(curr->left);

            }
            if(curr->right){
                Queue.push(curr->right);
            }
          }
          answer.push_back(temp);
        }
        return answer;
    }
};