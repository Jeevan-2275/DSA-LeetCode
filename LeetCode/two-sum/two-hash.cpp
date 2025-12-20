#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> numMap;
        int n = nums.size();

        // Build the hash map
    for(int i=0;i<n;i++){
        numMap[nums[i]] = i;
    };

    // Search for complements
    for(int i=0;i<n;i++){
        int complement = target - nums[i];
        if(numMap.count(complement) && numMap[complement] !=i){
            return {i,numMap[complement]};
        }
      

    }
    return {};
    
    
    
    }
};

//explanation:in simple language

//1. We first create an unordered_map called numMap to store each number in the array along with its index.
//2. We then loop through the nums array and populate the numMap with each number as the key and its index as the value.
//3. After building the hash map, we loop through the nums array again to find two numbers that add up to the target.
//4. For each number, we calculate its complement (target - nums[i]) and check if this complement exists in the numMap.
//5. We also ensure that the complement is not the same element by checking that the indices
//   are different (numMap[complement] != i).
//6. If we find such a pair, we return their indices as a vector.









