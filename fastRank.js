//快速排序实现
console.time('Qucik Rank');
const quickRank = arr =>{
	if(arr.length <= 1) return arr;
	let index = Math.floor(arr.length/2);
	let basevalue = arr.splice(index,1)[0];
	//let basevalue = arr[index];
	let left = [];
	let right = [];
	arr.map(item=>{
		if(item>basevalue){
			right.push(item);
		}else {
			left.push(item);
		}
	});
	return quickRank(left).concat(basevalue,quickRank(right));
}

const array = [200,1,65,35,20,44,100,34,52,45,63,58,87];
console.log(quickRank(array));

console.timeEnd('Qucik Rank');
