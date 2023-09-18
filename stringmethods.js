//String Methods

//q1 check the length of a string "hello"

console.log("hello".length);

//q2 remove the trailing and leading whitespace of a string

console.log("    bees   ".trim());

//q3 find the first character of a string and change it to uppercase

var food = "burger";
console.log(food.charAt(0).toUpperCase() + food.slice(1));

//q4 find the last character of a string and change it to lowercase

var pokemon = "pikachU";
console.log(pokemon.slice(0, 6) + pokemon.charAt(6).toLowerCase());

//q5 use concat

var book = "Tokyo";
var book2 = "Ghoul";

console.log(book.concat(' ', book2));

//q6 pad the variable march with a 0

var march = "3";
console.log(march.padStart(2, "0"));

//find if a string, "pizza" includes the letter a

var pizza = "pizza";
console.log(pizza.includes("a"));

//find if a string "java-script" includes the symbol - and remove it

var js = "java-script";
var change = '';
if(js.includes("-") === true){
    change = js.replace(/-/g, "");
}
console.log(change);

//find if the string, code starts with co

var code = "code";
console.log(code.startsWith("co"));

//find if the string, apple ends with le

var apple = "apple";
console.log(apple.endsWith("le"));

//find the index of the character "l"

var milk = "milk";
console.log(milk.indexOf("l"));

//use lastindexof()

var sport = "soccer";
console.log(sport.lastIndexOf("c")); // shows last occurence of a substring in a string

//with string "margarxt", find x and replace it with the correct spelling

var mar = "margarxt";
console.log(mar.replace(/x/g, "e"));

//with string "fighter", print out "fight"

var fighter = "fighter";
console.log(fighter.slice(0,5));

//with string "Javascript Is Cool" turn the first character to lowercase

var phrase = "Javascript Is Cool";
console.log(phrase.toLowerCase());
//
