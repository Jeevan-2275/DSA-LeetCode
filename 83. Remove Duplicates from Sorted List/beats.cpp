
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
     if (!head) return head;

     ListNode* temp = head;
     while(temp){
        if(temp->next && temp->val == temp->next->val){
            temp->next = temp->next->next;
        }else{
            temp = temp->next;
        }
     }   
     return head;
    }
};