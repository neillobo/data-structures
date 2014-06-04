var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    //store the element
    storage[size] = value;

    //increment
    size++;
  };

  someInstance.pop = function(){
    if (size > 0) {
      size--;
    }

    return storage[size];
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
