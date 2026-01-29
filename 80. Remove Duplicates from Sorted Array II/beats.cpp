class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int K=0;
        for(int num:nums){
            if( K <2 || num !=nums[K-2]){
                nums[K++] = num;
            }
        }
        return K;
    }
};