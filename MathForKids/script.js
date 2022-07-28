let firstRandomNumber = Math.floor(Math.random() * (9 - 1 + 1) + 1);
let secondRandomNumber = Math.floor(Math.random() * (9 - 1 + 1) + 1);

class KidsMath {

	constructor(divider){
		this.firstNumber = document.querySelector("#first");
		this.secondNumber = document.querySelector('#second');
		this.firstAnswer = document.querySelector('.right-main__one')
		this.secondAnswer = document.querySelector('.right-main__two')
		this.thirdAnswer = document.querySelector('.right-main__three')

		this.firstNumber.innerHTML = firstRandomNumber;
		this.secondNumber.innerHTML = secondRandomNumber;

		if(divider === '+') {
			this.firstAnswer.innerHTML = firstRandomNumber + secondRandomNumber
			this.secondAnswer.innerHTML = firstRandomNumber + secondRandomNumber + 4
			this.thirdAnswer.innerHTML = firstRandomNumber + secondRandomNumber - 2
		}

		if(divider === '*') {
			this.firstAnswer.innerHTML = firstRandomNumber * secondRandomNumber
			this.secondAnswer.innerHTML = firstRandomNumber * (secondRandomNumber + 2)
			this.thirdAnswer.innerHTML = firstRandomNumber * (secondRandomNumber + 4)
		}

		if(divider === '/'){
			this.firstAnswer.innerHTML = Math.round((firstRandomNumber / secondRandomNumber) * 100) / 100;
			this.secondAnswer.innerHTML = (Math.round((firstRandomNumber / secondRandomNumber) * 100) / 100) + 2;
			this.thirdAnswer.innerHTML = (Math.round((firstRandomNumber / secondRandomNumber) * 100) / 100) + 3;
					}

		if(divider === '-'){
			this.firstAnswer.innerHTML = firstRandomNumber - secondRandomNumber
			this.secondAnswer.innerHTML = firstRandomNumber - secondRandomNumber - 1
			this.thirdAnswer.innerHTML = firstRandomNumber - secondRandomNumber + 1
		}
		this.firstAnswer.addEventListener('click', () => {
			alert('right answer!')
			document.innerHTML = ''
			location.reload();
		})

		this.secondAnswer.addEventListener('click', () => alert('Try again!'))
		this.thirdAnswer.addEventListener('click', () => alert('Try again!'))
	}
}





