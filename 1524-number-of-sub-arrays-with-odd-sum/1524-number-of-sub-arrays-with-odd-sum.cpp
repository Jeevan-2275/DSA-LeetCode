class Solution {
public:
    int numOfSubarrays(vector<int>& arr) {
        long long odd = 0;
        int curr = 0;
        for(int x:arr){
            curr ^= (x&1);
            odd += curr;
        }
        long long even = (arr.size() +1) - odd;
        return (odd * even ) % 1'000'000'007;
    }
};