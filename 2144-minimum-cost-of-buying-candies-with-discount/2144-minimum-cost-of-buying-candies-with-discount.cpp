class Solution {
public:
    int minimumCost(vector<int>& cst) {
        sort(cst.rbegin(), cst.rend());

        int ans = 0;

        for (int i = 0; i < cst.size(); i++) {
            if (i % 3 != 2) {
                ans += cst[i];
            }
        }

        return ans;
    }
};