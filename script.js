//Define variables
let anyWord;
let theSameWord;
let number;
let firstNumber;
let secondNumber;
let results;
let secretWord;
let userWord;
let myWord
// //Problem 1

// // prompt the user to enter a word

// anyWord = prompt("Enter a word");

// //Prompt the user to enter another word 

// theSameWord = prompt("Enter another word");


// //Set conditions stating if both words are the same 
// if (anyWord == theSameWord){
//     alert("That is correct!!!")
// }

// //If not, tell user they are incorrect and try again
// else{
//     alert("That is incorrect! Try Again!!");
// }

// // Problem 2 

// // Ask user for a number
// number = prompt("Enter a number");

// // if number is greater than zero, it is positive
// if (number > 0) {
//     alert(number + " is positive");

    
// }
// //if number is less than zero, it is negative
// else if (number < 0) {
//     alert(number + " is negative");
    
// }
// else{
//     alert (number + " is zero");

// }

// // Problem 3 

// //Ask the user for a number while converting it from a string to an integer
// firstNumber= parseInt(prompt("What is your first number?"));

// //Ask the user for a second number while converting it from a string to an integer 
// secondNumber= parseInt(prompt("What is your second number?"));


// //Add them together to get a sum
// results  = firstNumber + secondNumber;

// //Using modulo to see if the sum is even by checking if the remainder is zero
//  if (results % 2 == 0 ){
//      alert (results + " is an even number");
//  }

//  //If the modulo is anything but zero it is odd
//  else{
//      alert (results + " is an odd number");
//  }


// //  Problem 4

//  secretWord = "secret";

//  userWord = prompt("What is your first word?");

//  myWord = prompt("What is your second word?");

//  if ((userWord!=secretWord && myWord == secretWord)||(userWord==secretWord && myWord!=secretWord)) {
//      alert (" You got in...but only because one of your words matched the secret word ");

//  }
//  else if ((userWord == myWord)&&(userWord!=secretWord)&&(myWord!=secretWord) ){
//      alert("You got in...but we don't know how");

//  }
//  else if (userWord == secretWord && myWord ==secretWord){
//      alert(" You got in");

//  }
// else{
//     alert("Locked Out");
// }