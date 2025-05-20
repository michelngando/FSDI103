function doubleNumber(num=0){
    let total = num * 2;
    return total;
    console.log(num *2);
}

doubleNumber(8);


function combineNames(firstName="unknwown", lastName="unknown"){
    return firstName + lastName;
}

function converToSeconds(min){
    let sec = min *60;
    return sec;
    console.log(sec);
}

converToSeconds(5);

function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    p.classList.remove("hot","cold","normal");
    
    if(tmp<15){
        p.classList.add("cold");
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
        p.classList.add("normal");
    }else{
        outfit="t-shirt"; 
        p.classList.add("hot");
    }

    p.innerHTML="You should wear : " + outfit;
}
