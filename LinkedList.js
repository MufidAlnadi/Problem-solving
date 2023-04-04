class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
    //q1
  deleteMiddleNode() {
    let length = 0;
    let current = this.head;

    while (current !== null) {
      length++;
      current = current.next;
    }

    if (length <= 1) {
      return null;
    }

    let middleIndex = Math.floor(length / 2);
    current = this.head;
    let prev = null;

    for (let i = 0; i < middleIndex; i++) {
      prev = current;
      current = current.next;
    }

    if (prev !== null) {
      prev.next = current.next;
    } else {
      this.head = current.next;
    }

    this.length--;
    return current;
  }
    //q2
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

const middleNode = list.deleteMiddleNode();
console.log(middleNode.val); 

list.reverse();

console.log(list); 
