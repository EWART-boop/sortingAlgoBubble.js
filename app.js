const prompt = require("prompt-sync")({signint:true});
let numbersArray = [];

for (let i = 0; i < 10; i++) {
  let number = prompt(`Enter number ${i + 1}:`);
  numbersArray.push(Number(number));
}

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    console.log(`Pass ${i + 1}:`);

    for (let j = 0; j < n - i - 1; j++) {
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    console.log("Array after pass: " + arr);
    
    if (!swapped) break;
  }
}

console.log("Original Array: " + numbersArray);
bubbleSort(numbersArray);
console.log("Sorted Array: " + numbersArray);
