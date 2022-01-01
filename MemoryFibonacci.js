function fibonacciMemoization(n){
	const memo = [0,1];
	const fibonacci = (n) =>{
		if(memo[n] !=  null ) return memo[n];
		return memo[n] = fibonacci(n-1) + fibonacci(n-2);
	}
	return fibonacci;
}
const fb = fibonacciMemoization()
console.log(fb(6))

/*普通递归*/
function fibonacci(n){
	if(n < 1) return 0;
	if(n <=2) return 1;
	return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(5))