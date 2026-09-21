class Solution {
public:
    vector<long long> resultArray(vector<int>& nums, int k) {
        vector<long long> pre(k, 0);
                vector<long long> ans(k, 0);



        for(int num : nums){
           vector<long long> cur(k, 0);

            int rem =  num % k;
                        cur[rem]++;


             for(int oldRem =0;oldRem<k;oldRem++ ){
int newRem = (oldRem * rem) % k;
cur[newRem] += pre[oldRem];
             }
                 for (int r = 0; r < k; r++) {
                ans[r] += cur[r];
            }
             pre = cur;
        }
       
        return ans;
    }
};