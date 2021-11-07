class Stack{
	constructor(){
		this.item = [];
	}
	push(value){
		this.item.push(value);
	}
	pop(){
		return this.item.pop();
	}
	peek(){
		return this.item[this.item.length-1];
	}
	isEmpty(){
		return this.item.length ===0;
	}
	size(){
		return this.item.length;
	}
	clear(){
		this.item.length = 0;
	}
}

const stack1 = new Stack();
console.log(stack1.isEmpty());
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
console.log(stack1)
console.log(stack1.peek());
console.log(stack1.size());
stack1.pop();
console.log(stack1.peek());
console.log(stack1.size());
stack1.clear()
console.log(stack1.size());