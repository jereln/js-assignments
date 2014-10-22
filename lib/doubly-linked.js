function DoublyLinked() {
  this.counter = 0;
  this.head = null;
}

DoublyLinked.prototype.insert = function(node) {
  if (this.counter == 0) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  this.counter += 1;
}

DoublyLinked.prototype.remove = function(val) {
  var current = this.head;
  if(current.val = val) {
    this.head = current.next;
    this.counter -= 1;
    return val;
  }
  while(current){
    if(current.val == node.val) {
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.counter -= 1;
      return val;
    }
    current = current.next;
  }
  return null;
}

DoublyLinked.prototype.size = function() {
  return this.counter;
}

DoublyLinked.prototype.search = function(val) {
  var current = this.head;
  while(current) {
    if(current.val == val){
      return current.val;
    }
    current = current.next;
  }
  return null;
}

DoublyLinked.prototype.toString = function() {
  var current = this.head;
  var list = '';
  while(current) {
    list += (current.val + ", ");
    current = current.next;
  }
  return list;
}

module.exports = DoublyLinked;