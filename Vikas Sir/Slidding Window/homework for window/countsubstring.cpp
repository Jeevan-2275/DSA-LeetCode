// count how many substrings of size k are anagrams of pattern k.
// str="aabaabaa"
// pattern="aaba"
// k=4

#include<iostream>
#include<unordered_map>
using namespace std;


int main(){
    string str="aabaabaa";
    string pattern="aaba";
    int k=pattern.length();
    unordered_map<char,int> patmap;
    for(int i=0;i<pattern.length();i++){
        patmap[pattern[i]]++;
    }
    int i=0;
    int j=0;
    int count=patmap.size();
    int ans=0;
    while(j<str.length()){
        // calculation
        if(patmap.find(str[j])!=patmap.end()){
            patmap[str[j]]--;
            if(patmap[str[j]]==0){
                count--;
            }
        }
        // window size not reached
        if(j-i+1<k){
            j++;
        }
        // window size reached
        else if(j-i+1==k){
            // ans calculation
            if(count==0){
                ans++;
            }
            // slide the window
            if(patmap.find(str[i])!=patmap.end()){
                patmap[str[i]]++;
                if(patmap[str[i]]==1){
                    count++;
                }
            }
            i++;
            j++;
        }
    };
    cout<<ans;
    return 0;
}   