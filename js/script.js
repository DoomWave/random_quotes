/******************************************
Random Quote Generator
******************************************/
// alert("its working!")
/* 
 * `quotes` array 
***/
// This is an array of quotes. The array contain objects with quotes, source, citation, year and tags.
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
//this line selects html by id and sets it to the name quote-box
const quoteBox = document.getElementById('quote-box')
//this selects the html by id and sets it to quote button.
const quoteButton = document.getElementById('load-quote')
//this selects the body element by id and sets it to the name body
const body = document.getElementById("body");
console.log(body)

// this function getRandomQuote gets a quote from the quote array.
function getRandomQuote(){
    // randomNumber makes random numbers using the math.random method
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
function printQuote(){
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
    //This is the closing tag of the html
    quoteHTML += `</p>`
    // this line selects the innerHTML and changing the value to the HTML inside the variable quoteHTML
    quoteBox.innerHTML = quoteHTML; 
}
// printQuote()
// console.log(printQuote())
// This function getRandomColor creates random color
function getRandomColor(){
    //this line creates a random number from 0 to 256 and then assigns it to value "r"
    let r = Math.floor(Math.random()* 256 )
    //this line creates a random number from 0 to 256 and then assigns it to value "b"
    let g = Math.floor(Math.random()* 256 )
    //this line creates a random number from 0 to 256 and then assigns it to value "g"
    let b = Math.floor(Math.random()* 256 )
    // console.log(randomColorNum)
    // the color variable combines the value of "r","g" and "b" to create a random color.
    let color = `rgb(${r},${g},${b})`
    //this returns the color variable
    return color
}
// this invokes the function gentRandomColor
getRandomColor() 
// This makes an event listener and it waits for a click, when its clicked, changes the color of the background
quoteButton.addEventListener("click", () => {
    //this line grabs a element called body, changes the style of the background and changes to a random color using the function getRandomColor
body.style.background = getRandomColor();
});
// body.style.backgroundColor = `rgb(${r},${g},${b})`;
// console.log(body.style.backgroundColor = `rgb(${r},${g},${b})`);

console.log(getRandomColor())
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// function quoteRefresh(){
//     const intervalID = 
//     intervalID = setInterval(getRandomColor, 10);
// }
//
const interval = () => {
    return setInterval(() =>{
        printQuote() 
        body.style.background = getRandomColor(); 
    }, 5000)
}
interval()



// this line is a event listener and it waits for a click. When there is a click, it will call the printQuote function and the button will work.
quoteButton.addEventListener("click", printQuote, false);