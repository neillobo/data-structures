var Graph = function(){
	this._storage = {};

};

Graph.prototype.addNode = function(newNode, toNode){
	var newArr = [];
	if (toNode) { 
		newArr.push(toNode);
	} 
	this._storage[newNode] = newArr;
};

Graph.prototype.contains = function(node){
		
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
