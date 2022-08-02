const fill = document.querySelector('.fill');
const empty = document.querySelectorAll('.empty');

//Fill listeners

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through empty's nodes and call drag events
for(const empt of empty) {
	empt.addEventListener('dragover', dragOver);
	empt.addEventListener('dragenter', dragEnter);
	empt.addEventListener('dragleave', dragLeave);
	empt.addEventListener('drop', dragDrop);
}


//Drag functions
function dragStart() {
	this.classList += ' hold'
	setTimeout(() => this.classList = 'invisible', 0)
}

function dragEnd() {
	this.classList = 'fill'
}

function dragOver(event) {
	event.preventDefault();
}

function dragEnter(event) {
	event.preventDefault();
	this.classList += ' hovered';
}

function dragLeave() {
	this.classList = 'empty'
}

function dragDrop() {
	this.classList = 'empty'
	this.append(fill)
}