
class Solution {
public:

long long totalsum =0;
long long ans = 0;
const int MOD = 1e9 + 7;

       long long treesum(TreeNode* root){
        if(!root) return 0;
        return root->val+treesum(root->left) + treesum(root->right);
        }

        long long dfs(TreeNode*root){
            if(!root) return 0;
            long long left = dfs(root->left);
            long long right = dfs(root->right);

            long long currsum = root->val + left + right;
            ans = max(ans, currsum * (totalsum - currsum));
            return currsum;
        }

       

        int maxProduct(TreeNode*root){
            totalsum = treesum(root);
            dfs(root);
            return ans % MOD;
        }
        
  
};