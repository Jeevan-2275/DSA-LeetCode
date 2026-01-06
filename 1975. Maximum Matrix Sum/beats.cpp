class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
     long long total=0;
     int negatives=0;
     int smallest=INT_MAX;

     for(auto &row:matrix){
        for(int x:row){
            if(x<0) negatives++;
            total += abs(x);
          smallest = min(smallest,abs(x));
        }
     }
     if(negatives %2==0){
   return  total;
     }
             return total - 2LL * smallest;

    }
};