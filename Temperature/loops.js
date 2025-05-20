//for
for(let i=0;i<4;i++){
    document.write("My for is working?");
}

for(let i=0;i<=10;i*2){
    document.write(`<p> ${i} <p>`);
}

for(let i=1;i<=10;i++){
    result = num * i;
    document.write(`<p>${num} x ${i} = ${result} <p>`);

}

//while loop

console.log("---while loop----");
let i=0; //start point

while(i<=10){ // stop condition
    console.log(i);
    i++; // interval
}

// do-while loop


//while example
function countDown(){
    let seconds =10;
    let results ="";

    while(seconds>0){
        results+=`<p> Launching in ${seconds}<p>`;
        seconds--;
    }
    results += "Liftoff!!!"
    document.write(results);
}
countDown();

//do-while
function passwordPrompt(){
    let correctPassword = "1234";
    let userInput;
    let notification = "Simulating password input";

    do{
        userInput = prompt("Enter your password: ");
        notification+="User entered: " + userInput;
    }while(userInput != correctPassword);

    document.write
}