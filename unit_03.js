// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
let input = document.querySelector('.i-1');
let result = document.querySelector('.out-1')

function f1(){
	if(input.value == 4){
	result.innerHTML = 'true';
}else{
	result.innerHTML = 'false';
}
}
document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let results = document.querySelector('.out-2');

function f2(){
	if(a21 > a22){
		results.innerHTML = a21;
	}else{
		results.innerHTML = a22;
	}
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.
let resultz = document.querySelector('.out-3');
let inp31 = document.querySelector('.i-31');
let inp32 = document.querySelector('.i-32');

function f3(){
		if(+inp31.value > +inp32.value){
			resultz.innerHTML = inp31.value;
	   }else{
			resultz.innerHTML = inp32.value;
		}
}

document.querySelector('.b-3').onclick = f3;



// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
let resultx = document.querySelector('.out-4');
let agecheck = document.querySelector('.i-4');

function f4(){
	if(agecheck.value >= 18){
	resultx.innerHTML = '1';
}else{
	resultx.innerHTML = '0';
}
}



document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.
let resultu = document.querySelector('.out-5');
let agechek = document.querySelector('.i-5');


function f5(){
	if(agechek.value < 0){
		resultu.innerHTML = 'm';
	}else if(agechek.value == 0){
		resultu.innerHTML = 0;
	}else{
		resultu.innerHTML = 1;
	}
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.
let tu = document.querySelector('.out-6');
let chek = document.querySelector('.i-6');

function f6(){
	if(chek.value % 2 == 0){
		tu.innerHTML = 'even';
	}else{
		tu.innerHTML = 'odd';
	}
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.
let rests = document.querySelector('.out-7');
let type = document.querySelector('.i-71');
let typeTwo = document.querySelector('.i-72');
function f7(){
	rests.innerHTML = type.value ** typeTwo.value;
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.
let sel = document.querySelector('.s-8');
let out = document.querySelector('.out-8');

function f8(){
	let num = +sel.value;
	switch(num){
		case 1:
			out.innerHTML = 'one';
			break;
		case 2:
			out.innerHTML = 'two';
			break;
		default:
			out.innerHTML = 'three';
	}
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.
let sInput = document.querySelector('.i-9');
let sOut = document.querySelector('.out-9');

function f9(){
	let num = +sInput.value;
	if(num >= 1 && num <= 32){
		sOut.innerHTML = '1';
	}else if(num >= 33 && num <= 43){
		sOut.innerHTML = '2';
	}else if(num >= 44 && num <= 64){
		sOut.innerHTML = '3';
	}else{
		sOut.innerHTML = '4';
	}	
}
document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let tInput = document.querySelector('.s-100');
let tOut = document.querySelector('.out-10');

function f10(){
	tOut.innerHTML = tInput.value;

}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.
let zInput = document.querySelector('.s-110');
let zOut = document.querySelector('.out-11');

function f11(){
	zOut.innerHTML = zInput.value;
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12(){
    let v = i120.value;
    document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
let i130 = document.querySelector('.i-130')

function f13(){
	let num = i130.value;
	document.querySelector('.out-13').innerHTML = (typeof num);
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.
let input141 = document.querySelector('.i-141');
let input142 = document.querySelector('.i-142');
let select143 = document.querySelector('.s-143')
let div141 = document.querySelector('.out-14')

function f14(){
	let stuff = select143.value;
	if(stuff == '+'){
		div141.textContent = +input141.value + +input142.value;
	}else if(stuff == '-'){
		div141.textContent = +input141.value - +input142.value;
	}else if(stuff == '*'){
		div141.textContent = +input141.value * +input142.value;
	}else {
		div141.textContent = +input141.value / +input142.value;
	}
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
let select151 = document.querySelector('.s-151');
let select152 = document.querySelector('.s-152');
let select153 = document.querySelector('.s-153');
let div15 = document.querySelector('.out-15');


function f15(){
	if(select153.value == '&&'){
		div15.innerHTML = +select151.value && +select152.value;
	}else{
		div15.innerHTML = +select151.value || +select152.value;
	}
}

document.querySelector('.b-15').onclick = f15;



