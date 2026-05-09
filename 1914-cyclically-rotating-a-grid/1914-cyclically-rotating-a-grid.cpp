class Solution {
public:
    vector<vector<int>> rotateGrid(vector<vector<int>>& grid, int k) {

        int T = 0, L = 0;
        int B = grid.size() - 1;
        int R = grid[0].size() - 1;

        while (T < B && L < R) {

            int len = B - T;
            int wid = R - L;

            int perimeter = 2 * len + 2 * wid;

            int r = k % perimeter;

            while (r-- > 0) {

                int tmp = grid[T][L];

                // top row
                for (int i = L; i < R; i++) {
                    grid[T][i] = grid[T][i + 1];
                }

                // right column
                for (int i = T; i < B; i++) {
                    grid[i][R] = grid[i + 1][R];
                }

                // bottom row
                for (int i = R; i > L; i--) {
                    grid[B][i] = grid[B][i - 1];
                }

                // left column
                for (int i = B; i > T; i--) {
                    grid[i][L] = grid[i - 1][L];
                }

                grid[T + 1][L] = tmp;
            }

            T++;
            L++;
            B--;
            R--;
        }

        return grid;
    }
};