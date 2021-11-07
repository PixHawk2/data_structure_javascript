//节点的实现
class Node {
	constructor(element){
		this.element = element;
		this.next = null;
	}
}
//链表的实现
class LinkedList{
	constructor(){
		this.head = null;
		this.length = 0 ;
		
	}
	//实现在链表的尾部增加元素
	append(element){
		//create new node
		let node = new Node(element);
		//if list is empty如果原来链表为空，直接添加
		if(this.length === 0){
			this.head = node;
		}else{
			//通过head找到后面的节点
			let current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		this.length +=1;
	}
	//获取链表的头
	getHead(){
		return this.head;
	}
	toString(){
		let current = this.head;
		let linkString = '';
		while(current){
			linkString += ',' + current.element;
			current = current.next;
		}
		return linkString.slice(1);
	}
	//在任意位置插入节点
	insert(element,position){
		if(position<0||position>this.length){
			return false;
		}
		let index = 0;
		let current = this.head;
		
		
		let previous = null;
		
		let node = new Noed(element);
		if(position ===0){
			node.next = this.head;
			this.head = node;
		}else{
			while(index<position){
				previous = current;
				current = current.next;
				index++;
			}
			node.next = current;
			previous.next = node;
		}
		this.length += 1;
		return true;
	}
	
	//获取对应位置的元素
	get(position){
		//越界判断
		if(position<0||position>this.length){
			return null;
		}
		let current = this.head;
		index = 0;
		while(insdex<position){
			current = current.next;
			index ++;
		}
		return current.element;
	}
	//移除指定位置的链表
	removeAt(position){
		if(position<0||position>this.length){
			return null;
		}
		let index = 0;
		let current = this.head;
		let previous = null;
		if(position ===0){
			this.head = this.head.next;
		}else{
			while(index<position){
				previous = current;
				current = current.next;
				index ++ ;
			}
			previous.next = current.next;
		}
		this.length--;
		return current.element;
	}
}
const linkedlist =new LinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(4);
console.log(linkedlist);
console.log(linkedlist.toString());


