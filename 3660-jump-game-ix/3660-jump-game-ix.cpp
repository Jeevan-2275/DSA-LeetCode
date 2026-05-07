class Solution {
public:
    vector<int> maxValue(vector<int>& nums) {
        int n = nums.size();
        vector<int>  ans(n);
        vector<int> premax(n);

        premax[0] = nums[0];

        for(int i=1;i<n;i++){
            premax[i] = max(premax[i-1], nums[i]);
        }

        int sufmin = INT_MAX;


        for(int i=n-1;i>=0;i--){
            if(premax[i] > sufmin){
                ans[i]  = ans[i+1];
            }else{
                ans[i] = premax[i];
            }
            sufmin = min(sufmin, nums[i]);
        }

        return ans;
    }
};