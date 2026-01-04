#include<iostream>
#include<vector>
#include<cmath>
using namespace std;
class Solution {
public:
 bool isPrime(int x){
    if(x<2) return false;
    for(int i=2;i*i<=x;i++){
        if(x%i==0) return false;
    }
    return true;
 }
    int sumFourDivisors(vector<int>& nums) {
      int ans=0;
        
        for(int n:nums){
            int p = round(cbrt(n));
            if((long long)p*p*p == n && isPrime(p)){
                ans +=(1+p+p*p+n);
                continue;
            }
            for(int i=2;i*i<=n;i++){
                if(n%i==0){
                    int j=n/i;
                    if(i!=j&& isPrime(i) && isPrime(j)){
                        ans +=(1+i+j+n);
                    }
                    break;
                }
            }
        }
        return ans;
    }
};