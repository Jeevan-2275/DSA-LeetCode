class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        int n = nums.size();

        unordered_map<int ,int >mp;
        int sum = 0;
        int subarray_length = 0;

        for(int i=0;i<n;i++){
            sum += nums[i] == 0 ? -1 : 1;
            if(sum == 0){
                subarray_length =  i +1;

            }
            else if(mp.find(sum) != mp.end()){
                subarray_length = max(subarray_length, i - mp[sum]);
            }else{
                mp[sum] = i;
            }
        }
        return subarray_length;
    }
};