function generateHashTag(str) {
    const res = str
        .split(' ')
        .map(w => `${w.charAt(0)
        .toUpperCase()}${w.slice(1)}`)
        .join('');
    
    if (!res.length || res.length > 140) return false;

    return `#${res}`;
};