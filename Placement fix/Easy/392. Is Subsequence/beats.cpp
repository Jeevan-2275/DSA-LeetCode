
#include<iostream>
#include<string>
using namespace std;

class Solution {
public:
    bool isSubsequence(string s, string t) {
        int  i = 0;
        int count =0;
        for(int j=0;j<t.size();j++){
            if(s[i] == t[j]){
                count++;
                i++;
            }
        }
        return count == s.size();
    }
};