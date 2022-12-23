import javax.imageio.metadata.IIOMetadataFormatImpl;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String f = "adc";
        String s = "dcda";

        System.out.println(checkInclusion(f, s));
    }

    public static boolean checkInclusion(String s1, String s2) {
        Map<Character, Integer> arr1 = new HashMap<>();

        for (int i = 0; i < s1.length(); i++) {
            int counter = arr1.getOrDefault(s1.charAt(i), 0);
            arr1.put(s1.charAt(i), counter + 1);
        }

        Map<Character, Integer> arr2 = new HashMap<>();
        int windowStart = 0;

        for (int i = 0; i < s2.length(); i++) {
            int counter = arr2.getOrDefault(s2.charAt(i), 0);
            arr2.put(s2.charAt(i), counter + 1);

            if (i >= s1.length() - 1) {
                boolean res = true;
                Set<Character> chars = arr1.keySet();
                for(char el : chars) {
                    if (!Objects.equals(arr2.get(el), arr1.get(el))) {
                        res = false;
                        break;
                    }
                }
                if (res) {
                    return true;
                }
                arr2.put(s2.charAt(windowStart), arr2.get(s2.charAt(windowStart)) - 1);
                windowStart++;
            }

        }

        return false;
    }
}