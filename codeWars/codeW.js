function moveZeros(arr) {
    let arrNew = []
   let newArr = arr.filter(function (value) {
       if(value !== 0) {
          return true
       } else {
           arrNew.push(value);
       }})
    for(let i of arrNew) {
        newArr.push(i);
    }
    return newArr;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));