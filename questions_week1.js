//Question 1

var label = "senecacollege";
var tld = "ca";
var domainName = label + '.' + tld;
// console.log(domainName);

//Question 2

var isSeneca;
if(domainName === "senecacollege.ca"){
    isSeneca = true;
}
else{
    isSeneca = false;
}
// console.log(isSeneca);

//Question 3

var isNotSeneca;
if(isSeneca === true){
    isNotSeneca = false;
}
// console.log(isNotSeneca);

//Question 4

var byte1 = 192;
var byte2 = 168;
var byte3 = 0;
var byte4 = 1;

//Question 5

// console.log(byte1.toString(16));

/* .toString method without an argument prints 1 as it's own value
with a argument of 2 prints out 11000000 (binary)
with an argument of 16 prints out c0 (hexadecimal)
*/

//Question 6

var ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
console.log(ipAddress);

//Question 7

var ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;
console.log(ipInt);

//Question 8

var ipBinary = ipInt.toString(2);
// console.log(ipInt);

//Question 9

// 418: I'm a teapot status code
var statusCode = 418;

//Question 10

if(statusCode > 399 && statusCode < 500){
    console.log("Client error.");
}

//Question 11

switch(statusCode){
    case 100:
        console.log("100 Continue. This interim response indicates that the client should continue the request or ignore the response if the request is already finished.");
        break;
    
    case 101:
        console.log("101 Switching Protocols.");
        console.log("This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.");
        break;

    case 102:
        console.log("102 - Processing.");
        console.log("This code indicates that the server has received and is processing the request, but no response is available yet,");
        break;

    case 103:
        console.log("103 - The Early Hints");
        console.log("This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.");
        break;

    default: 
        console.log("unknown information response");
        break;
}   

//Question 12

function is2xx(status){
    if(status > 199 && status < 300){
        return true;
    }
}

is2xx(201);

//Question 13

var studentName = "Margaret";
var StudentAge = 19;

console.log(`${studentName} is ${StudentAge} years old.`);

//Question 14

var isEven;
var num = 2;

if(num % 2 === 0){
    isEven = true;
}

else{
    isEven = false;
}

console.log(isEven);

// Question 15

var isOdd = !(isEven);
console.log(isOdd);

// Question 16

var radius = 10;
area = Math.PI * (radius * radius);
console.log(area);

// Question 17

var tempertureInCelsius = 22;
var temperatureInFahrenheit = tempertureInCelsius * (9/5) + 32;
console.log(temperatureInFahrenheit);

// Question 18

var heightInFeet = 5;
var heightInMetres = heightInFeet * 0.3048;
console.log(`Your height in metres is: ${heightInMetres}`);

// Question 19

var seconds = 130;
var minutes = Math.floor(seconds / 60);
var secondsRemaining = seconds % 60;

console.log(`Number of minutes: ${minutes}`);
console.log(`Number of seconds: ${secondsRemaining}`);

// Question 20

var score = 70;

if (score <= 100 && score > 89){
    console.log("You get an A!");
    grade = "A";
}

else if(score < 90 && score > 70){
    console.log("You get a B");
    grade = "B";
}

else if(score < 80 && score > 69){
    console.log("You get a C");
    grade = "C";
}

else if(score < 70 && score > 59){
    console.log("You get a D");
    grade = "D";
}

else if("score < 60"){
    console.log("You get a F");
    grade = "F";
}

//Question 21

var day = 1;

switch (day){
    case 1: 
        console.log("Weekday");
        break;
    case 2: 
        console.log("Weekday");
        break;
    case 3: 
        console.log("Weekday");
        break;
    case 4: 
        console.log("Weekday");
        break;
    case 5: 
        console.log("Weekday");
        break;
    case 6: 
        console.log("Weekend");
        break;
    case 7:
        console.log("Weekend");
        break; 
}

// Question 22

function isPositive(num){
    if(num < 0){
        return false;
    }
    else{
        return true;
    }
}

// Question 23

function isLeapYear(year){

    year = 2012;

    if(year % 4 !== 0 || year % 100 == 0 || year % 400 !== 0){
        return false;
    }
    else{
        return true;
    }
}

isLeapYear();

// Question 24

function getDayOfWeek(day){
    if(day === 1){
        return "Monday";
    }

    else if(day === 2){
        return "Tuesday";
    }

    else if(day === 3){
        return "Wednesday";
    }

    else if(day === 4){
        return "Thursday";
    }

    else if(day === 5){
        return "Friday";
    }

    else if(day === 6){
        return "Saturday";
    }

    else if(day === 7){
        return "Sunday";
    }
}

// Question 25

function getFullName(firstName, lastname){
    return firstName + ' ' + lastname;
}

// Question 26

function getCircleArea(radius){
    return Math.PI * (radius * radius)
}

// Question 27

function getHypotenuse(a, b){
   return Math.sqrt(a * a + b * b);
}
