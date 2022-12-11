class Animal {
    constructor(breed, color, height, weight) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }

    shake() {
        return "shake";
    }

    sit() {
        return "sit";
    }

    layDown() {
        return "lay down";
    }
}

let myDog = new Animal("Hound", "brown", "2 feet", "60 pounds");
document.getElementById("Dog").innerHTML =
    "My dog is a " + myDog.color + " " + myDog.breed + ", which weighs " + 
    myDog.weight + " and is " + myDog.height + " tall.<br>It can " + 
    myDog.sit() + ", " + myDog.shake() + ", and " + myDog.layDown() + ".";