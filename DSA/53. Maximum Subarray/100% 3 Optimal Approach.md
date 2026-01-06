# 🔹53:Maximum Subarray  | 100% ⭐ | 3 Optimal Approaches

## 📌 Problem Statement

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum, and return that sum.

**Example:**
```
Input:  nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6
```

---

## 🧠 Way 1️⃣ — Brute Force (Check All Subarrays)

### 🔍 Thinking
- Generate all possible subarrays
- Calculate sum of each
- Keep track of the maximum sum

### ⏱ Complexity
- **Time:** O(n²) ❌
- **Space:** O(1)

### 💻 C++ Code (Brute Force)
```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int n = nums.size();
        int maxSum = INT_MIN;

        for (int i = 0; i < n; i++) {
            int currSum = 0;
            for (int j = i; j < n; j++) {
                currSum += nums[j];
                maxSum = max(maxSum, currSum);
            }
        }
        return maxSum;
    }
};
```

**Verdict:**
- ✅ Very clear logic
- ❌ Too slow for interviews

---

## ⚡ Way 2️⃣ — Better Approach (Prefix Sum)

### 🔍 Idea
- Maintain prefix sum
- Track the minimum prefix sum so far
- Max subarray sum = `prefixSum - minPrefix`

### ⏱ Complexity
- **Time:** O(n) ✅
- **Space:** O(1)

### 💻 C++ Code (Prefix Sum Method)
```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int prefixSum = 0;
        int minPrefix = 0;
        int maxSum = INT_MIN;

        for (int x : nums) {
            prefixSum += x;
            maxSum = max(maxSum, prefixSum - minPrefix);
            minPrefix = min(minPrefix, prefixSum);
        }
        return maxSum;
    }
};
```

**Verdict:**
- ✅ Efficient
- ✅ Good DP thinking
- ❌ Slightly harder to explain in interviews

---

## 🏆 Way 3️⃣ — BEST / Interview Approach

### 🎯 Kadane's Algorithm

### 🔥 Key Insight
- Either extend the previous subarray or start new from current element
- If current sum becomes negative → reset

### 🧠 Interview Explanation (Say This)
> I iterate through the array and at each position decide whether to extend the previous subarray or start a new one. I track the maximum sum encountered so far. This is **Kadane's Algorithm**.

### ⏱ Complexity
- **Time:** O(n) ✅
- **Space:** O(1) ✅

### 💻 C++ Code (LeetCode PERFECT – Kadane's Algorithm)
```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int currSum = nums[0];
        int maxSum = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            currSum = max(nums[i], currSum + nums[i]);
            maxSum = max(maxSum, currSum);
        }
        return maxSum;
    }
};
```

**Verdict:**
- ✅ Clean
- ✅ Optimal
- ✅ Interview-ready
- ✅ LeetCode accepted

---

## ✅ Final Comparison

| Approach | Time | Space | Interview |
|----------|------|-------|-----------|
| Brute Force | O(n²) | O(1) | ❌ |
| Prefix Sum | O(n) | O(1) | ✅ |
| Kadane | O(n) | O(1) | ⭐ **BEST** |

---

## 🎯 Key Takeaways
- **Kadane's Algorithm** is the standard solution for maximum subarray problems
- Decision at each step: extend current subarray OR start fresh
- This is a classic **Dynamic Programming** problem
- Time: O(n), Space: O(1) - can't get better than this!

---

## 🔗 Related Problems
- LeetCode 152: Maximum Product Subarray
- LeetCode 121: Best Time to Buy and Sell Stock
- LeetCode 918: Maximum Sum Circular Subarray
