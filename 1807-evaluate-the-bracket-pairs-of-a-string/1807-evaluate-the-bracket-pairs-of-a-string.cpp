class Solution {
public:
    string evaluate(string s, vector<vector<string>>& knowledge) {
        unordered_map<string , string>  dict;
        for(const  auto& pair :knowledge){
            dict[pair[0]] = pair[1];

        }
        string  result = "";
        string currentkey = "";
        bool isInsideBracket  = false;

        for (char c:s){
            if(c == '('){
                isInsideBracket = true;

            }else if(c == ')'){
                isInsideBracket = false;

                
                auto it = dict.find(currentkey);
                if(it != dict.end()){
                    result += it->second;
                }else{
                    result += "?"; 
                }
                currentkey = "";

            }else{
                if (isInsideBracket) {
                    currentkey += c;
                } else {
                    result += c;
                }
            }
        }
return result;


    }
};