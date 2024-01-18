/******************************************
Random Quote Generator
******************************************/
// alert("its working!")
/* 
 * `quotes` array 
***/
// This line the selection of the quotes 
const quote = [
    {
        quote:"algun dia tocinito",
        source: "gorila albino, alias skips",
        citation: "Facebook Marketplace",
        year: "2021"
},
    {
        quote:"Henshin a go go baby!",
        source: "Viewtiful Joe",
        citation: "Viewtiful Joe",
        year: "2001",
    },
    {
        quote:"Around the world,Around the world, around the world",
        source: "Daft Punk",
        citation: "Song",
        year: "2013",
    },
    {   
        quote:"Gum-Gum Pistol",
        source:"Monkey D. Luffy",
        citation: "One Piece",
        year: "1997",
    },
    {
        quote:"Praise the sun",
        source: "Solaire of Astora",
        citation: "Dark Souls",
        year: "2011",
    },
];
// console.log(quotes)
/***
 * `getRandomQuote` function
***/
// select html by id and sets it to the name quote vox
const quoteBox = document.getElementById('quote-box')
//this selects the quote to put it in the HTML
const quoteButton = document.getElementById('load-quote')
// this function choose in a random way the quotes.
function getRandomQuote(){
    // this selects shuffle the quotes, to 1-5
    let randomNumber = Math.floor(Math.random() * quote.length)
    // console.log(randomNumber)
    //this put the quote that was select.
    return quote[randomNumber]
}
// console.log(getRandomQuote());

/***
 * `printQuote` function
***/
//this function prints the quote.
function printQuote(){
// this makes a variant of getRandomQuote to printed 
    let randomQuote = getRandomQuote()
    //this line works to print the quote to the HTML
    let quoteHTML = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}  `
//This prints the citation to the HTML
    if(randomQuote.citation){
        quoteHTML += `<span class="citation">${randomQuote.citation}</span>` 
    }
    //This prints the year to the HTML
     if(randomQuote.year){
        quoteHTML += `<span class="year">${randomQuote.citation}</span>`
    }
    quoteHTML += `</p>`
    // This one works to put the quotes in the quotebox
    quoteBox.innerHTML = quoteHTML; 
}
// printQuote()
// console.log(printQuote())

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// setInterval();
// this line when the button is clicked, make appears the quote.
quoteButton.addEventListener("click", printQuote, false);