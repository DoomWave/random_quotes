/******************************************
Random Quote Generator
******************************************/
alert("its working!")
/* 
 * `quotes` array 
***/
const quotes = [
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
        citation: "Around The World",
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
console.log(quotes)
/***
 * `getRandomQuote` function
***/
// function getRandomQuote(){
//     return Math.floor(Math.random() * max);
// }



/***
 * `printQuote` function
***/
function printQuote(){

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// setInterval();

document.getElementById('load-quote').addEventListener("click", printQuote, false);