class Solution {
public:
    int sumFourDivisors(vector<int>& nums) {
        int totalsum=0;
        for(int num:nums){
            int cnt =0;
            int sum =0;
            for(int i=1;i*i<=num;i++){
                if(num%i==0){
                    int d1=i;
                    int d2 = num/i;

                    cnt++;
                    sum +=d1;

                    if(d1!=d2){
                        cnt++;
                        sum += d2;
                    }
                }
            }
        
         if(cnt==4){
            totalsum += sum;
        }
        }
        return totalsum;
    }
};