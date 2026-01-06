# LeetCode 1390: Four Divisors | 100% ⭐ | 3 Optimal Approaches

**Find all approaches explained with code & complexity analysis below**

## 📌 Problem Statement (Short)

Given an integer array nums, return the sum of divisors of all numbers that have exactly four divisors.

If a number has not exactly four divisors, ignore it.

### Example:

```
Input:  nums = [21,4,7]
Output: 32
Explanation:
21 → divisors = [1,3,7,21] → sum = 32
4  → divisors = [1,2,4] → ignored
7  → divisors = [1,7] → ignored
```

---

## 🧠 Way 1️⃣ — Brute Force (Check All Divisors)

### 🔍 Thinking

For each number:
- Check all values from 1 to num
- Count divisors
- If count == 4 → add their sum

### ⏱ Complexity

- **Time:** O(n * k) ❌ (k = value of number)
- **Space:** O(1)

### 💻 C++ Code (Brute Force)

```cpp
class Solution {
public:
    int sumFourDivisors(vector<int>& nums) {
        int totalSum = 0;

        for (int num : nums) {
            int cnt = 0;
            int sum = 0;

            for (int i = 1; i <= num; i++) {
                if (num % i == 0) {
                    cnt++;
                    sum += i;
                }
            }

            if (cnt == 4) {
                totalSum += sum;
            }
        }
        return totalSum;
    }
};
```

### Notes:
- ✅ Very straightforward
- ❌ Too slow for large numbers

---

## ⚡ Way 2️⃣ — Better Approach (Check Up to √n)

### 🔍 Idea

Divisors come in pairs:
- Loop from 1 to sqrt(num)
- For every divisor i, also count num/i
- Track count and sum

### ⏱ Complexity

- **Time:** O(n * √k)
- **Space:** O(1)

### 💻 C++ Code (Optimized Divisor Counting)

```cpp
class Solution {
public:
    int sumFourDivisors(vector<int>& nums) {
        int totalSum = 0;

        for (int num : nums) {
            int cnt = 0;
            int sum = 0;

            for (int i = 1; i * i <= num; i++) {
                if (num % i == 0) {
                    int d1 = i;
                    int d2 = num / i;

                    cnt++;
                    sum += d1;

                    if (d1 != d2) {
                        cnt++;
                        sum += d2;
                    }
                }
            }

            if (cnt == 4) {
                totalSum += sum;
            }
        }
        return totalSum;
    }
};
```

### Notes:
- ✅ Much faster
- ✅ Accepted
- ❌ Still checks many numbers

---

## 🏆 Way 3️⃣ — BEST / Interview Approach

### 🎯 Math Observation (Only Two Valid Forms)

#### 🔥 Key Insight

A number has exactly 4 divisors only if:

1. **n = p³** where p is prime
   - divisors = {1, p, p², p³}

2. **n = p × q** where p and q are distinct primes
   - divisors = {1, p, q, p×q}

### 🧠 Interview Explanation (Say This)

*"A number can have exactly four divisors only if it is either a cube of a prime or a product of two distinct primes. I check these two cases and compute the divisor sum directly."*

### ⏱ Complexity

- **Time:** O(n * √k) ✅
- **Space:** O(1) ✅

### 💻 C++ Code (LeetCode PERFECT – Best)

```cpp
class Solution {
public:
    bool isPrime(int x) {
        if (x < 2) return false;
        for (int i = 2; i * i <= x; i++) {
            if (x % i == 0) return false;
        }
        return true;
    }

    int sumFourDivisors(vector<int>& nums) {
        int ans = 0;

        for (int n : nums) {

            // Case 1: n = p^3
            int p = round(cbrt(n));
            if ((long long)p * p * p == n && isPrime(p)) {
                ans += (1 + p + p*p + n);
                continue;
            }

            // Case 2: n = p * q
            for (int i = 2; i * i <= n; i++) {
                if (n % i == 0) {
                    int j = n / i;
                    if (i != j && isPrime(i) && isPrime(j)) {
                        ans += (1 + i + j + n);
                    }
                    break;
                }
            }
        }
        return ans;
    }
};
```

### Notes:
- ✅ Fast
- ✅ Clean
- ✅ Interview-ready
- ✅ Uses math insight

---

## ✅ Final Comparison

| Approach | Time | Space | Interview |
|----------|------|-------|-----------|
| Brute Force | O(n*k) | O(1) | ❌ |
| √n Divisors | O(n√k) | O(1) | ✅ |
| Math Observation | O(n√k) | O(1) | ⭐ **BEST** |

---

## 📝 Key Takeaways

1. **Pattern Recognition:** Understanding the mathematical structure (p³ or p×q) is key
2. **Prime Checking:** Efficient isPrime() function using √x loop
3. **Divisor Pairing:** Loop up to √n to find all divisors
4. **Cube Root:** Use `cbrt()` for cube root with verification
