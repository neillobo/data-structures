var makeTree = function(value){
  //value = value || true;
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree,treeMethods);

  return newTree;

};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  this.children.push(node);
};

treeMethods.contains = function(target){
  var result = false;
  if(this.value === target){
    return true;
  } else {
    _.each(this.children,function(element){
      if(element.contains(target)) {
        result = true;
      }
    });
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
