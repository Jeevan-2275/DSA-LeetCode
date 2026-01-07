class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
       int maxpile=*max_element(piles.begin(),piles.end());
        for(int k=1;k <=maxpile;k++){
            long long  hours =0;
            for(int p:piles){
            hours += (p+k-1)/k;
        };
        if(hours <=h) return  k;
        }
        return maxpile;
    }
};