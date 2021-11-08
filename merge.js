//归并排序实现
console.time('Merge');
const merge = (left,right)=>{
	let temp = [];
	while(left.length>0 && right.length>0){
		if(left[0]>=right[0]){
			temp.push(right.shift());
		}else{
			temp.push(left.shift());
		}
	}
	return temp.concat(left,right);
}

const mergeRank = arr =>{
	if(arr.length ===1) return arr;
	let mid = Math.floor(arr.length/2);
	let left = arr.slice(0,mid);
	let right = arr.slice(mid);
	return merge(mergeRank(left),mergeRank(right));
}
const array = [200,1,65,35,20,44,100,34,52,45,63,58,87];
console.log(mergeRank(array));
console.timeEnd('Merge');


const test = [200,1,65,35,20,44,100,34,52,45];
const index = Math.floor(test.length/2)+1;
console.log(test[index]);
console.log(test.splice(index,1)[0]);