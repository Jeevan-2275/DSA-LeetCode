
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    int maxDotProduct(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size();
        int dp[n][m];
     for (int i = 0; i < n; i++) {
     for (int j = 0; j < m; j++) {
       int prod = nums1[i] * nums2[j];
        dp[i][j] = prod;
        if (i > 0 && j > 0)
        dp[i][j] = max(dp[i][j], dp[i-1][j-1] + prod);
         if (i > 0)
        dp[i][j] = max(dp[i][j], dp[i-1][j]);
        if (j > 0)
         dp[i][j] = max(dp[i][j], dp[i][j-1]);
            }
        }
        return dp[n-1][m-1];
    }
};