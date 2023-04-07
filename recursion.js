/* Theory
https://learn.javascript.ru/recursion

Recursion visualisation
https://recursion.vercel.app/


*/



// Возведение числа в степень
function pow(x, n) {
	if (n == 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
}

console.log(pow(2, 3)); // 8
// ////////////////////////////////////////////////////////////
// Summarise numbers until given (Вычислить сумму чисел до данного)

function sumTo(n) {
	if (n == 1){
		return 1;
	} else {
		return n + sumTo(n-1);
	}
}

// ////////////////////////////////////////////////////////////
// Factorial (Факториал числа)

function factorial(n) {
	if (n == 1) { return 1};
	return n * factorial(n-1);
}

// ////////////////////////////////////////////////////////////
// Fibonachi (Числа фибоначи)

//Долгий вариант
function fib(n) { 
	if (n == 1 || n == 2) { return 1;}
	return fib(n-1) + fib(n-2)
}