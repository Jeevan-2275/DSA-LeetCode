class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
     int n = matrix.size();
     long long  sum =0;
     int negcount =0;
     int minabs=INT_MAX;

     for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            int  val=matrix[i][j];
            if(val<0) negcount++;
            sum+=abs(val);
            minabs =min(minabs,abs(val));

        }
     }   

     if(negcount%2==0){
        return sum;
     }else{
        return sum - 2LL * minabs;
     }
    }
};