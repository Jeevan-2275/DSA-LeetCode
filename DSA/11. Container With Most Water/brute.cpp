#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
    int maxArea(vector<int>& height) {
        int n = height.size();
        int maxWater = 0;
          for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                int h=min(height[i],height[j]);
                int w=j-i;
                int area=h*w;
                if(area>maxWater){
                    maxWater = area;
                }
            }
          }
          return  maxWater;
    }
};