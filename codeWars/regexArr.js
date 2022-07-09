
function solution(str) {

    if(str.length % 2 !== 0) {
        str = str + "_"
        return (str.match(/.{1,2}/g)) || [];
    } else if(str.length % 2 == 0){
        return (str.match(/.{1,2}/g)) || [];
    }
}

console.log(solution("qwert"));