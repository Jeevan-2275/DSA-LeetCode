# 🔹 | 100% ⭐ | 3 Optimal Approaches | LeetCode 8: String to Integer (atoi)  

## 📌 Problem Statement (Short)

Convert a string `s` to a **32-bit signed integer** following these rules:

1. Ignore leading spaces
2. Optional `'+'` or `'-'` sign
3. Read digits until non-digit appears
4. Clamp result to `[-2³¹, 2³¹ − 1]`

**Examples:**

```
Input:  "   -42"
Output: -42

Input:  "4193 with words"
Output: 4193

Input:  "words and 987"
Output: 0
```

---

## 🧠 Way 1️⃣ — Brute Force (Manual Parsing)

### 🔍 Thinking

- Skip spaces
- Handle sign
- Extract digits into a number
- Stop at non-digit
- ❌ Overflow handling is tricky here.

### ⏱ Complexity

- **Time:** O(n)
- **Space:** O(1)

### 💻 C++ Code (Basic Logic – Not Safe for Overflow)

```cpp
class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.size();
        int sign = 1;
        long long num = 0;

        while (i < n && s[i] == ' ') i++;

        if (i < n && (s[i] == '+' || s[i] == '-')) {
            if (s[i] == '-') sign = -1;
            i++;
        }

        while (i < n && s[i] >= '0' && s[i] <= '9') {
            num = num * 10 + (s[i] - '0');
            i++;
        }

        return sign * num;
    }
};
```

**Analysis:**
- 📌 Good for understanding
- ❌ Fails on overflow cases

---

## ⚡ Way 2️⃣ — Better Approach (Overflow Check)

### 🔍 Idea

- Build number digit by digit
- Before adding digit, check overflow
- Clamp result if overflow happens

### ⏱ Complexity

- **Time:** O(n)
- **Space:** O(1)

### 💻 C++ Code (Safe Parsing)

```cpp
class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.size();
        int sign = 1;
        long long num = 0;

        while (i < n && s[i] == ' ') i++;

        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }

        while (i < n && isdigit(s[i])) {
            num = num * 10 + (s[i] - '0');

            if (sign * num >= INT_MAX) return INT_MAX;
            if (sign * num <= INT_MIN) return INT_MIN;

            i++;
        }

        return sign * num;
    }
};
```

**Analysis:**
- 👍 Handles overflow
- ❌ Still uses `long long`

---

## 🏆 Way 3️⃣ — BEST / Interview Approach

### 🎯 Pure Integer Logic (No long long dependency)

### 🔥 Key Insight

- Check overflow **before** multiplying
- Use integer bounds directly

### 🧠 Interview Explanation (Say This)

> I skip spaces, handle optional sign, and process digits one by one. Before adding a digit, I check if the current value will overflow a 32-bit integer. If so, I clamp the result.

### ⏱ Complexity

- **Time:** O(n) ✅
- **Space:** O(1) ✅

### 💻 C++ Code (LeetCode PERFECT – Best)

```cpp
class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.size();
        int sign = 1;
        int num = 0;

        // Skip leading spaces
        while (i < n && s[i] == ' ') i++;

        // Handle sign
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }

        // Convert digits
        while (i < n && isdigit(s[i])) {
            int digit = s[i] - '0';

            // Overflow check
            if (num > INT_MAX / 10 ||
               (num == INT_MAX / 10 && digit > 7)) {
                return (sign == 1) ? INT_MAX : INT_MIN;
            }

            num = num * 10 + digit;
            i++;
        }

        return sign * num;
    }
};
```

**Why This Is Best:**
- ✅ No extra space
- ✅ Handles all edge cases
- ✅ Interview-ready
- ✅ LeetCode accepted

---

## ✅ Final Comparison

| Approach          | Overflow Safe | Interview   |
|------------------|---------------|-------------|
| Basic Parsing    | ❌            | ❌          |
| long long Check  | ✅            | ✅          |
| Pure Integer     | ⭐ **BEST**   | ⭐ **BEST** |

---

## 🎯 Key Takeaways

1. **String parsing** requires careful state management (spaces → sign → digits)
2. **Overflow detection** before multiplication: `num > INT_MAX / 10`
3. **Edge case for digit 7**: When `num == INT_MAX / 10`, digit must be ≤ 7
4. **No long long needed**: Pure integer logic is cleaner and more efficient
5. Classic **simulation problem** - follow rules exactly as stated
