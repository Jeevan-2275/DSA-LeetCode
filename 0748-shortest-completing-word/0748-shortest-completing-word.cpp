class Solution {
public:
    string shortestCompletingWord(string licensePlate, vector<string>& words) {
        vector<int>plateChars(26,0);
        string ans="";
        for(char &ch:licensePlate){
            if(isalpha(ch)){
                ch=tolower(ch);
                plateChars[ch-'a']++;
            }
        }
        for(string &word:words){
            vector<int>currWord(26,0);
            for(char &ch:word){
                currWord[ch-'a']++;
            }
            bool valid=true;
            for(int i=0;i<26;i++){
                if(currWord[i]<plateChars[i]){
                    valid=false;
                    break;
                }
            }
            if(valid && (ans.empty() || word.length()<ans.length())){
                ans=word;
            }
        }
        return ans;
    }
};