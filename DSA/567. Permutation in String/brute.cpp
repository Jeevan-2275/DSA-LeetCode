#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
    bool checkInclusion(string s1, string s2) {

    int n =s1.size();
    int m =s2.size();

    if(n>m) return false;

    int freq1[26]={0};

    for(int i=0;i<n;i++){
        freq1[s1[i]-'a']++;
    }    
    for(int i=0;i<=m-n;i++){
        int freq2[26] = {0};

        for(int j=i;j<i+n;j++){
            freq2[s2[j]-'a']++;
        }
        bool match = true;
        for(int k=0;k<26;k++){
            if(freq1[k] != freq2[k]){
                match =false;
                break;
            }
        }
        if(match) return true;
    }
    return false;
    }
};