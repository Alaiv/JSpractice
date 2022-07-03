function sortMyString(S) {
    let newArr = [];
    let even = "";
    let odd = "";
    for(let i = 0; i < S.length; i++){
        newArr.push(S[i]);
    }
    for(let k = 0; k < newArr.length; k++){
        if(k % 2 == 0){
            even += newArr[k];
        } else{
            odd += newArr[k];
        }
    }
    return even + " " + odd;

}

console.log(sortMyString("CodeWars"));