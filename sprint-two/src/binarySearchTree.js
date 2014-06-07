var makeBinarySearchTree = function(value){
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  _.extend(node, nodeMethods);
  return node;

};

var nodeMethods = {};

//returns true if the tree needs balancing
nodeMethods.treeNeedsBalancing = function(){
  var maxDepth = 0;
  var minDepth = 0;
  //calculate the height of the tree (the max depth)
  maxDepth = this.getMaxDepth();
  //calculate the minimum depth of the tree
  minDepth = this.getMinDepth();
  // if max depth is more than twice the min
    //return true
  //otherwise return false
  if(maxDepth > 2 * minDepth){
    return true;
  } else {
    return false;
  }
};



//rebalances tree as a side effect
nodeMethods.rebalanceTree = function(){
  // see which side is longer

  // shift towards the longer side
    // get child node from the longer side (- newHead)
    // if newHead was left
      //temp = newHead's right child
      //newHead.right = currentNode
      //current node's left child = temp
    // else (newHead was right)
      //temp = newHead's left child
      //newHead's left = currentNode
      //currentNode's right child is temp

};

nodeMethods.insert = function(value){
  this.insertNode(value);
  if (this.treeNeedsBalancing()) {
    this.rebalanceTree();
  }
};

nodeMethods.insertNode = function (value) {
  //check if the tree is balanced
  if (value <= this.value) {
    if (this.left === null) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insertNode(value);
    }
  } else {
    if (this.right === null) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insertNode(value);
    }
  }
};

nodeMethods.contains = function (target) {
  var result = false;
  if (this.value === target) {
    result = true;
  } else if (target <= this.value && this.left !== null) {
    if (this.left.contains(target)){
      result = true;
    }
  } else if (this.right !== null) {
    if (this.right.contains(target)){
      result = true;
    }
  }

  return result;
};
nodeMethods.getMaxDepth = function(){
  //takes no argument and returns the longest path beneath it
  var left = 0;
  var right = 0;
  if(this.left === null && this.right === null){
    return 1;
  }
  if (this.left !== null){
    left = this.getMaxDepth(this.left);
  }
  if (this.right !== null){
    right = this.getMaxDepth(this.right);
  }
  return (1 + Math.max(left, right));
};

nodeMethods.getMinDepth = function() {
  var left = 0;
  var right = 0;
  if (this.left === null && this.right === null){
    return 1;
  }
  if (this.left !== null) {
    left = this.left.getMinDepth();
  }
  if (this.right !== null) {
    right = this.right.getMinDepth();
  }
  return (1 + Math.min(left, right));
};

nodeMethods.depthFirstLog = function (func) {
  func(this.value);
  if (this.left !== null){
    this.left.depthFirstLog(func);
  }
  if (this.right !== null){
    this.right.depthFirstLog(func);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
