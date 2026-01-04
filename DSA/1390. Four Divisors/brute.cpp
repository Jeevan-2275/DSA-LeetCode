
#include<iostream>
#include<vector>
#include<cmath>
using namespace std;
class Solution {
public:
    int sumFourDivisors(vector<int>& nums) {
        int totalsum=0;
        for(int num:nums){
            int cnt =0;
            int sum =0;
            for(int i=1;i<=num;i++){
                if(num%i==0){
                    cnt++;
                    sum+=i;
                }
            }
        
         if(cnt==4){
            totalsum += sum;
        }
        }
        return totalsum;
    }
};