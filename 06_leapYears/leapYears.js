

// second:
const leapYears = function( year ) {
    let isLeapYear = (year % 4);
    let isNotLeapCentury = (year % 100);
    let isLeapCentury = (year % 400);


return isLeapYear === 0 && (isNotLeapCentury !== 0 || isLeapCentury === 0);
};

/*
// first:
const leapYears = function( year ) {
    let isLeapYear = (year % 4);
    let isNotLeapCentury = (year % 100);
    let isLeapCentury = (year % 400);

    if ((isLeapYear == 0) && (isLeapCentury == 0)) {
        return true;
    } else if ((isLeapYear == 0) && (isNotLeapCentury == 0)) {
        return false;
    } else if (isLeapYear == 0) {
        return true;
    } return false;
};
*/


// Do not edit below this line
module.exports = leapYears;
