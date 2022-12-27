import java.util.Arrays;

public class BinaryMatrix {
    public static void main(String[] args) {
        int[][] matrix = {
                {1},{3}, {5}
        };

        System.out.println(searchMatrix(matrix, 5));
    }

    public static boolean bSearch (int[] arr, int target) {
        if (arr.length == 0) {
            return false;
        }

        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
    public static boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length < 2) {
            return bSearch(matrix[0], target);
        }

        int left = 0;
        int right = matrix.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int len = matrix[mid].length - 1;
            if (matrix[mid][0] > target) {
                right = mid - 1;
            } else if (matrix[mid][0] < target && matrix[mid][len] < target) {
                left = mid + 1;
            } else {
                return bSearch(matrix[mid], target);
            }
        }
        return false;
    }
}
