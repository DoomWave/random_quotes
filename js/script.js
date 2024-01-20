/******************************************
Random Quote Generator
******************************************/
// alert("its working!")
/* 
 * `quotes` array 
***/
// This is an array of quotes. The array contain objects with quotes, source, citation and year.
const quote = [
    {
        quote:"algun dia tocinito",
        source: "gorila albino, alias skips",
        citation: "Facebook Marketplace",
        year: "2021",
        tags: "Humor" 
},
    {
        quote:"Henshin a go go baby!",
        source: "Viewtiful Joe",
        citation: "Viewtiful Joe",
        year: "2001",
        tags: "Beauty"
    },
    {
        quote:"Around the world,Around the world, around the world",
        source: "Daft Punk",
        citation: "Song",
        year: "2013",
        tags: "Music"
    },
    {   
        quote:"Gum-Gum Pistol",
        source:"Monkey D. Luffy",
        citation: "One Piece",
        year: "1997",
        tags: "Cartoon"
    },
    {
        quote:"Praise the sun",
        source: "Solaire of Astora",
        citation: "Dark Souls",
        year: "2011",
        tags: "Nature"
    },
];
// console.log(quotes)
/***
 * `getRandomQuote` function
***/
// selects html by id and sets it to the name quote-box
const quoteBox = document.getElementById('quote-box')
//this selects the html by id and sets it to quote button.
const quoteButton = document.getElementById('load-quote')

//document.getElementById("MyElement").className += "Class1,Class2,Class3,Class4,Class5";

// this function getRandomQuote gets a quote for the quote array.
function getRandomQuote(){
    // randomNumber makes random numbers
    let randomNumber = Math.floor(Math.random() * quote.length)
    // console.log(randomNumber)
    //this returns a quote in a random order.
    return quote[randomNumber]
}
// console.log(getRandomQuote());

/***
 * `printQuote` function
***/
//this function prints the quote.
function printQuote(vj,bacon,crazy,gum,taco){
// this  a variable called randomQuote that grab other function called getRandomQuote  
    let randomQuote = getRandomQuote()
    //this is a variable called quoteHTML and stores HTML with information from the randomQuote
    let quoteHTML = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}  
    
    </p>`
//This is a statement that checks if the randomQuote has the property of citation, if it does, is going to give me the value of the html inside the variable quoteHTML and add the span tag with the class citation.
    if(randomQuote.citation){
        quoteHTML += `<span class="citation">${randomQuote.citation} </span>` 
    }
    //This is a statement that checks if the randomQuote has the property of year, if it does, its going to add span tag with the class year into the HTML.
     if(randomQuote.year){
        quoteHTML += `<span class="year">${randomQuote.year} </span>`
    }
    //This statement it checks if the randomQuote has a property called tags, if it does its going to add span tag with the class tags into HTML.
    if(randomQuote.tags){
        quoteHTML += `<span class="tags">${randomQuote.tags} </span>`
    }
    console.log("tags", randomQuote)
    //This closing tag the html
    quoteHTML += `</p>`
    // Its selecting the innerHTML and changing the value to the HTML inside the variable quoteHTML
    quoteBox.innerHTML = quoteHTML; 
}
// printQuote()
// console.log(printQuote())

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// setInterval();
// this line is a event listener and it waits for a click. When there is a click, it will call the printQuote function and the button will work.
quoteButton.addEventListener("click", printQuote, false);