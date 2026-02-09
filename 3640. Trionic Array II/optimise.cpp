
#include<iostream>
#include<vector>
#include <climits>

using namespace std;

class Solution {
public:
    long long maxSumTrionic(vector<int>& nums) {
        int n = nums.size();
        if (n < 4) return LLONG_MIN;

        const long long NEG = -(1LL<<60);

           long long inc = NEG, dec = NEG, inc2 = NEG;

        long long ans = NEG;

        for (int i = 1; i < n; i++) {
            long long newInc = NEG, newDec = NEG, newInc2 = NEG;

            if (nums[i] > nums[i - 1]) {
                newInc = max(newInc, (long long)nums[i - 1] + nums[i]);

                if (inc != NEG) newInc = max(newInc, inc + nums[i]);

                if (dec != NEG) newInc2 = max(newInc2, dec + nums[i]);
                if (inc2 != NEG) newInc2 = max(newInc2, inc2 + nums[i]);
            }

            if (nums[i] < nums[i - 1]) {
                if (inc != NEG) newDec = max(newDec, inc + nums[i]);

                if (dec != NEG) newDec = max(newDec, dec + nums[i]);
            }

            inc = newInc;
            dec = newDec;
            inc2 = newInc2;

            ans = max(ans, inc2);
        }

        return ans;
    }
};
