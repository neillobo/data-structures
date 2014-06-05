var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._size = 0;
  this._head = 0;
};

Queue.prototype.size = function () {
  return this._size;
};

Queue.prototype.enqueue = function (val) {
  this._storage[this._size + this._head] = val;
  this._size++;
};

Queue.prototype.dequeue = function () {
  if (this._size === 0) {
    return;
  }
  var temp = this._storage[this._head];
  this._size--;
  this._head++;
  return temp;
};
