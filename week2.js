//Question 1

function area(r){
    let area = Math.PI * (r * r);
    console.log(area);
    return area;
}

area(1);

//Question 2

function rollDice(numOfSides){
    let randomizer = Math.floor(Math.random() * numOfSides + 1);
    console.log(randomizer);
    return randomizer;
}

rollDice(50);

//Question 3

function celciusToFahrenheit(celsius){
    fahrenheit = (celsius * (9/5) + 32);
    console.log(fahrenheit);
    return fahrenheit;
}

celciusToFahrenheit(0);

// Question 4

function weatherConverter(degrees, temperature){
    let fahrenheit;
    let celsius;
    if(temperature === "F" || temperature === "f"){
        celsius = (degrees - 32) / 1.8;
        console.log(`${celsius} C`);
        return fahrenheit;
    }

    else if(temperature === "C" || temperature === "c"){
        fahrenheit = (degrees * (9/5) + 32);
        console.log(`${fahrenheit} F`);
        return fahrenheit;
    }
    
    else{
        console.log("Invalid arguments");
    }
}

weatherConverter(0, "C");

// Question 5

function isUnder50(){
    for(i = 0; i < arguments.length; i++){

         if(arguments[i] >= 50){
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

isUnder50(1, 2, 3);

// Question 6

function sum(){
    let total = 0;
    for(i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    console.log(total);
    return total;
}

sum(1, 2, 3);
