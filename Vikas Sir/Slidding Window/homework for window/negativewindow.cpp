
// find the maximum element in the even window of size k
// arr = [1,3,-1,-3,5,3,6,7]
// k=3

#include<iostream>
#include<climits>
using namespace std;

int main(){
    int arr[]={12,-1,-7,8,-15,30,16,28};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k=3;
    int i=0;
    int j=0;
    // for(int i=0;i<=n-k;i++){
        // int maxe=INT_MIN;
    //     for(int j=i;j<i+k;j++){
    //         if(arr[j]<0){
    //             maxe=max(maxe,arr[j]);
    //         }
    //     }
    //     if(maxe==INT_MIN){
    //         cout<<0<<" ";
    //     }
    //     else{
    //         cout<<maxe<<" ";
    //     }
    // }
    // return 0;

    while(j<n){
        if(j-i+1<k){
            j++;
        }
        else if(j-i+1==k){
            int maxe=INT_MIN;
            for(int m=i;m<=j;m++){
                if(arr[m]<0){
                    maxe=max(maxe,arr[m]);
                }
            }
            if(maxe==INT_MIN){
                cout<<0<<" ";
            }
            else{
                cout<<maxe<<" ";
            }
            i++;
            j++;
        }
    }
    return 0;
}




