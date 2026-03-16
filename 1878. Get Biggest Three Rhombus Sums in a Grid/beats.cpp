
#include<iostream>
#include<vector>
#include<set>
using namespace std;
class Solution {
public:
    vector<int> getBiggestThree(vector<vector<int>>& grid) {
        int m =grid.size();
        int n = grid[0].size();

        set<int> sums;

        for(int r=0;r<m;r++){
            for(int c =0;c<n;c++){
                sums.insert(grid[r][c]);

                for(int k=1; ; k++){
     if(r-k < 0 || r+k >= m || c-k < 0 || c+k >= n)   
                      break;
                    int sum = 0 ;
                    int x = r-k, y=c;

                    for(int i=0;i<k;i++){
                        sum += grid[x+i][y+i];
                    }
                    for(int i=0;i<k;i++){
                        sum += grid[r+i][c+k-i];
                    }
                    for(int i=0;i<k;i++){
                        sum += grid[r+k-i][c-i];
                    }
                    for(int i=0;i<k;i++){
                        sum += grid[r-i][c-k+i];
                    }
                    sums.insert(sum);
                }
            }
        }
        vector<int> ans;
        for(auto it =sums.rbegin(); it !=sums.rend() && ans.size()<3;++it)
        ans.push_back(*it);
        return ans;

    }
};