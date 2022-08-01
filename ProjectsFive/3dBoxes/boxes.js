const button = document.querySelector('#btn');
const boxes = document.getElementById('boxes');

function createBoxes() {
	for(let i = 0; i < 4; i++) {
		for(let j = 0; j < 4; j++) {
			const box = document.createElement('div');
			box.classList.add('box');
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
			boxes.appendChild(box);
		}
	}
}

window.addEventListener('load', createBoxes)

button.onclick = () => {
	if(boxes.classList.contains('big')) {
		boxes.classList.remove('big');
	} else {
		boxes.classList.add('big');
	}
}