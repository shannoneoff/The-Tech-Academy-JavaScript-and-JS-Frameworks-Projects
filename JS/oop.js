class Animal {                                      //Create the class
    constructor(breed, color, height, weight) {     //Construct the class with properties
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }

    shake() {                                       //Create methods for the class behaviors
        return "shake";
    }

    sit() {
        return "sit";
    }

    layDown() {
        return "lay down";
    }
}

let myDog = new Animal("Hound", "brown", "2 feet", "60 pounds");    //Create an instance of an object
                                                                    //using parent class properties
document.getElementById("Dog").innerHTML =                          //Display the following string using
    "My dog is a " + myDog.color + " " + myDog.breed + ", which weighs " +  //text, properties, and methods
    myDog.weight + " and is " + myDog.height + " tall.<br>It can " + 
    myDog.sit() + ", " + myDog.shake() + ", and " + myDog.layDown() + ".";