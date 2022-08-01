const container = document.querySelector('.container');
const btnOne = document.querySelector('.first');
const btnTwo = document.querySelector('.second');
const colorsArrOne = ['blue', 'red', 'aquablue', 'green', 'yellow', 'orange', '#7ecc71'];
const colorsArrTwo = ['puple', 'gray', 'white', 'pink', 'brown', 'lightgray'];
let colorsArr = ['ivory']
const squares = 500;

btnOne.onclick = () => {
	colorsArr = [...colorsArrOne]
}

btnTwo.onclick = () => {
	colorsArr = [...colorsArrTwo]
}


for(let i = 0; i < squares; i++){
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));

	square.addEventListener('mouseout', () => removeColor(square));

	container.appendChild(square);
}

function setColor(el) {
	const color = getRandomColor()
	el.style.background = colorsArr[color]
	el.style.boxShadow = `0 0 2px ${colorsArr[color]}, 0 0 10px ${colorsArr[color]}`
}

function removeColor(el) {
	el.style.background = "#1d1d1d";
	el.style.boxShadow = 'none';
}

function getRandomColor() {
	return Math.floor(Math.random() * colorsArr.length);
}