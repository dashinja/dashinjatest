const button = document.querySelector('#my-button');
const textToToggle = document.querySelector('#toggle');
const addButton = document.querySelector('#adding-machine-button');
const firstNumber = document.querySelector('#first-number');
const secondNumber = document.querySelector('#second-number');
const result = document.querySelector('#result');   
const processInput = function () {
    runTheMachine();
}
const runTheMachine = function () {
	const numberOne = firstNumber.value;
	const numberTwo = secondNumber.value;
	const sum = this.add(numberOne, numberTwo);
	result.innerHTML = sum;
}

const mathMachine = {
	  add: function (firstNumber, secondNumber) {
		  return firstNumber + secondNumber;
    	   },
      subtract: function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    	   },
      multiply: function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    	   },
      divide: function (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    	   },      
    }


let textIsHidden = true;
button.addEventListener('click', toggleText);
addButton.addEventListener('click', processInput);


function toggleText () {
	if (textIsHidden){
		textToToggle.style.display = 'block';
	} else {
		textToToggle.style.display = 'none';

	}
	textIsHidden = !textIsHidden;
}


