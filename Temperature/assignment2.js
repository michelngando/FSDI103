console.log("Assignmengt #2, Temperature");

function tempConversion(){
    let temperature = prompt ("Enter Celsius");
    let fahrenheit = (temperature * 9/5) +32;
    console.log(`The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}`);
}





// Printing on the html page

document.getElementById("result").innerHTML=`The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}`;