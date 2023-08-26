


const sumAll = function( argOne, argTwo ) {
    let sumTotal = 0;
    if ( (argOne < 0) || (argTwo < 0) || (typeof argOne != typeof 1) || (typeof argTwo != typeof 1)) {
        sumTotal = 'ERROR';
    } else if ( argOne > argTwo ) {
        sumStart = argTwo; sumLast = argOne;
        for (let currentNum = sumStart; currentNum  <= sumLast; currentNum++ ) {
            sumTotal += currentNum; }
    } else if ( argOne < argTwo ) { sumStart = argOne; sumLast = argTwo; 
        for (let currentNum = sumStart; currentNum  <= sumLast; currentNum++ ) {
            sumTotal += currentNum;  }
    } return sumTotal;
};



/*
console.log(sumAll( 4, -1 ))
*/
// Do not edit below this line
module.exports = sumAll;
