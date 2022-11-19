var longestPalindrome = function(s) {
    if (!s.length) return '';
    if (s.length === 1) return s;
    let result = "";
    let len = 0;
    
    const checkForPali = (l, r) => {
            while(l >= 0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > len) {
                result = s.substring(l, r + 1);
                len = r - l + 1
            }
            l--;
            r++;
        };
    }

    for(let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        
        checkForPali(l, r);
        
        l = i;
        r = i + 1;
        
        checkForPali(l, r);
    }
    
    return result;
};
