#include<iostream>
using  namespace std;
void reversestring(string str, int index){
    if(index < 0 )
    return ;
    cout << str[index];
    reversestring(str, index-1);
}

int main(){
    string str = "Hello";
    reversestring(str ,str.length() -1 );
    return 0;
}