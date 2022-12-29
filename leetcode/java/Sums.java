import java.util.*;

public class Sums {
    public static void main(String[] args) {
        int[] arr = {1, -1, 1, 1, 1, 1};

        System.out.println(subarraySum(arr, 3));
    }


    public static int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int count = 0;
        int sum = 0;

        for (var num : nums) {
            sum += num;
            int diff = sum - k;

            count += map.getOrDefault(diff, 0);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}
