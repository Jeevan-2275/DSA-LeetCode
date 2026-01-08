#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    int smallestDivisor(vector<int>& nums, int threshold) {
        int maxval = *max_element(nums.begin(),nums.end());
        for(int i =1;i<=maxval;i++){
            long long sum=0;
            for(int  X : nums){
                sum += (X+i-1)/i;
                            }
                            if(sum<=threshold) return i;
        }
  return maxval;

    }
};