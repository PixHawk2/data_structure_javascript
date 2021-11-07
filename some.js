function haha(m,n){
	return m?haha(m-1,n).concat(n):[];
}
console.log(haha(5,12))