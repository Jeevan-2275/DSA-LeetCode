// QUE.Maximum sum of subarray of size k
// arr=[2,1,5,1,3,2], k=3

// #include<iostream>
// #include<vector>
// using namespace std;

// int main(){
//     vector<int> arr={2,1,5,1,3,2};
//     int n=arr.size();

//     int k=3;
//     int i =0;
//     int j=0;
//     int maxsum=0;
//     int currsum=0;
//     for(int i=0;i<k;i++){
//         currsum+=arr[i];
//         maxsum=currsum;

//     };
//     for(int j=k;j<n;j++){
//         currsum+=arr[j]-arr[j-k];
//         maxsum=max(maxsum,currsum);
//     };
//     cout<<maxsum;
//     return 0;

// }

// give for leetcode

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int n=nums.size();
        int k=3;
        int i =0;
        int j=0;
        int maxsum=0;
        int currsum=0;
        for(int i=0;i<k;i++){
            currsum+=nums[i];
            maxsum=currsum;

        };
        for(int j=k;j<n;j++){
            currsum+=currsum+nums[j]-nums[j-k];
            maxsum=max(maxsum,currsum);
        };
        return maxsum;

    }
};

//output : 9