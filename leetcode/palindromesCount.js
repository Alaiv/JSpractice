var countSubstrings = function(s) {
    if (s.length === 1) return 1;
    let result = 0;
    
    isPalindrome = (l, r) => {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            result += 1;
            l--;
            r++;
        }
    }
    
    
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        
        isPalindrome(l, r);
        
        l = i;
        r = i + 1;
        
        isPalindrome(l, r);
    }
    
    return result;
};