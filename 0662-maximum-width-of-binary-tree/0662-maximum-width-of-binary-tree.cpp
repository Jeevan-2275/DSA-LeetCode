
class Solution {
public:
typedef unsigned long long ll;
    int widthOfBinaryTree(TreeNode* root) {
 queue<pair<TreeNode* ,ll>> que;
 que.push({root,0});

 ll maxwidth = 0;

 while(!que.empty()){
    ll L = que.front().second;
    ll R = que.back().second;


    maxwidth = max(maxwidth,R-L+1);


    int n = que.size();
    while(n--){
        TreeNode* curr = que.front().first;
        ll idx = que.front().second;
        que.pop();

        if(curr->left)
            que.push({curr->left,2*idx+1});
    
         if(curr->right)
         que.push({curr->right,2*idx+2});
        
    }
 }
 return maxwidth;        
    }
};