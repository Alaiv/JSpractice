import java.util.Arrays;

public class Water {
    public static void main(String[] args) {
        int[] height = {0,1,0,2,1,0,1,3,2,1,2,1};

        System.out.println(trap(height));
    }

    public static int trap(int[] height) {
        int[] arr1 = new int[height.length];
        int[] arr2 = new int[height.length];
        arr1[0] = 0;
        arr2[height.length - 1] = 0;

        int leftMax = 0;
        int rightMax = 0;
        int rightPointer = height.length - 1;

        for (int i = 1; i < height.length; i++) {
            leftMax = Math.max(height[i - 1], leftMax);
            rightMax = Math.max(height[rightPointer], rightMax);
            arr1[i] = leftMax;
            arr2[rightPointer - 1] = rightMax;
            rightPointer--;
        }

        int res = 0;

        for (int i = 0; i < arr1.length; i++) {
            int val = Math.min(arr1[i], arr2[i]) - height[i];
            res += Math.max(val, 0);
        }
        return res;
    }
}
