#include<iostream>
#include<vector>
#include<string>
using namespace std;

class Solution {
public:
    int countSetBits(int x) {
        int cnt = 0;
        while (x) {
            x &= (x - 1);
            cnt++;class Solution {
public:
    vector<string> readBinaryWatch(int turnedOn) {
        
        if (turnedOn>=9) return {};
        array<vector<int>, 4> h;
        for (unsigned i=0; i<12; i++) {
            int bcount=popcount(i);
            h[bcount].push_back(i);
        }

        array<vector<int>, 6> m;
        for (unsigned i=0; i<60; i++) { 
            int bcount=popcount(i);
            m[bcount].push_back(i);
        }
        vector<string> ans;
        for (int i=0; i<=turnedOn; i++) {
            if (i>=4 || turnedOn-i>=6) continue; //impossible to display
            for (auto h0 : h[i]) {
                string hh=to_string(h0);
                int j=turnedOn-i;
                for (auto m0 : m[j]) {
                        string mm=":";
                    if (m0<=9) mm.push_back('0');
                    mm+=to_string(m0);
                    ans.push_back(hh+mm);
                }
            }
        }
        return ans;
    }
};
        }
        return cnt;
    }

    vector<string> readBinaryWatch(int turnedOn) {
        vector<string> ans;

        for (int h = 0; h < 12; h++) {
            for (int m = 0; m < 60; m++) {
                if (countSetBits(h) + countSetBits(m) == turnedOn) {
                    string time = to_string(h) + ":";
                    if (m < 10) time += "0";
                    time += to_string(m);
                    ans.push_back(time);
                }
            }
        }
        return ans;
    }
};