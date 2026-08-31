
class Solution {
public:
    vector<int> nodesBetweenCriticalPoints(ListNode* head) {
        
    ListNode* curr = head;
    int index = 0;
    int first = -1, prev = -1, last = -1;
    int minDist =  INT_MAX;

    while(curr -> next != NULL && curr -> next -> next != NULL){
        if((curr->val > curr->next->val &&   curr->next->val <  curr->next->next->val) ||
        (curr->val < curr->next->val &&   curr->next->val >  curr->next->next->val)
        ){
            if(first == -1){
                first = index+1;
            }else{
                minDist = min(minDist ,(index+1)-prev);
            }
            prev = index + 1;
            last = index + 1;
        }
        curr = curr->next;
        index++;
    }
    if(first ==  last ){
        return{-1,-1};
    }



return {minDist , last-first};
    }
};