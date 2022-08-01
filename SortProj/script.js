//get input element
let filterInp = document.querySelector('#filterInput')
//add event listener
filterInp.addEventListener('keyup', filterNames);
//func
function filterNames() {
	//value of inp
	let value = filterInp.value.toUpperCase()
	//get li's
	let li = document.querySelectorAll('.collection-item')
	//loop
	li.forEach(val => {
		let a = val.querySelector('a');
		console.log(a);
		//if matched
		if(a.innerHTML.toUpperCase().indexOf(value) > -1) {
			val.style.display = '';
		} else {
			val.style.display = 'none';
		}
	})
}