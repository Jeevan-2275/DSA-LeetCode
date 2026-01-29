class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        for(int i=0;i<n;i++){
            nums[i] = nums[i] |  (nums[i+n] << 10);
        }
        int idx =2*n-1;

        for(int i=n-1;i>=0;i--){
         

            nums[idx--] = nums[i] >> 10;
            nums[idx--] = nums[i] & ((1 << 10)-1);

        }
        return  nums;
    }
};