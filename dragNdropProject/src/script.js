const drggableList = document.querySelector('#draggable-list');
const checkBtn = document.querySelector('#check');

const bestGames = [
	 'Bloodborne',
	 'Kotor',
	 'Kotor2',
	 'Elden ring',
	 'Sekiro',
	 'Dark souls 1-3',
	 'Yakuza 0',
	 'Warhammer Online',
	 'Vermintide',
	 'Mass effect 1-3',
];
//store list items
const listItems = [];

let dragStartIndex;

//insert listItems into DOM;

function createList() {
	[...bestGames]
	.map(a => ({value: a, sort: Math.random()}))
	.sort((a, b) => a.sort - b.sort)
	.map(a => a.value)
	.forEach((game, index) => {
		const listItem = document.createElement('li');

		listItem.setAttribute('data-index', index);

		listItem.innerHTML = `<span class='number'>${index + 1}</span>
		<div class='draggable' draggable='true'>
		<p class="game-name">${game}</p>
		<i class="fas fa-grip-lines"></i>
		</div>`;

		listItems.push(listItem);

		drggableList.appendChild(listItem)
	})

	addEventListeners();
}

window.addEventListener('onload', createList())

function dragStart() {
	dragStartIndex = +this.closest('li').getAttribute('data-index')
}

function dragEnter() {
	this.classList.add('over')
}

function dragLeave() {
	this.classList.remove('over')
}

function dragOver(event) {
	event.preventDefault();
}

function dragDrop() {
	const dragEndIndex = +this.getAttribute('data-index');

	swapItems(dragStartIndex, dragEndIndex);

	this.classList.remove('over');
}
//swap list items from index to index2
function swapItems(fromIx, toIx) {
	const itemOne = listItems[fromIx].querySelector('.draggable');
	const itemTwo = listItems[toIx].querySelector('.draggable');

	listItems[fromIx].appendChild(itemTwo)
	listItems[toIx].appendChild(itemOne)
}
//check order
function checkOrder() {
	listItems.forEach((item, index) => {
		const gameName = item.querySelector('.draggable').innerText.trim();
		console.log(gameName);
		if(gameName !== bestGames[index]) {
			item.classList.add('wrong')
		} else {
			item.classList.remove('wrong');
			item.classList.add('right')
		}
	})
}

function addEventListeners() {
	const draggables = document.querySelectorAll('.draggable');
	const draggListItems = document.querySelectorAll('.draggable-list li');

	draggables.forEach(draggable => {
		draggable.addEventListener('dragstart', dragStart);
	})

	draggListItems.forEach(item => {
		item.addEventListener('dragover', dragOver);
		item.addEventListener('drop', dragDrop);
		item.addEventListener('dragenter', dragEnter);
		item.addEventListener('dragleave', dragLeave);
	})
}

checkBtn.addEventListener('click', checkOrder);
