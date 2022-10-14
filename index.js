console.log("Good Luck Saurabh, Jai Shree Ram.");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  createNode(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  displayTree(){
    console.log(this.root);
  }


  searchNode(value, root=this.root){
    if(root===null){
      return false
    }
    else if(value === root.value){
      return true;
    }else if(value< root.value){
     return this.searchNode(value, root.left)
    }else{
       return this.searchNode(value, root.right)
    }
  }
}

const bst = new BSTree();
// console.log(bst.isEmpty());
bst.createNode(20);
bst.createNode(10);
bst.createNode(60);
bst.createNode(80);
bst.createNode(5);
bst.createNode(15);
bst.displayTree()
console.log(bst.searchNode(5));
console.log(bst.searchNode(15));
console.log(bst.searchNode(7));


