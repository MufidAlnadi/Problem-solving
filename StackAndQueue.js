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
  console.log(myQueue);
  
  //O(n)
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
  