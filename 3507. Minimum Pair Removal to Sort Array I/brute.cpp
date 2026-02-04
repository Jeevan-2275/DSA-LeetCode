#include <vector>
using namespace std;

class Solution {
public:
    int minimumPairRemoval(vector<int>& nums) {
     int operations = 0;
     while(true){
        bool sorted = true;
        for(int i =0;i+1<nums.size();i++){
            if(nums[i]>nums[i+1]){
                nums.erase(nums.begin()+i,nums.begin()+i+2);
                operations++;
                sorted = false;
                break;
            }
        }
        if(sorted) break;

     }  
     return operations; 
    }
};