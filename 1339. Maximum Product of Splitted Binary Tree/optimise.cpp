
class Solution {
public:

long long totalsum =0;
long long maxprod = 0;
const int MOD = 1e9 + 7;
       long long getTotal(TreeNode* root){
        if(!root) return 0;
        return root->val+getTotal(root->left) + getTotal(root->right);
        }

        long long dfs(TreeNode*root){
            if(!root) return 0;

            long long currsum = root->val + dfs(root->left) + dfs(root->right);

            maxprod = max(maxprod,currsum*(totalsum-currsum));
            return currsum;
        }
        int maxProduct(TreeNode*root){
            totalsum = getTotal(root);
            dfs(root);
            return maxprod % MOD;
        }
        
  
};