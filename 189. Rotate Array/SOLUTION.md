# 🚀 100% Beats Solution - LeetCode 189: Rotate Array

## 📌 Problem Statement

Given an array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

**Example:**
```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
```

---

## 🧠 Way 1️⃣ — Brute Force (Basic Logic)

### 🔍 Thinking

Rotate the array one step at a time:
- Repeat `k` times
- Each time:
  - Store last element
  - Shift all elements right
  - Put stored element at index 0

### ⏱ Complexity
- **Time:** O(n * k) ❌
- **Space:** O(1)

### 💻 C++ Code (Brute Force)

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;

        while (k--) {
            int last = nums[n - 1];
            for (int i = n - 1; i > 0; i--) {
                nums[i] = nums[i - 1];
            }
            nums[0] = last;
        }
    }
};
```

📌 **Good for understanding, not for interviews.**

---

## ⚡ Way 2️⃣ — Better Approach (Extra Array)

### 🔍 Idea

- Create a new array `temp`
- Place each element at its rotated position:
  ```
  newIndex = (i + k) % n
  ```
- Copy back to `nums`

### ⏱ Complexity
- **Time:** O(n) ✅
- **Space:** O(n) ❌

### 💻 C++ Code (Extra Space)

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> temp(n);

        for (int i = 0; i < n; i++) {
            temp[(i + k) % n] = nums[i];
        }

        nums = temp;
    }
};
```

👍 **Clean logic**  
❌ **Uses extra memory**

---

## 🏆 Way 3️⃣ — BEST / Interview Approach (Reverse Method)

### 🔥 Key Observation

Right rotation by `k` means:
1. Reverse entire array
2. Reverse first `k` elements
3. Reverse remaining `n - k` elements

### 🧠 Interview Explanation (Say This)

> "I reverse the entire array, then reverse the first k elements and finally reverse the remaining part. This achieves rotation in-place with constant space."

### ⏱ Complexity
- **Time:** O(n) ✅
- **Space:** O(1) ✅

### 💻 C++ Code (LeetCode BEST)

```cpp
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;

        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
};
```

---

## ✅ Final Comparison Table

| Approach | Time | Space | Interview |
|----------|------|-------|-----------|
| Brute Force | O(n*k) | O(1) | ❌ |
| Extra Array | O(n) | O(n) | ❌ |
| **Reverse Method** | **O(n)** | **O(1)** | **✅ BEST** |

---

## 🧩 What This Problem Teaches You

✅ Modulo usage (`k % n`)  
✅ In-place array manipulation  
✅ Pattern recognition (reverse trick)  
✅ Interview optimization mindset

---

## 🎯 Key Takeaway

The **reverse method** is the optimal solution that interviewers look for. It combines:
- Linear time complexity
- Constant space
- Elegant in-place manipulation

**Perfect for 100% beats! 🚀**
