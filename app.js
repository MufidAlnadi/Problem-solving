//q1
function fibonacci(num) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    let series = fibonacci(num - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}

console.log(fibonacci(11));

//q2
const myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray));

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}

//q3

function reverseString(str) {
  if (str.length === 0) {
    return "";
  } else if (str.length === 1) {
    return str;
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
}

console.log(reverseString(" hello"));

//Stack and Queue
//q1
class MyStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    //this = refers to (instance of the class)
    this.stack.push(val);
    if (this.minStack.length === 0 ||val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }
  getMin() {
    if (this.minStack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MyStack();
minStack.push(5);
minStack.push(1);
minStack.push(3);
minStack.push(2);
console.log(minStack.getMin());

//q2
const myQueue = [1, 2, 3, 4, 5];
function reverseQ(val){
  //check if it's an array before starting 
  if (!Array.isArray(val)) {

    throw new Error("Input is not a valid queue.");
  }
  const arr =[];
  // arr
  while(val.length>0){
    arr.push(val.shift());
  }
  while(arr.length>0){
  val.push(arr.pop());
  }
  return val;

}

console.log(myQueue);
// O(n) + O(n) = O(2n) ≈ O(n)
console.log(`reversed ${reverseQ(myQueue)}`);

//O(n)
console.log(myQueue);
console.log( `reversed  ${myQueue.reverse()}`);
console.log(myQueue);

//O(n)
let q2=[];
while(myQueue.length>0){
  q2.push(myQueue.pop());
}
//myQueue is empty now.
console.log(`reversed ${q2}`);


//q3
//assuming I'm going to add to the first stack and dequeue from the second stack
class Queue{
  constructor(){
    this.s1=[];
    this.s2=[];
  }
 
  enqueue(element){
    this.s1.push(element);
  }

  dequeue(){
    while(this.s1.length != 0){
      this.s2.push(this.s1.pop());
    }
    return this.s2.pop();
  
  }
 

};

const q = new Queue;
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

// Linked List

