// simple interest formula = (P*r*t)/100

function simpleInterest(principle,rate,time){
    let interest = (principle * rate * time) / 100;
    return interest;
}

let principle = 50000;
let rate = 5;//5% interest deoya hobe.
let time = 3;
let yearlyInterest =  simpleInterest(principle,rate,time);
console.log('Interset is :',yearlyInterest);