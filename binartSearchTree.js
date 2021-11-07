//二叉搜索树的实现
class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null; 
	}
}
//left:small right:big
class BinarySearchTree{
	constructor(){
		//根节点为null
		this.root = null;
	}
	//
	insertNode(node,newNode){
		if(newNode.value > node.value){
			//原先右子节点为空
			if(node.right === null){
				node.right = newNode;
			}else{
				this.insertNode(node.right,newNode);
			}
		}else if(newNode.value < node.value){
			if(node.left === null){
				//原先左子节点为空
				node.left = newNode;
			}else{
				this.insertNode(node.left,newNode);
			}
		}
	}
	//
	insert(value){
		let newNode = new Node(value);
		if(this.root === null){
			this.root = newNode;
		}else{
			this.insertNode(this.root,newNode);
		}
	}
	//先序遍历
	preOrderTravel(cb){
		this.preOrderTraverNode(this.root,cb)
	}
	preOrderTraverNode(node,cb){
		if(node === null) return;
		cb(node.value);
		//遍历所有的左子树
		this.preOrderTraverNode(node.left,cb);
		//遍历所有的右子树
		this.preOrderTraverNode(node.right,cb);
	}
	//中序遍历
	inOrderTravel(cb){
		this.inOrderTravelNode(this.root,cb);
	}
	inOrderTravelNode(node,cb){
		if (node === null) return;
		this.inOrderTravelNode(node.left,cb);
		cb(node.value);
		this.inOrderTravelNode(node.right,cb);
	}
	//后续遍历
	postOrderTravel(cb){
		this.postOrderTravelNode(this.root,cb);
	}
	postOrderTravelNode(node,cb){
		if(node === null) return;
		this.postOrderTravelNode(node.left,cb);
		this.postOrderTravelNode(node.right,cb);
		cb(node.value);
	}
	//最大值返回
	max(){
		let node = this.root;
		while(node.right !== null){
			node = node.right;
		}
		return node.value;
	}
	//最小值返回
	min(){
		let node = this.root;
		while(node.left !== null){
			node = node.left;
		}
		return node.value;
	}
	//寻找特定的值
	search(value){
		let node = this.root;
		while(node !== null){
			if(node.value > value){
				node = node.left;
			}else if(node.value < value){
				node = node.right;
			}else{
				return true;
			}
		}
	}
}

//const node1 = new Node(1);
//console.log(node1);
const bst =  new BinarySearchTree();
bst.insert(11);
bst.insert(10);
bst.insert(5);
bst.insert(8);
bst.insert(41);
bst.insert(17);
bst.insert(4);
//console.log(bst);
const result = [];
const cb = value =>{
	result.push(value);
}

bst.preOrderTravel(cb);
console.log(result);


