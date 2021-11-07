class Queue{
	constructor(){
		this.item = [];
	}
	enqueue(value){
		this.item.push(value);
	}
	dequeue(){
		return this.item.shift();
	}
	//队首元素
	front(){
		return this.item[0];
	}
	//队尾元素
	rear(){
		return this.item[this.item.length -1];
	}
	isEmpty(){
		return this.item.length === 0;
	}
	size(){
		return this.item.length;
	}
	clear(){
		this.item = [];
	}
}
const queue1 = new Queue();
console.log(queue1.isEmpty());

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
console.log(queue1);
console.log(queue1.front());
console.log(queue1.rear());
console.log(queue1.size());
queue1.dequeue();
console.log(queue1);
console.log('++++++++++++++');
queue1.clear();
console.log(queue1.isEmpty());


