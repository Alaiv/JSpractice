let numButtons = document.getElementsByClassName("calculator__num");
let resultBtns = document.getElementsByClassName("check");
let deleteBtn = document.getElementById("BtnDelete");
let result = document.getElementById("BtnIs");
let textBox = document.querySelector(".calculator__visual");

let arr = [];

function clear() {
    textBox.innerHTML = "";
    for (let i = 0; i <= arr.length; i++) {
        arr.splice(0, arr.length);
    }
}

function operation(event) {
    let clickedElem = event.currentTarget;
    let previous = textBox.innerHTML;
    arr.push(+previous);
    arr.push(clickedElem.innerHTML)
    textBox.innerHTML = "";
}

function resultOperation() {
    let current = textBox.innerHTML
    arr.push(+current);

    if (arr[1] === "*") {
        textBox.innerHTML = arr[0] * arr[2];
    } else if (arr[1] === "+") {
        textBox.innerHTML = arr[0] + arr[2];
    } else if (arr[1] === "-") {
        textBox.innerHTML = arr[0] - arr[2];
    } else if (arr[1] === "/") {
        textBox.innerHTML = arr[0] / arr[2];
    } else {
        textBox.innerHTML = "Undefined"
    }
}



for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].onclick = render;
}


for (let i = 0; i < resultBtns.length; i++) {
    resultBtns[i].onclick = operation;
}

deleteBtn.onclick = clear;

result.onclick = resultOperation;


function render(event) {
    let clickedElem = event.currentTarget;
    textBox.innerHTML += clickedElem.innerHTML;
}