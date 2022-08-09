function find4Number(n){
    for (let i= Math.floor(Math.sqrt(n - 1)); i>0; i--){
        for (let j=Math.floor(Math.sqrt(n - i ** 2)); j>0; j--){
            for (let k = Math.floor(Math.sqrt(n - i ** 2 + j ** 2)); k>0; k--){
                for (let l = Math.floor(Math.sqrt( n - i ** 2 + j ** 2 + k ** 2)); l>0; l--){
                    if (i**2 +j**2 + k**2 +l**2 ==n){
                        return [i, j, k, l];
                    }
                }
            }
        }
    }
}


console.log(find4Number(110))