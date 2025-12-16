// variable size window
//  longest subarray with sum k
// arr=[4,1,1,1,2,3,5];
// k=5

#include<iostream>
using namespace std;


int main(){
    int arr[]={4,1,1,1,2,3,5};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k=5;
    int i=0;
    int j=0;
    int currsum=0;
    int maxlen=0;
    // for(int i=0;i<n;i++){
    //     currsum+=arr[i];
    //     while(currsum>k){
    //         currsum-=arr[j];
    //         j++;
    //     }
    //     if(currsum==k){
    //         maxlen=max(maxlen,i-j+1);
    //     }
    // };
    // cout<<maxlen;
    // return 0;
 while(j<n){
        currsum+=arr[j];
        while(currsum>k){
            currsum-=arr[i];
            i++;
        }
        if(currsum==k){
            maxlen=max(maxlen,j-i+1);
        }
        j++;
    };
    cout<<maxlen;
    return 0;
    
}

// output= 4