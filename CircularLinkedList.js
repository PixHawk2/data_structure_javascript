class Node{
	constructor(element1){
		this.element = element1;
		this.next = null;
	}
}
class LinkedList{
	constructor(){
		this.count = 0;
		this.head = null;
	}
	//链表尾部新增元素
	push(element1){
		const node =  new Node(element1);
		let current;
		if(this.head === null){
			this.head = node;
		}else{
			current = this.head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}
	//从链表中移除元素
	removeAt(index){
		if(index>=0 && index < this.count){
			let current = this.head;
			if(index === 0){
				this.head = current.next;
			}else{
				let previous;
				/*for(let i =0;i<index;i++){
					previous = current;
					current = current.next;
				}*/
				previous = this.getElementAt(index-1);
				current = previous.next;
				previous.next = current.next
			}
			this.count--;
			return current.element
		}
		return undefined
	}
	//循环迭代到目标索引位置可以独立出来
	getElementAt(index){
		if(index>=0 && index <=this.count){
			let node = this.head;
			for(let i = 0;i < index && node !== null;i++){
				node = node.next;
			}
			return node;
		}
		return undefined;
	}
	//指定位置插入元素
	insert(element,index){
		if(index >= 0 && index <= this.count){
			const node = new Node(element);
			if(index === 0){
				const current = this.head;
				this.head = node;
				node.next = current;
			}else{
				let previous = this.getElementAt(index-1);
				let current = previous.next;
				previous.next = node;
				node.next = current;
			}
			this.count++;
			return true
		}
		return false
	}
	//查找链表中有无元素
	indexOf(value){
		let current = this.head;
		for(let i=0;i<this.count && current !== null;i++){
			if(value === current.element){
				return i;
			}
			current = current.next;
		}
		return -1;
	}
	//移除链表中的某元素
	remove(element){
		let index = this.indexOf(element);
		return this.removeAt(index);
	}
	//
	size(){
		return this.count;
	}
	//
	isEmpty(){
		return this.count === 0;
	}
	//
	getHead(){
		return this.head;
	}
	toString(){
		let objString;
		if(this.head === null){
			return '';
		}else{
			objString = `${this.head.element}`;
			let current = this.head.next;
			for(let i =1;i<this.count&&current !== null;i++){
				objString = `${objString},${current.element}`;
				current = current.next;
			}
		}
		return objString;
	}
}

class CircluarListedList extends LinkedList{
	constructor(){
		super();
	}
	//在任意位置插入元素
	insert(element,index){
		if(index>=0 && index<= this.count){
			const node = new Node(element);
			let current =  this.head;
			if(index === 0){
				if(this.head === null){
					this.head = node;
					node.next = this.head;
				}else{
					node.next = current;
					current = super.getElementAt(this.count);
					this.head = node;
					current.next = node;
				}
			}else{
				const previous = super.getElementAt(index - 1 );
				node.next = previous.next;
				previous.next = node;
			}
			this.count++;
			return true;
		}
		return false;
	}
	//从任意位置移除元素
	removeAt(index){
		if(index >=0 && index <= this.count){
			let current = this.head;
			if(index === 0){
				if(this.count === 1){
					this.head = undefined;
				}else{
					current = super.getElementAt(this.count);
					this.head = this.head.next;
					current.next = this.head; 
					
				}
			}else{
				const previous = super.getElementAt(index-1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count--;
			return current.element;
		}
		return undefined;
	}
}
let hudilist = new CircluarListedList();
hudilist.insert(23,0);
hudilist.insert(44,1);
hudilist.insert(55,1);
console.log(hudilist);
console.log('******************************')
hudilist.removeAt(1);
console.log(hudilist);
