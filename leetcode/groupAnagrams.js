var groupAnagrams = function(strs) {
    
    const res = strs.reduce((acc, val) => {
        const srtedVal = val
        .split('')
        .sort()
        .join('');
        
        acc[srtedVal] 
            ? acc[srtedVal].push(val) 
            : acc[srtedVal] = [val];

        return acc;
    },{})
    
    return Object.values(res);
}
