

const reverseString = function( string ) {
    console.log(string)
    let stringArray = string.split('');
    let numLetters = string.length;
    let resultArray = []

    for (let currentPosition = 0; currentPosition < numLetters; currentPosition++) {
        let currentLetter = stringArray.slice(currentPosition, (currentPosition +1));
        resultArray.unshift(currentLetter.toString());
        
    } return resultArray.join("")
}; 

/*
const reverseString = function( string ) {
    console.log(string)
    let stringArray = string.split('');
    let numLetters = string.length;
    let resultArray = []
    // console.log(stringArray);
    // console.log(numLetters);
    // let firstLetter = stringArray.slice(0,1);
    // console.log(stringArray);


    // console.log(firstLetter)
    for (let currentPosition = 0; currentPosition < numLetters; currentPosition++) {
        // console.log("Current Letter Position:");
        // console.log(currentPosition)
        let currentLetter = stringArray.slice(currentPosition, (currentPosition +1));
        // console.log("Current Letter:")
        // console.log(currentLetter);
        resultArray.unshift(currentLetter.toString());
        // console.log(resultArray)
        
    } return resultArray.join("")
}; 

// console.log(reverseString('hello'))
// reverseString('hello')
*/

// Do not edit below this line
module.exports = reverseString;
