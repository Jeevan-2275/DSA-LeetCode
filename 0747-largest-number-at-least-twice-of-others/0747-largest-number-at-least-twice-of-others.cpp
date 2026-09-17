class Solution {
public:
    int dominantIndex(vector<int>& nums) {
     int maxvalue =-1;
     int smaxvalue =-1;
     int maxindex  =-1;


     for(int i =0;i<nums.size();++i){
          if(nums[i] > maxvalue){
            smaxvalue = maxvalue;
            maxvalue  = nums[i];
            maxindex = i;
          }else if( nums[i]>smaxvalue){
            smaxvalue = nums[i];
          }
     }  
     return (maxvalue >= 2*smaxvalue) ? maxindex :-1; 
    }
};