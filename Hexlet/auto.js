const solution = (txt) => {
  const result = [];
  let currWord = '';
  let state = 'before';

  for (let i = 0; i < txt.length; i++) {
    const symbol = txt[i];

    switch (state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          currWord += symbol;
          state = 'inside';
        }
        break;
      case 'inside':
        if (symbol !== ' ' && symbol !== '\n') {
          currWord += symbol;
        }
        if (symbol === ' ' || symbol === '\n') {
          result.push(currWord);
          currWord = '';
          state = symbol === ' ' ? 'after' : 'before';
        }
        break;
      case 'after':
        if (symbol === '\n') {
          state = 'before';
        }
    }
  }
  if (currWord.length > 0) result.push(currWord);
  return result;
}

const data = '      hi   \n' +
  '    hi how are you doing?\n' +
  '     hello who are you\n'
console.log(solution(data));