class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size();
        int n = matrix[0].size();
        int left = 0;
        int right = m - 1;

        int row = -1;

        // Find the last row whose first element is <= target
        while (left <= right) {
            int mid = (left + right) / 2;

            if (matrix[mid][0] <= target) {
                row = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (row == -1)
            return false;

        left = 0;
        right = n - 1;

        // Binary search inside the candidate row
        while (left <= right) {
            int mid = (left + right) / 2;

            if (matrix[row][mid] == target)
                return true;
            else if (matrix[row][mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return false;
    }
};
