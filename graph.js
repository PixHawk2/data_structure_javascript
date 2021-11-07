//队列实现
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

//栈实现
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
class Graph{
	constructor(){
		//存储所有的顶点
		this.vertiecs = [];
		//存储所有的边
		this.edgeList = {};
	}
	//添加顶点
	addVertiec(value){
		this.vertiecs.push(value);
		this.edgeList[value] = [];
	}
	//添加边
	addEdge(a,b){
		//无向图添加
		this.edgeList[a].push(b);
		this.edgeList[b].push(a);
	}
	//
	toString(){
		let rst = '';
		for(let i=0;i<this.vertiecs.length;i++){
			//顶点遍历
			let vertiec = this.vertiecs[i];
			rst += `${vertiec}=>`;
			//顶点下的边遍历
			let edge = this.edgeList[vertiec];
			for(let j=0;j<edge.length;j++){
				rst += edge[j];
			}
			rst += '\n';
		}
		return rst;
	}
	//初始化颜色
	initColor(){
		let colors = {};
		for(let i=0;i<this.vertiecs.length;i++){
			colors[this.vertiecs[i]] = 'white';
		}
		return colors;
	}
	//广度优先遍历
	bfs(val,callback){
		//先初始化颜色
		let color = this.initColor();
		//创建队列来存放顶点
		let queue = new Queue();
		queue.enqueue(val);
		while(!queue.isEmpty()){
			const qVertex = queue.dequeue();
			let edge = this.edgeList[qVertex];
			
			for(let i=0;i<edge.length;i++){
				const e = edge[i];
				if(color[e] === 'white'){
					color[e] = 'gray';
					queue.enqueue(e);
				}
			}
			color[qVertex] = 'black';
			//如果传入回调函数，则执行
			if(callback){
				callback(qVertex);
			}
		}	
	}
	//深度优先递归函数实现
	dfsVisit(val,color,callback){
		color[val] = 'gray';
		if(callback){
			callback(val);
		}
		let edge = this.edgeList[val];
		for(let i=0;i<edge.length;i++){
			const e = edge[i];
			if(color[e] === 'white'){
				this.dfsVisit(e,color,callback);
			}
		}
		color[val] = 'black';
	}
	//深度优先
	dfs(val,callback){
		let color = this.initColor();
		this.dfsVisit(val,color,callback);
	}
}

const graph = new Graph();
graph.addVertiec('A');
graph.addVertiec('B');
graph.addVertiec('V');
graph.addVertiec('C');
graph.addVertiec('G');

graph.addEdge('A','B');
graph.addEdge('A','V');
graph.addEdge('A','C');
graph.addEdge('B','G');

console.log(graph);
console.log(graph.toString());
console.log('深度优先遍历');
graph.dfs('A',e=>console.log(e));

console.log('广度优先遍历');
graph.bfs('A',e=>console.log(e));