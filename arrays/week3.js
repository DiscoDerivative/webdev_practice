//added because it's apart of arrays

//Q1

function log(...array){

    const displayStrings = array.forEach((string) => console.log(string));
}

log("milk", "cookies", "oreos", "cup");

//Q2

function addItemToHistory(item){
    const history = []
    history.push(item); //it'll just keep adding items to the history stack
    return history;
}

//Q3

function buildArray(num1, num2){

    const array = []
    for(i = num1; i <= num2; i++){
        array.push(i);
    }

    return array;
}

buildArray(2, 24);

//Q4

function addDollars(number){

    const insertDollar = number.map((dollar) => '$' + dollar);
    return insertDollar;
}

addDollars([1, 2, 3, 4]);

//Q5

function tidy(value){
    const trimWhitespace = value.map((newValue) => newValue.trim());
    console.log(trimWhitespace)
}

tidy(["   hello ", "   world   ", "  :) "]);

//Q6

function measure(size){
    const measureString = size.forEach((x) => x.length);
    console.log(measureString);
}

measure(["a", "bc"]);


//Q7

function whereIsWaldo(text){
    const findWaldo = text.forEach((string) => string.includes("Waldo") === true);
    console.log(findWaldo);
}

whereIsWaldo(["Jim Waldorf", "Lynn Waldon", "Frank Smith"]);

//Q8

function checkAges(ages, boundary){
    for(let i = 0; i < ages.length; i++){
        if(ages[i] < boundary){
            return false;
        }
    }
    return true;
}

//Q9

function containsBadWord(words, userName){
    for(let i = 0; i < words.length; i++){
        if(userName.includes(words[i])){
            return words[i];
        }
    }
    return null;
}

containsBadWord(["fuck", "shit", "bitch"], "bitchman227");

//Q10

function extractKeyAndProperty(property){
    let split = property.split(":");

    for(let i = 0; i < split.length; i++){
        split[i] = split[i].trim(); //trims the leading or trailing whitespace after extracting the word
    }

    console.log(split);
    return split;
}

extractKeyAndProperty("color: blue");

function extractString(property){
    let extract = property.split(":");

    for(let i = 0; i < extract.length; i++){
        extract[i].replace(/\s+/g, '');
    }

    console.log(extract);
    
}

extractString("color: blue");

//Q11

//Q12

//Q13

//Q14

//Q15
