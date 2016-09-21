function Rectangle(sides, width, height) {
  this.sides = sides;
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
//added this function to be a part of the Rectangle class
Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
}



//Prototypal inheritance
function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

function Rectangle(x, y, width, height) {
  //call superclass constructor
  Shape.call(this, 4, x, y);
  //set rectangle values
  this.width = width;
  this.height = height;
}



// set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Shape.prototype);
// set Rectangle constructor
Rectangle.prototype.constructor = Rectangle

// extend with Rectangle behavior
Rectangle.prototype.area = function() {
  return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
  return (this.width + this.height) * 2;
}


rectangle.sides = 4
rectangle.x = 4
rectangle.y = 3
rectangle.width = 5
rectangle.height = 3
rectangle.constructor = function Rectangle(x, y, width, height) {
  //call superclass constructor
  Shape.call(this, 4, x, y);
  //set rectangle values
  this.width = width;
  this.height = height;
}
rectangle.area = function () {
  return this.width * this.height;
}
rectangle.perimeter = function () {
  return (this.width + this.height) * 2;
}
rectangle.move = function (x,y) {
  this.x = x;
  this.y = y;
  }
rectangle.position = function () {
  return(this.x + ", " + this.y);
}
