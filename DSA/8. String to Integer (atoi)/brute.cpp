class Solution {
public:
    int myAtoi(string s) {
      int i=0, n=s.size();
      int sign =1;
      long long   num=0;

      while(i<n&& s[i] == ' ')i++; 
      if(i<n &&  (s[i] == '+' || s[i] == '-')){
        if(s[i] == '-') sign =-1;
        i++; 
      }
      while(i<n && s[i] >='0' && s[i] <= '9'){
        num=num*10+(s[i]-'0');
        i++;
      }
      return sign *num;
    }
};