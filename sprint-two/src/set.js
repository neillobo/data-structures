var makeSet = function(){
  var set = Object.create(setPrototype);
  //we are using a hash table where the key is the value being stored (string) itself
  //and the value is "true"
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //check if item already exists
  if (this._storage[item] === true) {
    //then return
    return;
  } else {
    //otherwise add it to the hash
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item){
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item){
  if (this._storage[item] === true) {
    delete this._storage[item];
  };

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
