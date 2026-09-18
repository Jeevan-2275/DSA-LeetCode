class Solution {
public:
    int minSumOfLengths(vector<int>& arr, int target) {
        int n = arr.size();
        vector<int> best(n,INT_MAX);
        int sum =0, ans = INT_MAX,min_len = INT_MAX;

        for(int l=0,r=0;r<n;++r){
            sum+= arr[r];
            while(sum>target){
                sum -= arr[l++];
            }
            if(sum == target){
                int cur_len  = r-l+1;
              if(l>0 && best[l-1] != INT_MAX){
                ans  = min(ans,best[l-1] + cur_len);
              }   
              min_len = min(min_len,cur_len);
            }
            best[r] = min_len;
        }
        return ans == INT_MAX ? - 1 : ans;
    }
};