document.getElementById("andOp").innerHTML = 2 & 3;                 //Utilizes the And operator

document.getElementById("orOp").innerHTML = 2 | 3;                  //Utilizes the Or operator

document.getElementById("xorOp").innerHTML = 2 ^ 3;                 //Utilizes the XOr operator

let text = "\'Ello Guvnah"
let n = text.search("Guvnah");                                      //Searches the text string to figure out the
                                                                    //position of the word in the string
document.getElementById("searchRegExp").innerHTML = n;              //Returns the number of the position

function replaceFunction() {
    let text = document.getElementById("rplcRegExp").innerHTML;     //Text to use in the example
    document.getElementById("rplcRegExp").innerHTML =
        text.replace("ants", "donkeys");                            //Replaces the first word with the second in the text
}

function tctFunction() {
    const message = document.getElementById("tryCatchThrowFinally");
    message.innerHTML = "";
    let x = document.getElementById("tryCatchThrowDemo").value;
    try {                                                           //Gives the computer options to execute
        if (x == "") throw "not filled in";                         //Returned if input is empty
        if (isNaN(x)) throw "not a number";                         //Returned if input is a letter or character
        x = Number(x);
        if (x < 31) throw "too low. Enter a number between 31 and 40."; //Returned if input is lower than parameter
        if (x > 40) throw "too high. Enter a number between 31 and 40.";    //Returned if input is higher than parameter
    }
    catch (err) {
        message.innerHTML = "Input is " + err;                      //Message will be displayed if any error is present
    }
    finally {
        document.getElementById("tryCatchThrowDemo").value = "";    //Ensures that if there are any errors, the text will
                                                                    //display still
    }
}

const animal = {                                                    //Constructs an object
    color: "black",
    animalName: "panther",
    animalDescription: function() {
        return this.color + " " + this.animalName;
    }
};
document.getElementById("animalDemo").innerHTML = animal.animalDescription();   //Displays data from object

let m = 8;                      //Here, m is 8
{
    let m = 9;                  //Here, m is 9
}
document.getElementById("letDemo").innerHTML = m;   //Here, m is 8

const houses = ["Tudor", "Mid-Century Modern", "Four-Square", "Ranch"]; //Array is created
houses[0] = "Brownstone";                                               //Changes an element in the array
houses.push("Earthship");                                               //Adds an element to the array
document.getElementById("constDemo").innerHTML = houses;                //Displays the modified array

let greeting = "";                                                      //Variable is created
greeting = () => "Greetings, Earthling";                                //Arrow function is efficient
document.getElementById("arrow").innerHTML = greeting();                //Returns string to page

class Car {                                                             //Create class
    constructor(make, model, year) {                                    //Construct object
        this.make = make;
        this.model = model;
        this.year = year;
    }
    age(x) {                                                            //Calculate age
        return x - this.year;                                           //Return result of equation as age
    }
}
let date = new Date();                                                  //Create variable called date
let year = date.getFullYear();                                          //Find difference between current year and year of object
let myCar = new Car("Tesla", "Model Y", 2021);                          //Data used in equation
document.getElementById("classMethod").innerHTML = "My car is " + myCar.age(year) + " year(s) old.";    //Displays string with calculated age

const numbers = [6, 9, 13, 17, 40, 76];                                 //Establishing an array
document.getElementById("findIndex").innerHTML =
    "First number over 23 has index " + numbers.findIndex(findIndexFunction);   //String to be displayed including function
function findIndexFunction(value, index, array) {                       //Creating the function
    return value > 23;                                                  //Returning the value for display within the string
}

document.getElementById("numIsIntegerMethod").innerHTML =
    Number.isInteger(255) + "<br>" + Number.isInteger(21.4);            //Returns a string with answers included: is the number an integer or not?

document.getElementById("numIsFiniteMethod").innerHTML =
    isFinite(9 / 0) + "<br>" + isFinite(8 / 2);                         //Returns a string with answers included: is the number finite or not?

let h = 9;                                                              //Set first variable
let i = h ** 4;                                                         //Sets the second variable with the first raised to the exponent number on the right
document.getElementById("expoOp").innerHTML = i;                        //Returns the calculation made within the second variable

function validateForm() {
    let f = document.forms["aForm"]["firstName"].value;                 //Checks against the value submitted in the input box
    if (f == "") {
        alert("Please fill in your name below");                        //This alert box will pop up if no text was submitted in the form box
        return false;
    }
}                                                                       //Note: this function will not bring up the alert box due to the debugger
                                                                        //keyword used below

let x = 15 * 5;                                                         //Note: this debugger keyword is set below other code to avoid interference
                                                                        //Creating a variable out of an equation
debugger;                                                               //The debugger keyword
document.getElementById("debugger").innerHTML = x;                      //If the debugger is turned on, this code should not execute

x = 3.14;                       //This will not cause an error.
strictFunction();

function strictFunction() {
    "use strict";               //Note: Even though strictFunction() is used higher on the page, it is
                                //placed lowest in the JS file to avoid interference in display of other examples
    y = 3.14;                   //This will cause an error because y is not defined.
}