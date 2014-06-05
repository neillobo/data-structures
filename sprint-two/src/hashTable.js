var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[i]){

    var bucket = makeLinkedList();

    bucket.addToTail({k : v});
    this._storage[i] = bucket;
  } else {
    this._storage[i].addToTail({k:v});
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
