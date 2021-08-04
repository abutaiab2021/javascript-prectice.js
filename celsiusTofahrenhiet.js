// formula
// (celsius value * 9/5) + 32

function celsiusToFahrenhiet(celsius){
    var fahrenheit  = (celsius * 9/5 + 32);
    return fahrenheit;
}

var myCelsiusValue = 37;
var totalFahrenhietValue  = celsiusToFahrenhiet(myCelsiusValue);
console.log('My accepted fahrenhiet value is :',totalFahrenhietValue);