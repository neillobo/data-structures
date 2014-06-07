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
      return value.hasOwnProperty(findKey);
    });
    if(found){
      return found[findKey];
    } else {
      return null;
    }
  }
};

HashTable.prototype.remove = function(deleteKey){
  //use find function to find the full value (object) (ItemToBeRemoved)
  var i = getIndexBelowMaxForKey(deleteKey, this._limit);
  if (this._storage[i]){
    var removeItem = this._storage[i].find(deleteKey, function(value) {
      return value.hasOwnProperty(deleteKey);
    });
  }
  if (removeItem) {
    //pass removeItem into linked list's remove function
    this._storage[i].deleteListItem(removeItem);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
