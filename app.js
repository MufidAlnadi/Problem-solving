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
    //The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    const arr = str.split('');

    arr.reverse();
    //The join method combines the elements of an array and returns a string
    return arr.join('');
  }
  
 
const String = 'dlrow olleh';
console.log(reverseString(String));
  
  
