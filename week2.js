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

// Question 7

// Question 8

function generateName(libraryName){
    console.log(`${libraryName}.js`);
    return `${libraryName}.js`;
}

generateName("library");

// Question 9

function multipleOfThree(check){
    if(check % 3 == 0){
        return true;
    }
    else{
        return false;
    }
}

// Question 10

function checkBetween(number1, middle, number2){
    if(middle > number1 && middle < number2 || middle < number1 && middle > number2){
        return true;
    }
    else{
        return false;
    }
}

// Question 11

function taxes(purchase){
    return purchase * 0.13;
}

// Question 12

function subtractDiscount(total, percentage){
    if(percentage <= 0){
        return total;
    }

    else{
        return total - (total * (percentage / 100));
    }
}

// Question 13

function daysHoursMinutes(seconds){
    let day = Math.floor(seconds / 86400);
    let hour = Math.floor((seconds % 86400) / 3600);
    let minute = Math.floor(((seconds % 86400) % 3600) / 60);
    
    console.log(`${day} Days, ${hour} Hours, ${minute} Minutes`);
}

daysHoursMinutes(3600);

// Question 14

function time(seconds){
    let day = Math.floor(seconds / 86400);
    let hour = Math.floor((seconds % 86400) / 3600);
    let minute = Math.floor(((seconds % 86400) % 3600) / 60);
    
        if(day === 1){
        console.log(`${day} Day`);
        }
        else if(day > 1){
            console.log(`${day} Days`);
        }

        if(hour === 1){
            console.log(`${hour} Hours`);
            }
            else if(hour > 1){
                console.log(`${hour} Hours`);
            }

            if(minute === 1){
                console.log(`${minute} Minute`);
                }
                else if(day > 1){
                    console.log(`${minute} Minutes`);
                }
    }

time(86461);
