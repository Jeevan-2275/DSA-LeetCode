# 🔹 LeetCode 217: Contains Duplicate | 100% ⭐ | 3 Optimal Approaches

## 📌 Problem Statement

Given an integer array `nums`, return `true` if any value appears at least twice in the array, otherwise return `false`.

**Example:**
```
Input:  nums = [1,2,3,1]
Output: true
```

---

## 🧠 Way 1️⃣ — Brute Force (Compare Every Pair)

### 🔍 Thinking
- Compare each element with every other element
- If any two elements are equal → duplicate exists

### ⏱ Complexity
- **Time:** O(n²) ❌
- **Space:** O(1)

### 💻 C++ Code (Brute Force)
```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
};
```

**Verdict:**
- ✅ Very easy to understand
- ❌ Too slow for large inputs

---

## ⚡ Way 2️⃣ — Better Approach (Sorting)

### 🔍 Idea
- Sort the array
- If duplicates exist, they will be adjacent
- Check neighboring elements

### ⏱ Complexity
- **Time:** O(n log n)
- **Space:** O(1) (ignoring sort stack)

### 💻 C++ Code (Using Inbuilt sort)
```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        sort(nums.begin(), nums.end());

        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] == nums[i - 1]) {
                return true;
            }
        }
        return false;
    }
};
```

**Verdict:**
- ✅ Cleaner
- ✅ Faster than brute force
- ❌ Modifies the input array

---

## 🏆 Way 3️⃣ — BEST / Interview Approach

### 🎯 Hashing (unordered_set)

### 🔥 Key Insight
- Use a hash set to store seen elements
- If an element appears again → duplicate found

### 🧠 Interview Explanation (Say This)
> I use a hash set to store elements as I traverse the array. If I encounter an element that already exists in the set, I return true. Otherwise, I insert it into the set.

### ⏱ Complexity
- **Time:** O(n) ✅
- **Space:** O(n) ✅

### 💻 C++ Code (LeetCode PERFECT – Best)
```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;

        for (int num : nums) {
            if (seen.count(num)) {
                return true;
            }
            seen.insert(num);
        }
        return false;
    }
};
```

**Verdict:**
- ✅ Fast
- ✅ Clean
- ✅ Interview-ready
- ✅ LeetCode accepted

---

## ✅ Final Comparison

| Approach | Time | Space | Interview |
|----------|------|-------|-----------|
| Brute Force | O(n²) | O(1) | ❌ |
| Sorting | O(n log n) | O(1) | ✅ |
| Hash Set | O(n) | O(n) | ⭐ **BEST** |

---

## 🎯 Key Takeaways
- **Hash Set** is the optimal solution for detecting duplicates
- Time complexity O(n) with single pass through array
- Trade-off: uses O(n) space but achieves optimal time
- Common in interview questions - master this pattern!

---

## 🔗 Related Problems
- LeetCode 1: Two Sum
- LeetCode 2: Add Two Numbers
- LeetCode 128: Longest Consecutive
- LeetCode 442: Find All Duplicates in an Array
