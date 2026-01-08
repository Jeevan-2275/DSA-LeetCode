class Solution {
public:
     bool canMake(vector<int>& bloomDay, int day, int m, int k) {
        int flowers =0, bouquets=0;

        for(int i : bloomDay){
            if(i <= day){
                flowers++;
                if(flowers == k){
                    bouquets++;
                    flowers=0;
                }
            }else{
                flowers=0;
            }
        }
        return bouquets >=m;
    }
        int minDays(vector<int>& bloomDay, int m, int k){
long long need = 1LL*m*k;
if(need > bloomDay.size()) return -1;




            int left = *min_element(bloomDay.begin(),bloomDay.end());
            int right = *max_element(bloomDay.begin(),bloomDay.end());
            int ans =-1;
            while(left <= right){
                int mid = left + (right -left )/2;
                  if(canMake(bloomDay,mid,m,k)){
                    ans = mid;
                    right = mid-1;
                }else{
                    left = mid+1;
                }
            
            }

              
            return ans;
        }
};