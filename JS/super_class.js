//Superclass of shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea() {
        return "The shape you chose is " + this.color
    }
}

//Subclass of rectangle
class Rectangle extends Shape {

    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }

    rectangleArea() {
        return this.getArea() + ". It has an area of " + (this.height * this.width) + " square inches.";
    }
}
r = new Rectangle("red", 11, 9);

//Subclass of triangle
class Triangle extends Shape {

    constructor(color, height, base) {
        super(color);
        this.height = height;
        this.base = base;
    }
    triangleArea() {
       return this.getArea() + ". It has an area of " + (this.height * this.base / 2) + " square inches.";
    }
}
t = new Triangle("blue", 18, 14);

//Subclass of circle
class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    circleArea() {
        return this.getArea() + ". It has an area of " + (Math.PI * this.radius * this.radius) + " square inches.";
    }
}
c = new Circle("green", 6);

function getArea() {
    //Get the selected shape
    let shape = document.getElementById("shape_name");
    let shapeValue = shape.value;

    //If Else If comparisons to display results of area calculations
    if (shapeValue == "rectangle") {
        document.getElementById("id_output").innerHTML = r.rectangleArea();
    } else if (shapeValue == "triangle") {
        document.getElementById("id_output").innerHTML = t.triangleArea();
    } else if (shapeValue == "circle") {
        document.getElementById("id_output").innerHTML = c.circleArea();
    }
}