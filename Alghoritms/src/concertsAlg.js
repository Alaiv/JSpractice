const conc = {
    'Москва': new Date('2020-04-01'),
    'Казань': new Date('2022-09-27'),
    'Владивосток': new Date('2021-03-09'),
    'Питер': new Date('2022-10-22'),
    'Туапсе': new Date('2022-09-05')
}

function concerts() {
    let now = new Date()
    const cityArr = []

    // return Object.keys(conc)
    //     .filter(city => +conc[city] >= now)
    //     .sort((a, b) => {
    //         return +conc[a] - +conc[b]
    //     })


    for (let concKey in conc) {
        if(+conc[concKey] < now) {
        } else {
            cityArr.push(concKey)
        }
    }

    return cityArr.sort((a, b) => {
        a = +conc[a]
        b = +conc[b]
        return a - b
    })
}

console.log(concerts());