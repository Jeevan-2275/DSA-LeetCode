# 🔹 LeetCode 1975: Maximum Matrix Sum  | 100% ⭐ | 3 Optimal Approaches

## 📌 Problem Statement (Short)

You are given an `n x n` integer matrix.  
In one operation, you can multiply any row or column by `-1`.

Return the **maximum possible sum** of the matrix after any number of operations.

**Example:**

```
Input:
[[-1,2,3],
 [4,5,-6],
 [7,8,9]]

Output: 45
```

---

## 🧠 Way 1️⃣ — Brute Force (Conceptual Only)

### 🔍 Thinking

- Try flipping every possible combination of rows and columns
- Compute sum for each configuration
- Take the maximum
- ❌ Number of combinations is exponential → not feasible.

### ⏱ Complexity

- **Time:** Exponential ❌
- **Space:** Exponential ❌

### 📌 Only for understanding why optimization is needed

---

## ⚡ Way 2️⃣ — Observation-Based (Greedy Thinking)

### 🔍 Key Observations

1. Flipping a row/column only changes signs, not absolute values
2. We want all values positive
3. If the number of negative elements is **even**, we can make all elements positive
4. If **odd**, one element must stay negative → choose the smallest absolute value

### ⏱ Complexity

- **Time:** O(n²)
- **Space:** O(1)

### 💻 C++ Code (Greedy with Conditions)

```cpp
class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        int n = matrix.size();
        long long sum = 0;
        int negCount = 0;
        int minAbs = INT_MAX;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int val = matrix[i][j];
                if (val < 0) negCount++;
                sum += abs(val);
                minAbs = min(minAbs, abs(val));
            }
        }

        if (negCount % 2 == 0) {
            return sum;
        } else {
            return sum - 2LL * minAbs;
        }
    }
};
```

**Analysis:**
- 👍 Clean logic
- 👍 Accepted
- ❌ Explanation needed in interviews

---

## 🏆 Way 3️⃣ — BEST / Interview Approach

### 🎯 Greedy + Math (Final Insight)

### 🔥 Core Idea

1. Convert all values to absolute
2. Count negatives
3. If negatives are **odd** → subtract `2 × smallest absolute value`

**This works because:**
- One value must remain negative
- Choose the smallest one to minimize loss

### 🧠 Interview Explanation (Say This)

> Since flipping rows or columns only changes signs, the maximum sum is obtained by making all values positive. If the count of negative numbers is odd, one value must remain negative, so we subtract twice the smallest absolute value.

### ⏱ Complexity

- **Time:** O(n²) ✅
- **Space:** O(1) ✅

### 💻 C++ Code (LeetCode PERFECT – Best)

```cpp
class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        long long total = 0;
        int negatives = 0;
        int smallest = INT_MAX;

        for (auto &row : matrix) {
            for (int x : row) {
                if (x < 0) negatives++;
                total += abs(x);
                smallest = min(smallest, abs(x));
            }
        }

        if (negatives % 2 == 0) {
            return total;
        }
        return total - 2LL * smallest;
    }
};
```

**Why This Is Best:**
- ✅ LeetCode accepted
- ✅ Interview-ready
- ✅ Optimal
- ✅ Clean

---

## ✅ Final Comparison

| Approach        | Time         | Space        | Interview   |
|----------------|--------------|--------------|-------------|
| Brute Force    | Exponential  | Exponential  | ❌          |
| Greedy         | O(n²)        | O(1)         | ✅          |
| Greedy + Math  | O(n²)        | O(1)         | ⭐ **BEST** |

---

## 🎯 Key Takeaways

1. **Observation-based problems** require pattern recognition before coding
2. **Sign manipulation** problems often have greedy solutions based on parity
3. Key insight: **odd negative count = one must stay negative, pick smallest**
4. Perfect example of **mathematical reasoning over brute force**
5. Remember: `2LL * smallest` because we first added it, now subtract it (net = -2×)
