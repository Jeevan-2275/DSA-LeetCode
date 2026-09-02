class Solution {
public:
    int maxSatisfied(vector<int>& customers, vector<int>& grumpy, int minutes) {
        int init = 0;
        int curWin = 0;
        int maxWin = 0;
        int  n = customers.size();

        for(int i=0;i<n;i++){
           if(grumpy[i] == 0){
            init += customers[i];
           }else if( i< minutes){
            curWin += customers[i];
           }
        }

        maxWin = curWin;
        for(int i=minutes;i<n;++i){
            curWin += customers[i] * grumpy[i];
            curWin -= customers[i - minutes] * grumpy[i - minutes];
            maxWin = max(maxWin,curWin);

        }
        return init+maxWin;
    }

};