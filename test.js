 const fun = arr =>{
	let len =arr.length;
    gap = Math.floor(len/2);
    while(gap!==0){
        for(let i = gap;i<len;i++){
            let temp = arr[i];
            let j;
            for(j=i-gap;j>=0&&temp<arr[j];j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
        gap=Math.floor(gap/2);
    }
  return arr;
 }
 console.log(fun([9,7,3,6,4,2,5,21]));