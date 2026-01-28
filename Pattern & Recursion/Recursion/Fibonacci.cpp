




#include<iostream>
using namespace std;
int  fibbonacci(int n ){
    if(n==0) return 0;
    if(n==1) return 1;
    
    return fibbonacci(n-1) + fibbonacci(n-2);
    
}
int main(){
    int n =6;
    cout << fibbonacci(n);
    return 0;
}