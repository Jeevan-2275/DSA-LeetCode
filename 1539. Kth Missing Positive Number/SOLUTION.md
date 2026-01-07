#  🚀 100% Beats Solution - 3 Optimal Approaches | LeetCode 1539: Kth Missing Positive Number

## 📌 Problem Statement

Given a strictly increasing array `arr` of positive integers and an integer `k`, return the k-th missing positive number.

### Example:
```
Input:  arr = [2,3,4,7,11], k = 5
Output: 9
Explanation:
Missing numbers are: [1,5,6,8,9,...]
The 5th missing number is 9
```

---

## 🧠 Way 1️⃣ — Brute Force (Simulate Missing Numbers)

### 🔍 Thinking
- Start from 1
- Traverse through natural numbers
- Compare with array elements
- Count missing numbers until k is reached

### ⏱ Complexity
- **Time:** O(n + k) ❌
- **Space:** O(1)

### 💻 C++ Code (Brute Force)

```cpp
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int curr = 1;
        int i = 0;

        while (k > 0) {
            if (i < arr.size() && arr[i] == curr) {
                i++;
            } else {
                k--;
                if (k == 0) return curr;
            }
            curr++;
        }
        return -1;
    }
};
```

### Pros & Cons
- ✅ Very clear logic
- ❌ Slow if k is large

---

## ⚡ Way 2️⃣ — Better Approach (Count Missing Using Formula)

### 🔍 Idea

At index `i`, the number of missing positive integers before `arr[i]` is:

$$\text{missing} = \text{arr}[i] - (i + 1)$$

- Traverse array
- Find where missing count becomes ≥ k
- Compute answer mathematically

### ⏱ Complexity
- **Time:** O(n)
- **Space:** O(1)

### 💻 C++ Code (Linear Scan with Formula)

```cpp
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        for (int i = 0; i < arr.size(); i++) {
            int missing = arr[i] - (i + 1);
            if (missing >= k) {
                return k + i;
            }
        }
        return k + arr.size();
    }
};
```

### Pros & Cons
- ✅ Clean
- ✅ Uses observation
- ❌ Still linear time

---

## 🏆 Way 3️⃣ — BEST / Interview Approach

### 🎯 Binary Search on Missing Count

#### 🔥 Key Insight

Missing count before index mid:

$$\text{missing}(\text{mid}) = \text{arr}[\text{mid}] - (\text{mid} + 1)$$

- Binary search to find first index where missing ≥ k
- Compute answer using math

#### 🧠 Interview Explanation (Say This)

> "I use binary search on the array indices. At each index, I calculate how many numbers are missing before it. Once I find the first index where the missing count is at least k, I compute the answer directly."

### ⏱ Complexity
- **Time:** O(log n) ✅
- **Space:** O(1) ✅

### 💻 C++ Code (LeetCode PERFECT – Binary Search)

```cpp
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int left = 0, right = arr.size() - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int missing = arr[mid] - (mid + 1);

            if (missing < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left + k;
    }
};
```

### Pros & Cons
- ✅ Optimal
- ✅ Interview-ready
- ✅ LeetCode accepted

---

## ✅ Final Comparison

| Approach | Time | Space | Interview |
|----------|------|-------|-----------|
| Simulation | O(n+k) | O(1) | ❌ |
| Linear Math | O(n) | O(1) | ✅ |
| **Binary Search** | **O(log n)** | **O(1)** | **⭐ BEST** |

---

## 🎯 Key Takeaway

The **binary search solution** is the interview-ready approach that balances:
- ✅ Optimal time complexity (O(log n))
- ✅ Minimal space complexity (O(1))
- ✅ Clean, understandable logic
- ✅ Uses the sorted property of the array efficiently
