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

        for (int i = 0; i < n; i++)
        {
            int complement = target - nums[i];
            if (numMap.count(complement))  {
                return { numMap[complement], i };
            }
            numMap[nums[i]] = i;
        }

        return {};
    }
};

//explanation:in simple language

//1. We create an unordered_map called numMap to store numbers and their indices as we iterate through the array.
//2. For each number in the array, we calculate its complement (target - nums[i
//3. We check if this complement already exists in the numMap.
//4. If it exists, we return the indices of the complement and the current number as a vector.
//5. If the complement does not exist, we add the current number and its index to the numMap.
//6. If no such pair is found by the end of the loop, we return an empty vector.
