



const removeFromArray = function( array, ...theArgs ) {

    for (const arg of theArgs) {
        if ( ( arg == ( array[0] ) && ( (typeof arg) == (typeof array[0]) ) ) ) {
            array.splice(0, 1);
        } else if ( (arg == array[1] && ( (typeof arg) == (typeof array[0]) ) ) ) {
            array.splice(1, 1);
        } else if ( (arg == array[2] && ( (typeof arg) == (typeof array[0]) ) ) ) {
            array.splice(2, 1);
        } else if ( (arg == array[3] && ( (typeof arg) == (typeof array[0]) ) ) ) {
            array.splice(3, 1);
        }
    } return array;
}

/*
console.log(removeFromArray([1, 2, 3, 4], 3, 2))


const removeFromArray = function( array, ...theArgs ) {

    for (const arg of theArgs) {
        if (arg == (array[0])) {
            array.splice(0, 1);
        } else if (arg == array[1]) {
            array.splice(1, 1);
        } else if (arg == array[2]) {
            array.splice(2, 1);
        } else if (arg == array[3]) {
            array.splice(3, 1);
        }
    } return array;
}






// Notes"
// arguments.length tells how many total arguments.
// use arguments[1] for each argument after the array prop.
// array.from(arument[0])?
*/

// Do not edit below this line
module.exports = removeFromArray;
