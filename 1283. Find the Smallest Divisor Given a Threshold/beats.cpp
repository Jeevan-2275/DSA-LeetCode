class Solution {
public:


    bool canDivide(vector<int>& nums, int divisor, int threshold) {
    long long sum=0;
            for(int  X : nums){
                sum += (X+divisor-1)/divisor;
             
                            if(sum>threshold){ 
                                return false;
                            }
        }
        return true;
    }
    int smallestDivisor(vector<int>& nums, int threshold) {
        int left = 1;

        int right = *max_element(nums.begin(),nums.end());
        int ans = right;
        
      while(left <=right){
        int mid = left + (right - left ) /2;
        if(canDivide(nums,mid, threshold)){
            ans =mid;
            right = mid - 1;
        }else{
            left = mid +1;
        }

      }
      return ans;
    }
};