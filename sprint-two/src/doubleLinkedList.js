// An .addToHead() method which takes a value and adds it to the end of the list.
// A .removeTail() method which removes the last node from the list and returns its value.

var makeDoubleLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    //previous last element.next points to new element,
    // but only if there is one(i.e. the list is not empty)
    if(list.tail !== null){
      newNode.previous = list.tail;
      list.tail.next = newNode;
    }

    //head should point to first element
    if (list.head === null) {
      list.head = newNode;
    }
    //tail should point new element
    list.tail = newNode;
  };

  list.removeHead = function(){

    //if list is empty return nothing
    if (list.head === null) {
      return;
    }
    //otherwise store head temporarily
    var temp = list.head;

    //make head point to next element
    list.head = list.head.next;


    //return temp
    return temp.value;

  };

  list.contains = function(target){
    var found = false;
    var current = list.head;

    while (current!== null && !found){

      if (current.value === target){
        found = true;
      }
      current = current.next;

    }

    return found;
  };

  list.find = function(target, callback){
   var result;
    var current = list.head;

    while (current!== null && !result){

      if (callback(current.value)){
         result = current.value;
      }
      current = current.next;

    }

    return result;

  };

  list.deleteListItem = function (deleteItem) {

    if (list.head.next === null) {
      list.head = null;
      return;
    }

    var current = list.head;

    while (current.next !== null) {
      if (current.next.value === deleteItem) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  };

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    if (list.head !== null) {
      newNode.next = list.head;
      list.head.previous = newNode;
    }
    list.head = newNode;

  };

  list.removeTail = function() {
    var result;
    if (list.tail) {
      var result = list.tail.value;
      list.tail = list.tail.previous;
    }
    return result;
  }

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
