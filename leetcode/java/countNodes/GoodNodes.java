package countNodes;

import java.util.Stack;

public class GoodNodes {
    public static void main(String[] args) {
        TreeNode node = new TreeNode(3);
        TreeNode node2 = new TreeNode(1);
        TreeNode node3 = new TreeNode(3);
        TreeNode node4 = new TreeNode(4);
        TreeNode node5 = new TreeNode(1);
        TreeNode node6 = new TreeNode(5);
        node.left = node2;
        node2.left = node3;
        node.right = node4;
        node4.right = node6;
        node4.left = node5;
        System.out.println(goodNodes(node));
    }

    private static void countNodes(TreeNode tree, Stack<Integer> arr, int max) {
        if (tree == null) return;

        if (tree.val >= max) {
            System.out.println(tree.val);
            max = tree.val;
            arr.push(tree.val);
        }

        countNodes(tree.left, arr, max);
        countNodes(tree.right, arr, max);
    }

    public static int goodNodes(TreeNode root) {
        if (root == null) {
            return 0;
        }
        Stack<Integer> stack = new Stack<>();
        stack.push(1);

        countNodes(root.left, stack, root.val);
        countNodes(root.right, stack, root.val);
        return stack.size();
    }
}
