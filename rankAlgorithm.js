console.time('insertRank');
const array = [3000,1,54,85,32,14,66,98,100,52,3,4,25,300];
const inserRank = arr =>{
	let temp = [];
	for(let i=0;i<arr.length;i++){
		let j =i;
		temp = arr[i];
		while(j>0 && (temp<arr[j-1])){
			arr[j] = arr[j-1];
			j--;
		}
		//此处要重新赋值的
		arr[j] = temp;
	}
	return arr;
}
console.log(inserRank(array));
console.timeEnd('insertRank');

console.time('shellRank');
const array3 = [9,7,3,6,4,2,5,21];
const shellRank = arr =>{
	let gap = Math.floor(arr.length/2);
	while(gap!==0){
		for(let i = gap;i<arr.length;i++){
			let temp = arr[i];
			let j;
			for(j=i-gap;j>=0&&temp<arr[j];j-=gap){
				arr[j+gap] = arr[j];
			}
			arr[j+gap] = temp;
		}
		gap = Math.floor(gap/2);
	}
	return arr;
}
console.log(shellRank(array3));
console.timeEnd('shellRank');





