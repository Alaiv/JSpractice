var cloneGraph = function(node) {
    const visited = {};

    const d = (node) => {
        if (visited[node.val]) return visited[node.val];
        const clone = new Node(node.val);
        visited[node.val] = clone;
        clone.neighbors = node.neighbors.map(n => d(n));
        return clone;
    };
    return node ? d(node) : null;
};