#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<vector<int>> matrix = {
        {1,1,1},
        {1,0,1},
        {1,1,1}
    };

    bool zeroinFirstCol = false;
    for(int  i =0; i < matrix.size();i++){
        if(matrix[i][0] == 0)             
            zeroinFirstCol = true;
        for(int j = 1; j < matrix[0].size();j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(int  i = matrix.size()-1;i>=0;i--){
        for(int j = matrix[0].size()-1;j >= 1;j--){
            if(matrix[i][0]==0 || matrix[0][j] == 0){
                matrix[i][j] = 0;
            }
        }
        if(zeroinFirstCol){
            matrix[i][0] = 0;
        }
    }

    for(const auto& row : matrix){
        for(const auto& val : row){
            cout << val << " ";
        }
        cout << endl;
    }

    return 0;
}