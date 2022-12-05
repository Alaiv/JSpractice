var canFinish = function(numCourses, prerequisites) {
    const map = {};
    const visited = new Set();
    
    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }
    
    for (const [f, s] of prerequisites) {
        map[f].push(s);
    }
    
    const iter = (i) => {
        if (!map[i].length) return true;
        if (visited.has(i)) return false;
        visited.add(i);
        
        for (const val of map[i]) {
            if (!iter(val)) return false;
        }
        
        visited.delete(i);
        map[i] = [];
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!iter(i)) return false
    }

    
    return true;
};
