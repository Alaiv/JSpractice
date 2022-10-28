var backspaceCompare = function(s, t) {
  const stack1 = [];
  const stack2 = []
  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (s[i] !== '#') stack1.push(s[i]);
    if (t[i] !== '#') stack2.push(t[i]);

    if (s[i] === '#') {
      stack1.pop();
    }

    if (t[i] === '#') {
      stack2.pop();
    }
  }

  return stack1.join('') === stack2.join('');
};