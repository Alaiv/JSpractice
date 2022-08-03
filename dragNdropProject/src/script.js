const dragableList = document.querySelector('#draggable-list');
const checkBtn = document.querySelector('#check');

const gunList = [
	"Benelli Supernova",
 	"Mossberg 500",
	"FN SLP",
	"Remington Model 870",
	"Kel-Tec KSG",
	"UTAS UTS-15",
	"Super Black Eagle 3",
	"SRM Arms model 1216",
	"VEPR-12 «Молот»",
	"Super Black Eagle II Shotgun"
]

const listItems = [];

let dragStartId;


function addItems() {
	[...gunList]
		.map(a => ({value: a, sort: Math.random()}))
		.sort((a, b) => a.sort - b.sort)
		.map(a => a.value)
		.forEach((item, index) => {

			const listItem = document.createElement('li');
			listItem.setAttribute('data-index', index);

			listItem.innerHTML = `
			<span class="number">${index + 1}</span>
			<div class="draggable" draggable="true">
			<p class="gun-name">${item}</p>
			<i class="fas fa-grip-lines"></i></div>`

			listItems.push(listItem);

			dragableList.appendChild(listItem);
		})

		addEventListeners();
}

window.addEventListener('onload', addItems());

function dragStart() {
	dragStartId = +this.getAttribute('data-index');
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter() {
	this.classList.add('over');
}

function dragLeave() {
	this.classList.remove('over');
}

function dragDrop() {
	const dragEndId = +this.getAttribute('data-index')

	swapElements(dragStartId, dragEndId);

	this.classList.remove('over');
}

function swapElements(dragStartIndex, dragEndIndex) {
	const startItem = listItems[dragStartIndex].querySelector('.draggable');
	const endItem = listItems[dragEndIndex].querySelector('.draggable');

	listItems[dragStartIndex].appendChild(endItem);
	listItems[dragEndIndex].appendChild(startItem);
}

function check() {
	listItems.forEach((item, id) => {
		const gunName = item.querySelector('.gun-name').innerText.trim();
		if(gunName !== gunList[id]) {
			item.classList.add('wrong')
		} else {
			item.classList.remove('wrong')
			item.classList.add('right')
		}
	})
}


function addEventListeners() {
	// const draggables = document.querySelectorAll('.draggable');
	const draggableList = document.querySelectorAll('.draggable-list li');

	// draggables.forEach(dragItem => {
	// 	dragItem.addEventListener('dragstart', dragStart);
	// })

	draggableList.forEach(item => {
		item.addEventListener('dragstart', dragStart);
		item.addEventListener('dragover', dragOver);
		item.addEventListener('dragenter', dragEnter);
		item.addEventListener('dragleave', dragLeave);
		item.addEventListener('drop', dragDrop);
	})
}

checkBtn.addEventListener('click', check);
