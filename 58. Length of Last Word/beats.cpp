#include<iostream>
#include<string>
using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        int count =0;
        int  ind =  s.size()-1;

while( ind >=0 && s[ind] == ' '){
    ind--;
}
while(ind >=0 && s[ind] != ' '){
    count++;
    ind--;
}
return  count;
    }
};