var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.queueSize = 0;
  queue.head = 0;
  _.extend(queue, queueMethods);
  return queue;

};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.head + this.queueSize] = value;
    this.queueSize++;
  },
  dequeue: function() {
    if (this.queueSize === 0) {
      return;
    }
    var temp = this.storage[this.head];
    this.queueSize--;
    this.head++;
    return temp;
  },
  size: function () {
    return this.queueSize;
  }

};



