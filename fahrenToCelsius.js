
// Formula	 = (100°F − 32) × 5/9 = 37.778°C

function fahrenheitToCelsius(fahrenheit){
    let celsius =  (fahrenheit - 32) * (5/9);
    return celsius; 
}

let myFahrenheit = 102;
let celsiusTotalValue = parseFloat(fahrenheitToCelsius(myFahrenheit)).toFixed(4);
console.log('My Celsius value is :',celsiusTotalValue);

