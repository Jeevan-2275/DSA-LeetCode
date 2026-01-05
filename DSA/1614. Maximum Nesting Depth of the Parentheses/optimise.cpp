class Solution {
public:
    int maxDepth(string s) {
       stack<char> st;
       int maxdepth  =0;
       for(char c:s){
        if(c=='('){
         st.push(c);
         maxdepth =max(maxdepth,(int) st.size());
        }else if(c==')'){
           st. pop();
        }
       }
       return maxdepth;
    }
};