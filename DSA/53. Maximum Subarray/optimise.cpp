class Solution {
public:
    int maxSubArray(vector<int>& nums) {
  int prefixsum = 0;
  int minprefix =0;
  int maxsum=INT_MIN;

  for( int  x:nums ){
    prefixsum +=x;
    maxsum = max(maxsum,prefixsum-minprefix);
    minprefix = min(minprefix,prefixsum);
  }
  return maxsum;
    }
};