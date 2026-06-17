class Solution {
public:
    void nextPermutation(vector<int>& nums) {
       
        int n = nums.size();
        int pivot = -1;
        for(int i=n-1;i>0;i--){
            if(nums[i] > nums[i-1]){
                pivot = i-1;
                break;
            }
        }

        if(pivot != -1){
            int pos = -1;
            int ele = INT_MAX;
            for(int i=n-1;i>pivot;i--){
                if(nums[i] > nums[pivot]){
                    swap(nums[i],nums[pivot]);
                    break;
                }
            }
        }

        reverse(nums.begin()+pivot+1,nums.end());
    }
};