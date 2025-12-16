//leetcode

#include<iostream>
#include<vector>
using namespace std;
class solution:{
    public:
    int maxsubarray(vector<int>&nums){
        int n=nums.size();
        int currsum=nums[0];
        int maxsum=nums[0];
        for(int i=0;i<n;i++){
            currsum=max(nums[i],currsum+nums[i]);
            maxsum=max(currsum,maxsum);
        }
        return maxsum;
    };
};