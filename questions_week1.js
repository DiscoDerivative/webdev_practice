//Question 1

var label = "senecacollege";
var tld = "ca";
var domainName = label + '.' + tld;
// onsole.log(domainName);

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
var byte3 = 2;
var byte4 = 1;

//Question 5

// console.log(byte1.toString(16));

/* .toString method without an argument prints 1 as it's own value
with a argument of 2 prints out 11000000 (binary)
with an argument of 16 prints out c0 (hexadecimal)
*/

//Question 6

var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
// console.log(ipAddress);

//Question 7

var ipInt = byte1 << 24 + byte2 << 16 + byte3 << 8 + byte4;
// console.log(ipInt);

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
