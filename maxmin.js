// 1. Given an array of integers, return the highest and lowest numbers in the array (without using Math.max() or Math.min())

function maxMin(array) {
  if (Array.isArray(array) != true) {
    alert("Input isn't an array.");
    return -1;
  }
  let currentMin = array[0],
    currentMax = array[1];
  for (let element of array) {
    if (element < currentMin) {
      currentMin = element;
    } else if (element > currentMax) {
      currentMax = element;
    }
  }
  let output = [currentMin, currentMax];
  console.log("maxMin array for " + array + " is " + output);
  return output;
}

maxMin([2, 4, 1, 0, 2, -1]);
