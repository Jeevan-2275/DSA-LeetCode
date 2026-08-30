class Solution {
public:
    int minimumDeletions(vector<int>& nums) {
     int n = nums.size();

     int  mxi = 0, mni = 0;
     if(n == 1){
        return 1;

     }  
     for(int i = 0;i < n;i++){
        if(nums[i] > nums[mxi]){
            mxi = i;
        }
        if(nums[i] < nums[mni]){
            mni = i;
        }
     }
     if(mni > mxi){
        swap(mni,mxi);
     }
     return min(((n - mxi) + min(mni + 1, mxi - mni)), ((mni+1) + min(n-mxi, (mxi - mni))));
    }
};