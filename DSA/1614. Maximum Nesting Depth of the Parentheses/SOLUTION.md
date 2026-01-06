# 🔹 LeetCode 1614: Maximum Nesting Depth of the Parentheses  | 100% ⭐ | 3 Optimal Approaches


## 📌 Problem Statement (Short)

Given a valid parentheses string `s`, return the maximum nesting depth of parentheses.

**Example:**

```
Input:  s = "(1+(2*3)+((8)/4))+1"
Output: 3
```

---

## 🧠 Way 1️⃣ — Brute Force (Count for Every '(')

### 🔍 Thinking

- For every `'('`, count how deep it goes until it closes
- Track the maximum depth
- 📌 Conceptually correct, but inefficient.

### ⏱ Complexity

- **Time:** O(n²) ❌
- **Space:** O(1)

### 💻 C++ Code (Brute Force – Logic Building)

```cpp
class Solution {
public:
    int maxDepth(string s) {
        int n = s.size();
        int maxDepth = 0;

        for (int i = 0; i < n; i++) {
            if (s[i] == '(') {
                int depth = 0;
                for (int j = i; j < n; j++) {
                    if (s[j] == '(') depth++;
                    else if (s[j] == ')') depth--;
                    maxDepth = max(maxDepth, depth);
                    if (depth == 0) break;
                }
            }
        }
        return maxDepth;
    }
};
```

**Analysis:**
- ❌ Too slow
- 📌 Only for understanding nesting idea

---

## ⚡ Way 2️⃣ — Better Approach (Using Stack)

### 🔍 Idea

- Push `'('` into stack
- Pop on `')'`
- Stack size = current depth
- Track maximum size

### ⏱ Complexity

- **Time:** O(n)
- **Space:** O(n)

### 💻 C++ Code (Stack-Based)

```cpp
class Solution {
public:
    int maxDepth(string s) {
        stack<char> st;
        int maxDepth = 0;

        for (char c : s) {
            if (c == '(') {
                st.push(c);
                maxDepth = max(maxDepth, (int)st.size());
            } else if (c == ')') {
                st.pop();
            }
        }
        return maxDepth;
    }
};
```

**Analysis:**
- 👍 Easy to understand
- ❌ Extra space not required

---

## 🏆 Way 3️⃣ — BEST / Interview Approach

### 🎯 Counter-Based Traversal (No Stack Needed)

### 🔥 Key Insight

- Increase counter on `'('`
- Decrease counter on `')'`
- Track maximum value of counter

### 🧠 Interview Explanation (Say This)

> I traverse the string and increment a counter when I encounter an opening parenthesis and decrement it when I see a closing parenthesis. The maximum value reached by this counter is the maximum nesting depth.

### ⏱ Complexity

- **Time:** O(n) ✅
- **Space:** O(1) ✅

### 💻 C++ Code (LeetCode PERFECT – Best)

```cpp
class Solution {
public:
    int maxDepth(string s) {
        int curr = 0;
        int ans = 0;

        for (char c : s) {
            if (c == '(') {
                curr++;
                ans = max(ans, curr);
            } else if (c == ')') {
                curr--;
            }
        }
        return ans;
    }
};
```

**Why This Is Best:**
- ✅ Clean
- ✅ Optimal
- ✅ Interview-ready
- ✅ LeetCode accepted

---

## ✅ Final Comparison

| Approach     | Time    | Space | Interview |
|-------------|---------|-------|-----------|
| Brute Force | O(n²)   | O(1)  | ❌        |
| Stack       | O(n)    | O(n)  | ✅        |
| Counter     | O(n)    | O(1)  | ⭐ **BEST** |

---

## 🎯 Key Takeaways

1. **Stack approach** is intuitive but uses extra space
2. **Counter approach** is the most elegant - same time complexity, but O(1) space
3. This problem teaches fundamental **string traversal + tracking state** patterns
4. Perfect example where **simple counter beats complex data structures**
