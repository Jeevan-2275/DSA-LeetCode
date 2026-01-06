
#include<iostream>
#include <string>
using namespace std;
class Solution {
public:
    int maxDepth(string s) {
        int n =s.size();
        int  maxdepth =0;
        for(int i=0;i<n;i++){
            if(s[i]=='('){
            int  depth =0;
            
            for(int j=i;j<n;j++){
                if(s[j]=='('){
                    depth++;
                }else if(s[j]==')'){
                    depth--;
                }
                maxdepth=max(maxdepth,depth);
                if(depth ==0) break;

            }
            }
        }
        return maxdepth;
    }
};