#include<iostream>
#include<vector>
#include<string>
using namespace  std;


class Solution {
public:
    int longestBalanced(string s) {
        int n = s.size();
        int ans = 1;

        for (int left = 0; left < n; left++) {
            vector<int> freq(26, 0);
            int distinct = 0;
            int maxFreq = 0;

            for (int right = left; right < n; right++) {
                int idx = s[right] - 'a';

                if (freq[idx] == 0) distinct++;
                freq[idx]++;
                maxFreq = max(maxFreq, freq[idx]);

                int len = right - left + 1;

                if (len == distinct * maxFreq) {
                    ans = max(ans, len);
                }
            }
        }

        return ans;
    }
};