function cakes(recipe, available) {
    const resultArr = []

    for (let key of Object.keys(recipe)) {
        if (available[key] === undefined) {
            resultArr.push(0)
        } else if (available[key] !== undefined) {
            resultArr.push(Math.floor(available[key] / recipe[key]))
        }

    }
    return Math.min(...resultArr)

    //===============For Review


    // return Object.keys(recipe).reduce((val, value) => {
    //
    //     console.log(val)
    //      return Math.min(Math.floor((available[value] / recipe[value]) || 0), val)
    // }, Infinity)
}


let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 3, milk: 200};

console.log(cakes(recipe, available))