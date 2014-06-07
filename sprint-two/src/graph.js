var Graph = function(){
  this._nodes = [];
  this._edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  this._nodes[this._nodes.length] = newNode;

  if (toNode) {
    this.addEdge(newNode, toNode);

  } else if(this._nodes.length === 2) {
    this.addEdge(this._nodes[0], newNode);
  }
};

Graph.prototype.contains = function(node){
  var result = false;
  if (this._nodes.indexOf(node) !== -1) {
    result = true;
  }
  return result;

};

Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {

    this._nodes.splice(this._nodes.indexOf(node), 1);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var result = false;
  //traverse the edges array
  _.each(this._edges, function(element) {
  //check whether [from, to], or [to, from]
    if (element[0] === fromNode && element[1] === toNode ){
      result = true;
    }
  });
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._edges.push([fromNode, toNode]);
  this._edges.push([toNode, fromNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromTo = [fromNode, toNode];
  var toFrom = [toNode, fromNode];
  if (this.getEdge(fromNode, toNode)){
    this._edges.splice(this._edges.indexOf(fromTo, 1));
    this._edges.splice(this._edges.indexOf(toFrom, 1));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
