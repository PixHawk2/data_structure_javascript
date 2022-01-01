class Set{
	constructor(){
		this.items = {};
	}
	has(element){
		return Object.prototype.hasOwnProperty.call(this.items,element);
	}
	add(element){
		if(!this.has(element)){
			this.items[element] =  element;
			return true;
		}
		return false;
	}
	delete(element){
		if(this.has(element)){
			delete this.items[element];
			return true;
		}
		return false;
	}
	size(){
		return Object.keys(this.items).length;
	}
	values(){
		return Object.values(this.items);
	}
	/*并集、交集、差集实现*/
	//并集
	union(otherSet){
		const unionSet = new Set();
		this.values().forEach(item => unionSet.add(item));
		otherSet.values().forEach(item => unionSet.add(item))
		return unionSet;
	}
	/*交集*/
	intersection(otherSet){
		const intersectionSet = new Set();
		const values = this.values();
		for(let i = 0;i<values.length;i++){
			if(otherSet.has(values[i])){
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	}
	//差集
	difference(otherSet){
		const differenceSet = new Set();
		this.values().forEach(item =>{
			if(!otherSet.has(item)){
				differenceSet.add(item);
			}
		})
		return differenceSet;
	}
	//子集
	isSubsetOf(otherSet){
		if(this.size()> otherSet.size()){
			return false;
		}
		let isSubSet = true;
		this.values().every(value =>{
			if(!otherSet.has(value)){
				isSubSet = false
				return false;
			}
			return true;
		})
		return isSubSet;
	}
}

const hudiset = new Set();
hudiset.add(1);
hudiset.add(2);
hudiset.add(3);
hudiset.add(41);

const hudiset2 = new Set();
hudiset2.add(1);
hudiset2.add(2);
hudiset2.add(3);
hudiset2.add(41);

console.log(hudiset);
console.log(hudiset.has(100));
console.log(hudiset.has(1));
console.log(hudiset.size());
console.log(hudiset.values())
console.log('+++++++++++++++++++++++++++');
hudiset.delete(3);
console.log(hudiset);
console.log('------------------------------');
const setb = new Set();
setb.add(1);setb.add(56); setb.add(7); 
console.log(hudiset.union(setb).values());
console.log(hudiset.intersection(setb).values());
console.log(hudiset.difference(setb).values());
console.log(hudiset.isSubsetOf(setb));
console.log(hudiset.isSubsetOf(hudiset2));