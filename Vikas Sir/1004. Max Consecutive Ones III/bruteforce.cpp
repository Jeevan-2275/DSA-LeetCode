// 1004. Max Consecutive Ones III


#include<iostream>
#include<vector>
using namespace std;

class Solution {
    public:
    int longestOnes(vector<int>& nums, int k){
        int left=0, right=0;
        int zeroCount=0;
        int maxLength=0;
        while(right<nums.size()){
            if(nums[right]==0){
                zeroCount++;
            }
            while(zeroCount>k){
                if(nums[left]==0){
                    zeroCount--;
                }
                left++;
            }
            maxLength=max(maxLength, right-left+1);
            right++;
        }
        return maxLength;
    }
};

// time complexity: O(n)
// space complexity: O(1)