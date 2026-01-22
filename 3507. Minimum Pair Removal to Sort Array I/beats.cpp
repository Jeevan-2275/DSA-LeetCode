class Solution {
public:
    int minimumPairRemoval(vector<int>& nums) {
     int operations=0;
     while(true){
        bool nonDecreasing = true;
        for(int i=1;i<nums.size();i++){
            if(nums[i] < nums[i-1]){
                nonDecreasing = false;
                break;
            }
        }
        if(nonDecreasing) break;

        int minSum = INT_MAX;
        int pos =0;
        for(int i=0;i+1<nums.size();i++){
            int sum = nums[i] + nums[i+1];
            if(sum<minSum){
                minSum =sum;
                pos = i;
            }
        }
        nums[pos] += nums[pos+1];
        nums.erase(nums.begin()+pos+1);
        operations++;
     }
     return operations;
    }
};