
#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int n = letters.size();
        int left=0,right=n-1;
        char ans = letters[0];
        while(left<right){
            int mid = left + (right-left)/2;
            if(letters[mid]>target){
                ans = letters[mid];
                right = mid;

            }else{
                left=mid+1;
            }

        }
        if(letters[left]>target) ans = letters[left];
        return ans;
        
    }
};