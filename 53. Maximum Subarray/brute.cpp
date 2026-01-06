
#include <iostream>
#include <vector>
#include <climits>
using namespace std;
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
   int n = nums.size();
   int maxsum=INT_MIN;

   for(int i=0;i<n;i++){
    int currsum = 0;
    for(int j=i;j<n;j++){
        currsum += nums[j];
        maxsum=max(maxsum,currsum);
    }
   }
   return maxsum;
    }
};