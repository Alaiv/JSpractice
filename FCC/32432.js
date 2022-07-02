function titleCase(str) {
    let smth = str.split(" ")
    let newArr = [];
    for (let stuff in smth){
        newArr[stuff] = smth[stuff][0].toUpperCase() + smth[stuff].slice(1).toLowerCase();
    }
    return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));



// function titleCase(str) {
//     return str.toLowerCase().replace(/((^|\s)\S)/g, x => x.toUpperCase());
//
// }
//
// console.log(titleCase("I'm a little tea pot"));

//
//
// function titleCase(str) {
//     return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
// }
// console.log(titleCase("I'm a little tea pot"));