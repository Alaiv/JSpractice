var averageOfLevels = function(root) {
  if (root === null) return 0;
  let currLevel = 0;
  const queue = [{node: root, level: 1}];
  const result = [];
  let amount = 1;
  while(queue.length) {
    const {node, level} = queue.shift();
    if (node.left) queue.push({node: node.left, level: level + 1});
    if (node.right) queue.push({node: node.right, level: level + 1});

    if (level === currLevel) {
      amount++;
      result[result.length - 1] += node.val
    } else if (level !== currLevel) {
      result[result.length - 1] /= amount;
      amount = 1;
      result.push(node.val);
      currLevel++;
    }
  }
  result[result.length - 1] /= amount;
  return result;
};



