// weirdReverse=a=>a.sort(a=>1)
weirdReverse=a=>a.map([].pop,[...a])

console.log(weirdReverse([1, 2, 3, 'a', 'b', 'c', []]))