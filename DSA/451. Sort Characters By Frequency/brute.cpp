class Solution {
public:
    string frequencySort(string s) {
        unordered_map<char,int> freq;
        for( char c : s){
            freq[c]++;
        }

        vector<pair<int,char>>vec;
        for( auto it:freq){
            vec.push_back({it.second,it.first});
        }
                sort(vec.begin(), vec.end(), greater<>());
  string result ="";
  for(auto p:vec){
                result.append(p.first, p.second);


  };
  return result;
    }
};