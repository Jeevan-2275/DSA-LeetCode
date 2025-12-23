#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
       int n=nums.size();
k%=n;
reverse(nums.begin(),nums.end());
reverse(nums.begin(),nums.begin()+k);
reverse(nums.begin()+k,nums.end()); 
    }
};

// __TIME__: O(n)
// __SPACE__: O(1)