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

  displayTree() {
    console.log(this.root);
  }

  searchNode(value, root = this.root) {
    if (root === null) {
      return false;
    } else if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this.searchNode(value, root.left);
    } else {
      return this.searchNode(value, root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  InOrder(root) {
    if (root) {
      this.InOrder(root.left);
      console.log(root.value);
      this.InOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  bfsTravesal(root) {
    let treeQueue = [];
    treeQueue.push(root);
    while (treeQueue.length) {
      let current = treeQueue.shift();
      if (current.left) {
        treeQueue.push(current.left);
      }
      if (current.right) {
        treeQueue.push(current.right);
      }

      console.log(current.value);
    }
  }


  minNode(root=this.root){
    if(root ===null && root.left === null){
      return false;
    }else if(root.value && root.left ===null){
      console.log(root.value);
      return root.value;
    }else{
      this.minNode(root.left)
    }
  }

  maxNode(root=this.root){
    if(root==null && root.right===null){
      return false;
    }else if(root.value && root.right===null){
      console.log(root.value);
      return root.value;
    }else{
      this.maxNode(root.right)
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

// bst.preOrder(bst.root)
// bst.InOrder(bst.root)
// bst.postOrder(bst.root)

// bst.bfsTravesal(bst.root);
bst.minNode();
bst.maxNode();
bst.displayTree();
// console.log(bst.searchNode(5));
// console.log(bst.searchNode(15));
// console.log(bst.searchNode(7));
