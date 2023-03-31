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
    return '';
  } else if (str.length === 1) {
    return str;
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
}

console.log(reverseString(" hello"));
  
