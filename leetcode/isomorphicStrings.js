var isIsomorphic = function(s, t) {
    if (t.length !== s.length) return false;
    const first = {};
    const used = {};
    for (let i = 0; i < s.length; i++) { 
        if (first[s[i]] && first[s[i]] !== t[i]) return false;
        if (!first[s[i]] && used[t[i]]) return false;
        
        used[t[i]] = true;
        first[s[i]] = t[i];
    }
    return true;
};
