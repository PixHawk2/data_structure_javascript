console.log('algorithm------I');
console.time('hudi');
for(let a=0;a<1000;a++){
	for(let b=0;b<1000;b++){
		for(let c=0;c<1000;c++){
			if(a+b+c===1000&&(Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2))){
				console.log(`[a、b、c]=>${a}**${b}**${c}`);
			}
		}
	}
}
console.timeEnd('hudi');

console.log('algorithm------II');
console.time('hudi2');
for(let a=0;a<1000;a++){
	for(let b=0;b<1000;b++){
		let c = 1000 - a - b;
		if((Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2))){
			console.log(`[a、b、c]=>${a}**${b}**${c}`);
			
		}
	}
}
console.timeEnd('hudi2');

//冒泡实现
console.log('algorithm------III');
console.time('hudi3');
function bubble(array){
	console.log('+*+*+*+*');
	for(let a=0;a<array.length-1;a++){
		for(let b=0;b<array.length-a-1;b++){
			if(array[b]>array[b+1]){
				[array[b],array[b+1]] = [array[b+1],array[b]];
				/*let temp = array[b];
				array[b] = array[b+1] ;
				array[b+1] = temp;*/
			}
		}
	}
	return array;
}
const arr =[200,1,65,35,100,34,52,45,63,58,87];

console.log(bubble(arr));
console.timeEnd('hudi3');
//选择排序实现

console.time('hudi4');
function selectRank(array){
	let min,temp;
	let count = 0;
	for(let i =0;i<array.length-1;i++){
		min = i;
		for(let j = i+1;j<array.length;j++){
			if(array[j]<array[min]){
				min = j;
			}
		}
		temp = array[i];
		array[i] = array[min];
		array[min] = temp;
		count++;
	}
	console.log(count);
	return array;
}
const arr1 =[200,1,65,35,20,44,100,34,52,45,63,58,87];

console.log(selectRank(arr1));
console.timeEnd('hudi4');

//插入排序实现
console.time('hudi5');
function insertRank(array){
	let rankResult = [];
	rankResult.push(array[0]);
	for(let i = 1;i<=array.length-1;i++){
		let newNumber = array[i];
		for(let j = rankResult.length-1;j>=0;j--){
			if(newNumber > rankResult[j]){
				rankResult.splice(j+1,0,newNumber);
				break;
			}
			if(j == 0){
				rankResult.unshift(newNumber);
			}
		}
	}
	
	return rankResult;
}
const arr2 =[200,1,65,35,20,44,100,34,52,45,63,58,87];

console.log(insertRank(arr2));
console.timeEnd('hudi5');

