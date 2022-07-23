let clockDiv = document.querySelector("#clocks");


// setInterval(() => {
//     let date = new Date();
//     let hours = String(date.getHours()).padStart(2, "0");
//     let minutes = String(date.getMinutes()).padStart(2, "0");
//     let seconds = String(date.getSeconds()).padStart(2, "0");
//
//     clockDiv.innerHTML = `${hours}:${minutes}:${seconds}`
// }, 1000)


let count = 0;
let current = 0;



let boi;

function counting() {
    if (clockDiv.className === "active") {
        clockDiv.className = "inactive"
        clearInterval(boi)
    } else if (clockDiv.className === "inactive") {
        clockDiv.className = "active"
        boi = setInterval(() => {
            let date = new Date(0);
            count = count + 11
            current = count;
            date.setMilliseconds(count)
            let minutes = String(date.getMinutes()).padStart(2, "0");
            let seconds = String(date.getSeconds()).padStart(2, "0");
            let ms = (date.getMilliseconds() / 10).toFixed(0)
            clockDiv.innerHTML = `${minutes}:${seconds}:${ms}`;
        }, 11)
    }
}

clockDiv.addEventListener("click", counting)
