import java.util.Arrays;
import java.util.Stack;

public class DailyTemp {
    public static void main(String[] args) {
        int[] temperatures = {73,74,75,71,69,72,76,73};
        System.out.println(Arrays.toString(dailyTemperatures(temperatures)));
    }

    public static int[] dailyTemperatures(int[] temperatures) {
        Stack<int[]> stack = new Stack<>();
        int[] count = new int[temperatures.length];
        int[] init = {0, temperatures[0]};
        stack.push(init);

        for (int i = 1; i < temperatures.length; i++) {
            int[] val = stack.peek();

            while (val[1] < temperatures[i] && !stack.empty()) {
                int[] current = stack.pop();
                if (!stack.empty()) {
                    val = stack.peek();
                }
                int curr = i - current[0];
                count[current[0]] = curr;
            }

            int[] init2 = {i, temperatures[i]};
            stack.push(init2);
        }
        return count;
    }
}
