class Solution {
public:
    bool hasValidPath(vector<vector<int>>& grid) {

       int m  = grid.size();
       int n = grid[0].size();

       vector<pair<int,int>> dirs = {
        {0,-1},
        {0,1},
        {-1,0},
        {1,0}
       };

       vector<vector<int>> streetDirs = {
        {},
        {0,1},
        {2,3},
        {0,3},
        {1,3},
        {0,2},
        {1,2}
       };

       vector<int> opposite = {1,0,3,2};

       
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        queue<pair<int,int>> q;
        q.push({0, 0});
        visited[0][0] = true;

        while (!q.empty()) {
            auto [r, c] = q.front();
            q.pop();

            if (r == m - 1 && c == n - 1) {
                return true;
            }

            int type = grid[r][c];

            for (int d : streetDirs[type]) {
                int nr = r + dirs[d].first;
                int nc = c + dirs[d].second;

                if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) {
                    continue;
                }

                int nextType = grid[nr][nc];

                bool ok = false;
                for (int nd : streetDirs[nextType]) {
                    if (nd == opposite[d]) {
                        ok = true;
                        break;
                    }
                }

                if (ok) {
                    visited[nr][nc] = true;
                    q.push({nr, nc});
                }
            }
        }

        return false;
    }
};