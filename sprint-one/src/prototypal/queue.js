var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.queueSize = 0;
  queue.head = 0;
  return queue;
};

var queueMethods = {
  enqueue : function(val){
    this.storage[this.head + this.queueSize] = val;
    this.queueSize++;
  },

  dequeue : function(){
    if(this.queueSize === 0){
      return;
    }
    var temp = this.storage[this.head];
    this.head++;
    this.queueSize--;
    return temp;
  },

  size : function(){
    return this.queueSize;
  }
};


