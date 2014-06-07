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

//takes a pair of nodes and returns the locations in the
//_edges array of their relationship
Graph.prototype.getIndiciesOfEdge = function (nodeA,nodeB){
  var results = [];
  for(var i = 0; i < this._edges.length; i++){
    if(this._edges[i][0] === nodeA && this._edges[i][1] === nodeB){
      results.push(i);
    }
    if(this._edges[i][0] === nodeB && this._edges[i][1] === nodeA){
      results.push(i);
    }
  }
  return results;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._edges.push([fromNode, toNode]);
  this._edges.push([toNode, fromNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var indicies = this.getIndiciesOfEdge(fromNode, toNode);
  debugger;
  for (var i = indicies.length - 1; i >= 0; i--){
    this._edges.splice(indicies[i], 1);
  }
  var doesEdgeExist = function(node) {
    var result = false;
    //traverse adges array

    for (var i = 0; i < this._edges.length; i++){
      //check if i -0 or i - 1 === node
      if (this._edges[i][0] === node ){
        result = true;
      }
    }
    return result;
  }.bind(this);

  if (!doesEdgeExist(fromNode)){
    this.removeNode(fromNode);
  }
  if (!doesEdgeExist(toNode)){
    this.removeNode(toNode);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
