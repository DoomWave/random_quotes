/******************************************
Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
const quotes = [];
// quotes.push("viewtiful","skips","daftpunk","onepiece");
var viewtiful = quotes
console.log("Joe", viewtiful)
var skips =  quotes
console.log("gorila", skips)
var daftpunk = quotes
console.log("punkdaft", daftpunk)
var onepiece = quotes
console.log("joyboy", onepiece)

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
    return Math.floor(Math.random() * max);
}



/***
 * `printQuote` function
***/
function printQuote(){

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
setInterval()

document.getElementById('load-quote').addEventListener("click", printQuote, false);