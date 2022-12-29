import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;
import java.util.stream.Collectors;

public class Pars {
    public static void main(String[] args) {
        System.out.println(generateParenthesis(3));
    }

    private static void bt(Stack<Character> stack, List<String> res, int leftP, int rightP, int n) {
        if (leftP == rightP &&  leftP == n) {
            StringBuilder str = new StringBuilder();
            for (var el : stack.toArray()) {
                str.append(el);
            }
            res.add(str.toString());
        }

        if (leftP < n) {
            stack.push('(');
            bt(stack, res, leftP + 1, rightP, n);
            stack.pop();
        }

        if (leftP > rightP) {
            stack.push(')');
            bt(stack, res, leftP, rightP + 1, n);
            stack.pop();
        }
    }

    public static List<String> generateParenthesis(int n) {
        Stack<Character> stack = new Stack<>();
        List<String> res = new ArrayList<>();

        bt(stack, res, 0, 0, n);

        return res;
    }
}
