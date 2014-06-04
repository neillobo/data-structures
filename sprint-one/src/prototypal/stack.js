var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.stackSize = 0;
  return stack;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.stackSize] = value
    this.stackSize++;
  },
  pop: function () {
    if (this.stackSize === 0) {
      return;
    }
    this.stackSize--;
    var temp = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return temp;
  },
  size: function () {
    return this.stackSize;
  }
};


