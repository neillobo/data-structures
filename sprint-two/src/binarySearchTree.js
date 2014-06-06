var makeBinarySearchTree = function(value){
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  _.extend(node, nodeMethods);
  return node;

};

var nodeMethods = {};

nodeMethods.insert = function (value) {
  if (value <= this.value) {
    if (this.left === null) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
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
