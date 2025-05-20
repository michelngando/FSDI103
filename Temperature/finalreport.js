console.log(`Final Report`)

function converTemperatureRange(){
    let startValue = parseInt(prompt("Enter Temperature"));
    //let startValue = prompt(enter number);    
    let endValue = parseInt(prompt("Enter Temperature"));
    //let tempRange = [startValue,... endValue]
    //let fahrenheit;
    //let celsius; 
        
    let scale = prompt("Enter C for celsius to Fahrenheit or F for Fahrenheit to Celsius");
    //let p = document.getElementById("temperature")
    //let value = [startValue, endValue]
    
    for(let i=startValue;i<=endValue;i++){       
    if(scale.toLowerCase() == "c") {
        let fahrenheit = ((i * 9/5) +32).toFixed(2); 
        document.getElementById("temperature").innerHTML+=`<p>Your converted temperature for ${i} celsius is ${fahrenheit} fahrenheit</p>`;        
       console.log(`Your temperature in Fahrenheit is ${fahrenheit}`); 
    } else {
        let celsius = ((i - 32) *5/9).toFixed(2);
        document.getElementById("temperature").innerHTML+=`<p>Your converted temperature for ${i} fahrenheit is ${celsius} celsius</p>`;
        console.log(`Your temperature in Celsius is ${celsius}`);
    }
    }
}

    //converTemperatureRange()




    


    
