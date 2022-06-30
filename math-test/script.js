let button = document.getElementById("btn");
button.addEventListener("click", boi);


function boi() {
    let result = 0;

    let a1 = +document.getElementById("q1").value;
    if (a1 === 100) {
        result++;
    }
    let a2 = +document.getElementById("q2").value;
    if (a2 === 10) {
        result++;
    }
    let a3 = +document.getElementById("q3").value;
    if (a3 === 0.5) {
        result++;
    }
    let a4 = +document.getElementById("q4").value;
    if (a4 === 1) {
        result++;
    }
    let a5 = +document.getElementById("q5").value;
    if (a5 === 1100) {
        result++;
    }
    let a6 = +document.getElementById("q6").value;
    if (a6 === 500) {
        result++;
    }
    document.querySelector(".out").innerHTML = "Количество правильных ответов: " + result;
}



