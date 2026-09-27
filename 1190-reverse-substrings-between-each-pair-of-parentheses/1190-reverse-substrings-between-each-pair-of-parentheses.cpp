class Solution {
public:
    string reverseParentheses(string s) {
       std::stack<int> openIdxs;
        std::string result = "";
        for(char c:s){
            if(c == '('){

openIdxs.push(result.length());

            }else if(c == ')'){
                int startIdx = openIdxs.top();
                openIdxs.pop();
              std::reverse(result.begin()+startIdx,result.end());
            }else{
                result += c;

            }
        }
        return result;
    }
};