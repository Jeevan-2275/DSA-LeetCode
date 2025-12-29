# 88. Merge Sorted Array

---

## Way 1️⃣ — Brute Force (Beginner Logic)

### 🔍 Thinking Process
- Copy all elements of nums2 into empty spaces of nums1
- Sort nums1
- Done ✅

This is the most natural beginner approach.

### ⏱ Complexity
- **Time**: $O(n \log n)$ — Due to sorting
- **Space**: $O(1)$ — In-place sort

### 💻 C++ Code (Brute Force)
```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        // Step 1: Copy nums2 into nums1
        for (int i = 0; i < n; i++) {
            nums1[m + i] = nums2[i];
        }

        // Step 2: Sort the merged array
        sort(nums1.begin(), nums1.end());
    }
};
```

### 📌 Note
Use this only for understanding, not interviews. ❌

---

## Way 2️⃣ — Better Approach (Two Pointers + Extra Space)

### 🔍 Idea
- Use two pointers on nums1 and nums2
- Merge like the merge step of merge sort
- Store result in a new array
- Copy back to nums1

### ⏱ Complexity
- **Time**: $O(n)$ — Single pass through both arrays
- **Space**: $O(n)$ — Extra space for temporary array ❌

### 💻 C++ Code (Better)
```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> temp;
        int i = 0, j = 0;

        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                temp.push_back(nums1[i++]);
            } else {
                temp.push_back(nums2[j++]);
            }
        }

        while (i < m) temp.push_back(nums1[i++]);
        while (j < n) temp.push_back(nums2[j++]);

        // Copy back
        for (int k = 0; k < m + n; k++) {
            nums1[k] = temp[k];
        }
    }
};
```

### 👍 Assessment
- Good logic practice
- ❌ Still not interview-best (extra space)

---

## Way 3️⃣ — Optimal Approach (Two Pointers from End) 🏆

### 🔍 Intuition
The key insight is that since `nums1` has extra space at the end (capacity of `m + n`), we can use this space to our advantage. Instead of merging from the beginning and shifting elements, we **merge from the end**, comparing elements from both arrays and placing the larger one at the rightmost position.

### 💡 Approach
We use a **reverse two-pointer approach**:
1. Initialize three pointers:
   - `i`: pointing to the last element of nums1 (at index `m-1`)
   - `j`: pointing to the last element of nums2 (at index `n-1`)
   - `k`: pointing to the last position in nums1 (at index `m+n-1`)

2. Start from the end and compare elements:
   - If `nums1[i]` > `nums2[j]`, place `nums1[i]` at position `k` and decrement `i`
   - Otherwise, place `nums2[j]` at position `k` and decrement `j`

3. Continue while `j >= 0` (when nums2 has remaining elements)
   - If nums1 runs out first, remaining nums2 elements are placed
   - If nums2 runs out first, remaining nums1 elements are already in correct positions

### ⏱ Complexity
- **Time Complexity**: $O(n)$ — Process each element exactly once
- **Space Complexity**: $O(1)$ — Only constant extra space (three pointers) ✅

### 💻 C++ Code (Beats Approach - Best Solution)
```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m - 1;      // Pointer for nums1
        int j = n - 1;      // Pointer for nums2
        int k = m + n - 1;  // Pointer for the last position in nums1
        
        while(j >= 0){
            if(i >= 0 && nums1[i] > nums2[j]){
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }
};
```

### 📝 Explanation
- The condition `i >= 0` ensures we don't access invalid memory when nums1 is exhausted
- When `j < 0`, all elements from nums2 have been placed, so the loop terminates
- Any remaining elements in nums1 are already in their correct positions, so no additional processing is needed

### ✅ Why This is Best
- ✅ $O(n)$ time complexity
- ✅ $O(1)$ space complexity (no extra data structures)
- ✅ Interview-optimal solution
- ✅ Elegant and efficient

---

## Summary Comparison

| Approach | Time | Space | Interview | Notes |
|----------|------|-------|-----------|-------|
| **Brute Force** | $O(n \log n)$ | $O(1)$ | ❌ | Easiest to understand |
| **Better (Merge Sort)** | $O(n)$ | $O(n)$ | ⚠️ | Good logic but extra space |
| **Optimal (Reverse) 🏆** | $O(n)$ | $O(1)$ | ✅ | Best solution - use this! |
