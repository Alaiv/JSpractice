const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const container = document.querySelector('.container');

openBtn.onclick = () =>	container.classList.add('show-nav');

closeBtn.onclick = () => container.classList.remove('show-nav');

