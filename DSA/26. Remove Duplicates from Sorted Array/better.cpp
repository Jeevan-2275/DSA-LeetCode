
// #include <iostream>
// #include <vector>
// using namespace std;
// class Solution {
// public:
//     int removeDuplicates(vector<int>& nums) {
//         if(nums.empty()) return 0;

//         int j=0;
//         for(int i=1;i<nums.size();i++){
//             if(nums[j]!=nums[i]){
//                 nums[++j] = nums [i];
//             }
//         }
//         return j+1;
//     }
// };      

// time complexity: O(n)
// space complexity: O(1)

// using a sorting method to solve this problem will increase time complexity to O(nlogn) which is not optimal as the array is already sorted.

