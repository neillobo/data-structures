var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);


  var newObj = {};
  newObj[k] = v;
  if(!this._storage[i]){

    var bucket = makeLinkedList();

    bucket.addToTail(newObj);
    this._storage[i] = bucket;
  } else {
    this._storage[i].addToTail(newObj);
  }

};

HashTable.prototype.retrieve = function(findKey){
  var i = getIndexBelowMaxForKey(findKey, this._limit);
  if (this._storage[i]){
    var found = this._storage[i].find(findKey, function(value) {
      if(value.hasOwnProperty(findKey)){
        return true;
      } else {
        return false;
      }
    });
    // debugger;
    if(found){
      return found[findKey];
    } else {
      return null;
    }
  }
};

HashTable.prototype.remove = function(k){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
