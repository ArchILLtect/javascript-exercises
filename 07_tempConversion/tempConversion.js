


const convertToCelsius = function( degreesFahr ) {
  let rawCelcius = (degreesFahr -32) * (5/9);
  return rawCelcius.toFixed(1);
};

const convertToFahrenheit = function( degreesCelc ) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
