class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  
  static calculate(figure){
    let area = 0;
    if (figure instanceof Square){
      area = (figure.side * figure.side);
    } else if(figure instanceof Rectangle){
      area = (figure.width * figure.height);
    }else if(figure instanceof Circle){
      area = (Math.PI * figure.radius * figure.radius);
    } else {
      console.log("The figure is invalid.");
    }
    return area;
  };
};

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));