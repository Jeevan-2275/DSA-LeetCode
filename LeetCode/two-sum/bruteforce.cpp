#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
      int n=nums.size();
      for(int i =0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
           if (nums[i]+nums[j]==target){
            return {i,j};
           }
        }
      }
      return {};
    }
};

// RunTime: 35ms/beats36.48%


//explanation:in simple language

//1. We use two nested loops to check every possible pair of numbers in the array.
//2. The outer loop iterates through each element in the array using index i.
//3. The inner loop starts from the next element (i+1) and iterates
//   through the rest of the array using index j.
//4. For each pair of elements (nums[i], nums[j]), we check if their sum equals the target.
//5. If we find such a pair, we return their indices as a vector {i
