function rakeGarden(garden) {
    let arr = garden.split(" ")
    for(let i in arr) {
        if(arr[i] == "rock") {
            continue;
        } else if (arr[i] !== "gravel") {
            arr[i] = "gravel";
        }
    }
    let result = arr.join(" ")
    return result
}

console.log(rakeGarden( 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'));

