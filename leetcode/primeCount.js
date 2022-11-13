var countPrimes = function(n) {
    if (n < 2) return 0;
    const notPrime = new Array(n);
    
    for (let i = 2; i < Math.sqrt(n); i++) {  
        if (notPrime[i] === undefined) {
          for(let j = 2; i*j < n; j++) {
            notPrime[i * j] = true;
            };
        }
    }
    
    let count = 0;
    
    for (let i = 2; i < n; i++) {
        if (notPrime[i] === undefined) count++;
    }
    
    return count;
};
