const defaultResult = 0;
let currentResult = defaultResult;

currentResult = currentResult + 10;

let calculationDescription = 'This is text';
outputResult(currentResult, calculationDescription);

function add(num1, num2) {
	const result = num1 + num2;
	alert(` ${result}`);
}
add(1, 2);
