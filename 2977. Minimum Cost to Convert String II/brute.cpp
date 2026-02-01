class Solution {
public:
    long long minimumCost(string source, string target,
                          vector<string>& original,
                          vector<string>& changed,
                          vector<int>& cost) {

        const long long INF = (1LL<<60);

        // 1) Give every unique pattern an id
        unordered_map<string,int> id;
        int idx = 0;

        for (auto &s: original) if (!id.count(s)) id[s] = idx++;
        for (auto &s: changed)  if (!id.count(s)) id[s] = idx++;

        int M = idx;

        // 2) Floyd-Warshall on patterns
        vector<vector<long long>> dist(M, vector<long long>(M, INF));
        for (int i = 0; i < M; i++) dist[i][i] = 0;

        for (int i = 0; i < (int)original.size(); i++) {
            int u = id[original[i]];
            int v = id[changed[i]];
            dist[u][v] = min(dist[u][v], (long long)cost[i]);
        }

        for (int k = 0; k < M; k++)
            for (int i = 0; i < M; i++)
                if (dist[i][k] < INF)
                    for (int j = 0; j < M; j++)
                        if (dist[k][j] < INF)
                            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);

        // 3) Group patterns by length
        unordered_map<int, vector<string>> byLen;
        unordered_set<int> lens;
        for (auto &p : id) {
            byLen[(int)p.first.size()].push_back(p.first);
            lens.insert((int)p.first.size());
        }
        vector<int> lengths(lens.begin(), lens.end());

        // 4) DP over positions
        int n = source.size();
        vector<long long> dp(n + 1, INF);
        dp[n] = 0;

        unordered_map<int, unordered_map<string,int>> mapLenToId;
        for (auto &p : id) {
            mapLenToId[(int)p.first.size()][p.first] = p.second;
        }

        for (int i = n - 1; i >= 0; i--) {
            if (source[i] == target[i] && dp[i+1] < INF) {
                dp[i] = min(dp[i], dp[i+1]);
            }

            for (int len : lengths) {
                if (i + len > n) continue;

                string subS = source.substr(i, len);
                string subT = target.substr(i, len);

                auto &mp = mapLenToId[len];
                if (!mp.count(subS) || !mp.count(subT)) continue;

                int u = mp[subS];
                int v = mp[subT];
                if (dist[u][v] >= INF || dp[i + len] >= INF) continue;

                dp[i] = min(dp[i], dist[u][v] + dp[i + len]);
            }
        }

        return dp[0] >= INF ? -1 : dp[0];
    }
};
