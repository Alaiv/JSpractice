function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    if(arr.length === 1) {
        let R = arr[0].avgAlt + earthRadius;
        let result = Math.round((2 * 3.141592653) * Math.sqrt((Math.pow(R, 3)) / GM));
        delete arr[0].avgAlt;
        arr[0].orbitalPeriod = result;
        return arr;
    }
    if(arr.length > 1) {
        for(let i = 0; i < arr.length; i++) {
            let result = Math.round((2 * 3.141592653) * Math.sqrt(((arr[i].avgAlt + earthRadius) ** 3) / GM));
            delete arr[i].avgAlt;
            arr[i].orbitalPeriod = result;
        }
        return arr;
    }
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));



//Решение 2
// function orbitalPeriod(arr) {
//     const GM = 398600.4418;
//     const earthRadius = 6367.4447;
//     const a = 2 * Math.PI;
//     const newArr = [];
//
//     const getOrbPeriod = function(obj) {
//         const c = Math.pow(earthRadius + obj.avgAlt, 3);
//         const b = Math.sqrt(c / GM);
//         const orbPeriod = Math.round(a * b);
//         // create new object
//         return {name: obj.name, orbitalPeriod: orbPeriod};
//     };
//
//     for (let elem in arr) {
//         newArr.push(getOrbPeriod(arr[elem]));
//     }
//
//     return newArr;
// }
//
// // test here
// orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);