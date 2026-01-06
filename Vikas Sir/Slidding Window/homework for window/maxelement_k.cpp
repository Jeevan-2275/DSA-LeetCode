// find negative number in every window
// arr = [12,-1,-7,8,-15,30,16,28]
// k=3
// if no negative number found return 0

#include<iostream>
using namespace std;

int main(){
    int arr[]={12,-1,-7,8,-15,30,16,28};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k=3;
    int i=0;
    int j=0;
    // deque<int> dq;
    while(j<n){
        // window formation
        // if(arr[j]<0){
        //     dq.push_back(arr[j]);
        // }
        if(j-i+1<k){
            j++;
        }
        else if(j-i+1==k){
            // if(dq.size()==0){
            //     cout<<0<<" ";
            // }
            // else{
            //     cout<<dq.front()<<" ";
            //     if(arr[i]==dq.front()){
            //         dq.pop_front();
            //     }
            // }
            // slide the window
            i++;
            j++;
        }
    };
    return 0;
    
}       

