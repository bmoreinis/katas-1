/* Variable and Alert Kata Answers */

/* COLOR */

//Prompt with Conditional
var color = prompt("What is your favorite color?"); 
if (color == "black") alert("Black is not really a color.");
else alert("Your favorite color is "+color);


/* AGE */

//Prompt with Conditional 
var age = prompt("How old are you?");
var name = prompt("What is your name?");
if (age > 16) alert ("You don't look that old!");
else alert(name +" is "+age+" years old.");

/* ICE CREAM */

// Prompt
var flavor = prompt("What is yoour favorite ice cream?"); 
var scoops = prompt("How many scoops do you want?"); 
alert("I want "+scoops+" scoops of "+flavor+" ice cream.");

// Prompt with Conditional
var flavor = prompt("What is yoour favorite ice cream?"); 
var scoops = prompt("How many scoops do you want?"); 
if (scoops > 3) alert("Max 3 scoops per cone!")
else alert("You want "+scoops+" scoops of "+flavor);

/* PET */

/* Prompt */
var petType = "What type of pet do you have?";
var petName = "What is the pet's name?";
alert("Your "+petType+" is named "+petName);

/* Prompt */
var petType = "What type of pet do you have?";
var petName = "What is the pet's name?";
alert("Your "+petType+" is named "+petName);
if (petType == "dog") alert ("I like dogs, too!");
else if (petType == "cat") alert ("I am allergic to cats.");
else alert ("What an interesting type of pet!");