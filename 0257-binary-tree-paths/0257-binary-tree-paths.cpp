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

void paths(TreeNode*root,vector<string>&ans,string s){
    s+=to_string(root->val);
    if(!root->left&&!root->right){
        ans.push_back(s);
        return;
    }
    s+="->";
    if(root->left){
        paths(root->left,ans,s);

    }
    if(root->right){
                paths(root->right,ans,s);

    }
}
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string>ans;
        string s="";
        paths(root,ans,s);
        return ans;
    }
};