var combinationSum = function(candidates, target) {
    const result = [];
    
    const bt = (i, cur, total) => {
        if (total === target) {
            result.push([...cur]);
            return;
        }
        
        if (total > target || i >= candidates.length) return;
        
        cur.push(candidates[i]);
        bt(i, cur, total + candidates[i]);
        cur.pop();
        bt(i + 1, cur, total)
        
    }
    bt(0, [], 0);
    
    return result;
};