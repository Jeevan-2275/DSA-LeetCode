class Solution {
public:
    int findMin(vector<int>& nums) {
int n =nums.size();
for(int i=1;i<n;i++){
    if(nums[i] < nums[i-1]){
        return nums[i];
    }
}       
        return nums[0];
    }
};