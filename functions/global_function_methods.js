// Parse hello word to an integer and log it.

var helloWorld = "hello word";
console.log(parseInt(helloWorld)); //Shows up as NaN

//Parse "50" to an integer and log it.

console.log(parseInt("50")); //Turns the string into 50

//Parse 25.75 to a float and log it.

console.log(parseFloat("25.75"));

// Ask if 10, "cat" and hungry = true is NaN and log the result.

console.log(isNaN(10)); //prints out true or false
console.log(isNaN("cat"));
console.log(isNaN(true));

//Ask if a value is finite. Values: 20, 0, 0.5

console.log(isFinite(20));
console.log(isFinite(5 / 0));

//Use a encodeURI to encode a full URL.
//Use a encodeURIcomponent for a query

//Encode a URI using encodeURI() and encodeURIcomponent()

var shortUrl = encodeURI("discord.com/channels@ me");
console.log(shortUrl);

var longUrl = encodeURIComponent("https://www.google.com/search?q=urls+with+special+characters+example&sca_esv=566172731&rlz=1C1RXQR_enCA1073CA1073&sxsrf=AM9HkKkeMGnjVT-DWgEoAWLNY5zpWbd0rg%3A1695012262144&ei=ptUHZYe9CJqIptQPw_q6qAI&ved=0ahUKEwiHqJnerLOBAxUahIkEHUO9DiUQ4dUDCBA&uact=5&oq=urls+with+special+characters+example&gs_lp=Egxnd3Mtd2l6LXNlcnAiJHVybHMgd2l0aCBzcGVjaWFsIGNoYXJhY3RlcnMgZXhhbXBsZTIGEAAYFhgeMggQABiKBRiGAzIIEAAYigUYhgMyCBAAGIoFGIYDSL0KUK4CWLAJcAF4AZABAJgB0wGgAa8IqgEFMC41LjK4AQPIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp");
// console.log(longUrl);
//Decode a URI using decodeURI() and decodeURIcomponent.

console.log(decodeURI(shortUrl));
console.log(decodeURIComponent(longUrl));

console.warn("Poop");
console.error("Error");
console.count();
console.dir();

console.log(Math.abs(-2));
console.log(Math.max(1, 2, 3));
console.log(Math.min(100, 4, 34));
console.log(Math.round(Math.random() * 3));

console.log(Date.now());
