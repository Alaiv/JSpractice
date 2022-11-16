const dfs = (grid, i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length 
        || grid[i][j] === "0" || grid[i][j] === 2) return;

        grid[i][j] = 2;
        dfs(grid, i - 1, j)
        dfs(grid, i + 1, j) 
        dfs(grid, i, j - 1)
        dfs(grid, i, j + 1)
}

var numIslands = function(grid) {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j)
                count++;        
            }                      
        }
    }
    return count;
};
