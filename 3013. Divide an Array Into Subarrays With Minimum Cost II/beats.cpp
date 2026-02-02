
class Solution {
public:
    long long minimumCost(vector<int>& nums, int k, int dist) {
       int n =  nums.size();
long long ans = std::numeric_limits<long long>::max();

       if(k==1) return nums[0];

       multiset<int>  low,high;

       long long lowSum  = 0;

  auto  rebalance  = [&](){
    while((int)low.size() > k-2){
        auto it = prev(low.end());
        lowSum  -= *it;
        high.insert(*it);
        low.erase(it);

    }
    while((int)low.size() < k-2 && !high.empty()){
        auto it = high.begin();
        lowSum  += *it;
        low.insert(*it);
        high.erase(it);
    }
    
  };

   for(int j=2;j<=min(n-1,1+dist);j++){
    low.insert(nums[j]);
    lowSum   += nums[j];
   }

   rebalance ();

   if(low.size() == k-2)
   ans = nums[0] + nums[1] + lowSum ;

   for(int i=2;i<n;i++){
    int out =i ;

     if (low.find(nums[out]) != low.end()) {
                low.erase(low.find(nums[out]));
                lowSum -= nums[out];
            } else if (high.find(nums[out]) != high.end()) {
                high.erase(high.find(nums[out]));
            }

      int addIdx = i + dist;
            if (addIdx < n) {
                if (!low.empty() && nums[addIdx] <= *prev(low.end())) {
                    low.insert(nums[addIdx]);
                    lowSum += nums[addIdx];
                } else {
                    high.insert(nums[addIdx]);
                }
            }

    rebalance ();
    if((int)low.size() == k-2)
    ans = min(ans,nums[0] + nums[i]+lowSum );
   }
   return ans;
    }
};
