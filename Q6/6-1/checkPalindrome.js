function palindrome(str) {
    //regular expression to exclude any unwanted special characters
    var regexp = /[\W_]/g;
    //convert all leters to lowercase
    var stringLowerCase = str.toLowerCase().replace(regexp, '');
    //split the string into array of characters
    //and then reverse this array and join the
    //letters to create the reversed word
    var stringReversed = stringLowerCase.split('').reverse().join('');
    //check if reverse = original word return palindrome
    if (stringReversed === stringLowerCase) return "Palindrome";
    //otherwise return the reverse word
    else return stringReversed;
}

let testString = palindrome("axsW@#!o56WRa");
console.log(testString);