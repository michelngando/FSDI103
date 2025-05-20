console.log("Assignment #3, Temperature");

//let temperature = prompt ("Enter Celsius");
//let fahrenheit = (temperature * 9/5) +32;

//console.log(`The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}`);

function converTemperature(){
    let temperature = prompt("Enter Temperature");
    let fahrenheit = (temperature * 9/5) +32;  
    let celsius = (temperature - 32) *5/9;
    let scale = prompt("Enter C for celsius to Fahrenheit or F for Fahrenheit to Celsius");
    if(scale == "C") {
       console.log(`Your temperature in Fahrenheit is ${fahrenheit}`) 
    } else {
        console.log(`Your temperature in Celsius is ${celsius}`)
    }

    //console.log(`The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}`);   
}

/*function scale(){
    let scale = prompt ("Enter C for celsius or F for fahrenheit");
    if(scale == "C") {
      console.log(`Your temperature in celsius is ${celsius}`) 
   } else {
      console.log(`Your temperature in fahrenheit is ${fahrenheit}`)
    }
} */

// Printing on the html page

document.getElementById("result").innerHTML+=`The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}`;