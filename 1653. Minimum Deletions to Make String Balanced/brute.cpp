class Solution {
public:
    int minimumDeletions(string s) {
        int bcount = 0 ;
        int deletions = 0 ;

        for(char c:s){
            if(c=='b'){
                bcount++;


            }else{
                deletions = min(deletions+1,bcount);
            }
        }
        return deletions;

    }
};