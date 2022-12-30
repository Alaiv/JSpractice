import java.util.*;

public class sudoku {
    public static void main(String[] args) {
        String[][] board =
                {{"5","3",".",".","7",".",".",".","."}
                ,{"6","5",".","1","9","5",".",".","."}
                ,{".","9","8",".",".",".",".","6","."}
                ,{"8",".",".",".","6",".",".",".","3"}
                ,{"4",".",".","8",".","3",".",".","1"}
                ,{"7",".",".",".","2",".",".",".","6"}
                ,{".","6",".",".",".",".","2","8","."}
                ,{".",".",".","4","1","9",".",".","5"}
                ,{".",".",".",".","8",".",".","7","9"}};

        System.out.println(isValidSudoku(board));
    }

    public static boolean isValidSudoku(String[][] board) {
        Map<Integer, Set<String>> cols = new HashMap<>();
        Map<Integer, Set<String>> rows = new HashMap<>();
        Map<String, Set<String>> boxes = new HashMap<>();

        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (board[r][c].equals(".")) {
                    continue;
                }
                if (rows.containsKey(r) && rows.get(r).contains(board[r][c])) {
                    return false;
                }

                if (cols.containsKey(c) && cols.get(c).contains(board[r][c])) {
                    return false;
                }

                String val1 = (r / 3) + "";
                String val2 = (c / 3) + "";
                String boxKey = val1 + val2;
                if (boxes.containsKey(boxKey) && boxes.get(boxKey).contains(board[r][c])) {
                    return false;
                }

                if (!rows.containsKey(r)) {
                    Set<String> t = new HashSet<>();
                    t.add(board[r][c]);
                    rows.put(r, t);
                } else {
                    rows.get(r).add(board[r][c]);
                }

                if (!cols.containsKey(c)) {
                    Set<String> t = new HashSet<>();
                    t.add(board[r][c]);
                    cols.put(c, t);
                } else {
                    cols.get(c).add(board[r][c]);
                }

                if (!boxes.containsKey(boxKey)) {
                    Set<String> t = new HashSet<>();
                    t.add(board[r][c]);
                    boxes.put(boxKey, t);
                } else {
                    boxes.get(boxKey).add(board[r][c]);
                }
            }
        }
        return true;
    }
}
