class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
     long long num =0;

     for(int i=0;i<digits.size();i++){
        num=num*10+digits[i];
     }   
     num=num+1;
     vector<int>result;
     while(num>0){

        result.insert(result.begin(),num%10);
        num /= 10;
     }
     return result;
    }
};