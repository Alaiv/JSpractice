var pacificAtlantic = function(heights) {
    const cols = heights[0].length;
    const rows = heights.length;
    const pac = {};
    const atl = {};

    const dfs = (r, c, ocean, prevValue) => {
        const cur = r + '-' + c;
        if (
            ocean[cur] !== undefined || r < 0 
            || c < 0 || r === rows
            || c === cols
            || heights[r][c] < prevValue
        ) return;

        ocean[cur] = [r, c];
        dfs(r + 1, c, ocean, heights[r][c])
        dfs(r - 1, c, ocean, heights[r][c])
        dfs(r, c + 1, ocean, heights[r][c])
        dfs(r, c - 1, ocean, heights[r][c])
    }

    for (let i = 0; i < cols; i++) {
        dfs(0, i, pac, heights[0][i]);
        dfs(rows - 1, i, atl, heights[rows - 1][i]);
    }

    for (let i = 0; i < rows; i++) {
        dfs(i, 0, pac, heights[i][0]);
        dfs(i, cols - 1, atl, heights[i][cols - 1]);
    }

    const res = Object.keys(atl).filter(key => pac[key]).map(v => pac[v]);
    return res;
};