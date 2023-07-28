function findMissingNumber(array) {
    //get the sum of all numbers from Zero to array size
    let missingNumber = Math.floor((array.length + 1) * (array.length + 2) / 2);
    //substract each array element from the sum so the remainder is the missing number
    for (let i = 0; i < array.length; i++)
        missingNumber -= array[i];
    return missingNumber;
}

//generate array of first 45 numbers (you can change the array size to any number)
let arraySize = 45;
let array = Array.from({ length: arraySize }, (_, i) => i + 1);

//remove a random element from the array
array.splice(Math.floor(Math.random() * array.length), 1);

//find the missing element
let missingNumber = findMissingNumber(array, arraySize - 1);
console.log(array);
console.log("missing number is: " + missingNumber);