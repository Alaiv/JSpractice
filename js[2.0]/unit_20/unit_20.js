// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    document.querySelector(".out-1").innerHTML = document.querySelector(".i-1").value;

}

// ваше событие здесь!!!
document.querySelector(".i-1").oninput = t1;
// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2() {
    document.querySelector(".out-2").innerHTML = event.code;
}

// ваше событие здесь!!!
document.querySelector(".i-2").onkeydown = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3() {
    let check = document.querySelector(".i-3");
    if (event.code == `Digit${check.value}`) {
        document.querySelector(".out-3").innerHTML = false;
    } else if (event.code == `Key${check.value.toUpperCase()}`) {
        document.querySelector(".out-3").innerHTML = true;
    }
}

// ваше событие здесь!!!
document.querySelector(".i-3").onkeyup = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
    let low = document.querySelector(".i-4").value;
    document.querySelector(".out-4").innerHTML = low.toLowerCase();
}

// ваше событие здесь!!!
document.querySelector(".i-4").onkeydown = t4;
// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    let up = document.querySelector(".i-5").value;
    document.querySelector(".out-5").innerHTML = up.toUpperCase();
}

// ваше событие здесь!!!
document.querySelector(".i-5").onkeypress = t5;
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
    let low = document.querySelector(".i-6").value;
    if (event.code == `Key${low.toUpperCase()}`) {
        document.querySelector(".out-6").innerHTML += low;
    }
}

// ваше событие здесь!!!

document.querySelector(".i-6").onkeyup = t6;
// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = [1, 2, "4", "1", "hello", "q", "j", "2", 0, 10];
    let random = Math.round(Math.random() * (9 - 1 + 1) + 1);
    console.log(random)
    document.querySelector(".out-7").innerHTML = a7[random];
}

// ваше событие здесь!!!
document.querySelector(".i-7").onkeypress = t7;
// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {
    if (event.code == `KeyI`) {
        document.querySelector(".out-8").innerHTML = "1";
    } else if (event.code == "KeyO") {
        document.querySelector(".out-8").innerHTML = "0";
    } else if (event.code == "KeyL") {
        document.querySelector(".out-8").innerHTML = "7";
    } else {
        document.querySelector(".out-8").innerHTML = document.querySelector(".i-8").value;
    }
}

// ваше событие здесь!!!
document.querySelector(".i-8").onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let count = 0;

function t9() {
    if (event.code == "ArrowDown") {
        count++;
        document.querySelector(".out-9").innerHTML = count;
    }

}

// ваше событие здесь!!!

document.querySelector(".i-9").onkeydown = t9;
// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let width = 75;
let height = 75;

function t10() {
    if (event.code == "ArrowLeft" || "ArrowRight") {
        document.querySelector(".div-10 img").style.width = width + "px"
        width++;
    } else if (event.code == "ArrowUp" || "ArrowDown") {
        document.querySelector(".div-10 img").style.height = height + "px"
        height++;
    }
}

// ваше событие здесь!!!
document.querySelector(".i-10").onkeydown = t10;
// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

// document.querySelector(".i-11").onkeydown = t11;

// function t11() {
//
//     let div = document.querySelectorAll(".board");
//
//     for (let i in div) {
//         if (event.code == `Key${div[i].textContent.toUpperCase()}`) {
//             div[i].classList.add("active");
//         } else if (event.code == `Digit${div[i].textContent}`) {
//             div[i].classList.add("active");
//         } else if (event.code == div[i].textContent) {
//             div[i].classList.add("active");
//         } else if (div[i].classList.contains("active") && event.key !== div[i].textContent) {
//             div[i].classList.remove("active");
//         }
//     }
// }
function t11() {

    let div = document.querySelectorAll(".board");



    div.forEach(function(name, i) {
        if (event.code == `Key${div[i].textContent.toUpperCase()}`) {
            div[i].classList.add("active");
        } else if (event.code == `Digit${div[i].textContent}`) {
            div[i].classList.add("active");
        } else if (event.code == div[i].textContent) {
            div[i].classList.add("active");
        } else if (div[i].classList.contains("active") && event.key !== div[i].textContent) {
            div[i].classList.remove("active");
        }
    })
}
document.querySelector(".i-11").onkeydown = t11;