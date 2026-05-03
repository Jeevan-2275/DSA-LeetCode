class Solution {
public:
    bool rotateString(string s, string goal) {
        if(s.length() != goal.length()) return false;

        int length = s.length();

        for(int i = 0; i < length; ++i){
            rotate(s.begin(),s.begin()+1,s.end());
            if(s==goal) return true;
        }
        return false;
    }
};