#include <vector>
#include <algorithm>
using namespace std;
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
            int min = *min_element(bloomDay.begin(),bloomDay.end());
            int max = *max_element(bloomDay.begin(),bloomDay.end());

            for(int day=min;day<=max;day++){
                if(canMake(bloomDay,day,m,k)){
                    return day;
                }
            }
            return -1;
        }
};