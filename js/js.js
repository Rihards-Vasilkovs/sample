/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log("Space the final frontier...");

/* I am a comment 
and i Can fill out more than one line
*/

// I am a one liner comment 

/* Variables and how to create them */
let myCow = "Alaska";
var anotherCow = "Red";
let myBook = "It was a dark and stormy night, and Joe's gun...\n";
const grandMa = "Bertie";

console.log(
    myBook
     +  
    grandMa
    + " " 
    + myCow
    );

/* numbers */
let lucky = 7;
let disaster = 15;
const noChange = 333;
lucky = 2345;   /* if you redefine variable, the lowest string takes effect, since code goes up to down, old to recent kinda*/

console.log( lucky / disaster )

/* booleans: true or false*/
const santaExists = true;
console.log(santaExists);

/** compare */
console.log( lucky >= disaster);

/** write to some html id */
hi.innerHTML = "<p>" + myBook + "<p>";

/**several lines in a variable */
let pizza = `
    <article> 
    <h2> Gorgonzola Gargantua </h2>
    <img src="images/gorgonzola.jpeg" alt="image of pizza"></img>
    <p> This wonderfull pizza is delicious...</p>
    </article>
`;

// inject this into #hi
hi.innerHTML += pizza;

/** Function: a series of instructions */
let boom = function(){
    alert("We use cookies, and we track all you do! Consent?");
    console.log("Cookie info fired off!")
    return true;
}
