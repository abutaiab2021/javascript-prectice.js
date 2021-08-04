function gradeCalculate(number){
      if(number <= 100 && number >= 90){
            console.log("Your Have Got Golden A+");
        }
       else if(number <= 90 && number >= 80){
            console.log("Your grade numbers  A+.");
        }
        else if(number <= 80 && number >=75){
            console.log("Your grade numbers  A.");
        }
        else if(number <= 75 && number >=70){
            console.log("Your grade numbers  A-.");
        }
        else if(number <= 70 && number >=60){
            console.log("Your grade numbers  B+.");
        }
        else if(number <= 60 && number >=55){
            console.log("Your grade numbers  B-.");
        }
        else if(number <= 55 && number >=50){
            console.log("Your grade numbers  C+.");
        }
        else if(number <= 50 && number >=45){
            console.log("Your grade numbers  C.");
        }
        else if(number <= 45 && number >=40){
            console.log("Your grade numbers  D.");
        }else{
            console.log("Your are failed.");
        }

    return number;
}

var result = gradeCalculate(75.75);
console.log('Your Mark is :',result);