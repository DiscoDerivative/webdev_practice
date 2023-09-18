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

//Function that returns the number of matches found in first arg and remaining arguments

function findMatches(base, ...test){
    let sum = 0;
    for(i = 0; i < test.length; i ++){
        if(base === test[i]){
            sum = sum + 1;
        }
    }
    return sum;
}

console.log(findMatches(66, 1, 345, 2334, 66, 67, 66));


//Function that logs all arguments greater than 255

function showOutsideByteRange(...values){
    for(let i = 0; i < values.length; i++){
        if(values[i] > 255){
            console.log(values[i]);
        }
    }
}

showOutsideByteRange(1, 5, 233, 255, 256, 0);

//Function that takes a string and returns its value encoded for use in a URL

function prepareString(string){
    let encoded = encodeURIComponent(string);
    console.log(encoded);
}

prepareString("hello world");

//Write an enclosing function that takes any number of string arguments and reutrns them in encoded form concatenated together

function buildQueryString(...string){
    let encode;
    let storeEncodedInfo = [];
    for(i = 0; i < string.length; i++){
       encode = encodeURIComponent(string[i]);
       storeEncodedInfo.push(encode);
    }

    let join = storeEncodedInfo.join('&');
    let finishedString = `?$${join}`;
    return finishedString;
}

//Function that takes a function, followed by any amt of numbers and applies the function to all numbers returning the total

function applyFn(...num){

    function func(value){
        return value * value;
    } 

    let add = 0;
    for(let i = 0; i < num.length; i++){
        add += func(num[i]);
    }
    return add;
}

console.log(applyFn(1, 2, 3));
