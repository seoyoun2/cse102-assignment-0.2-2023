var location1;
var location2;
var velocity1;
var velocity2;
var gravity1;
var gravity2;

function setup() {
  createCanvas(640,360);
  location1 = createVector(100,100);
  velocity1 = createVector(1.5,2.1);

  location2 = createVector(150,50);
  velocity2 = createVector(3.0,1.0);

  gravity1 = createVector(0,0.2);
  gravity2 = createVector(0,0.4);

}

function draw() {

  background(0);

  location1.add(velocity1);
  location2.add(velocity2);

  velocity1.add(gravity1);
  velocity2.add(gravity2);

  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  
  if (location1.y > height) {
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
  }

  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -1;
  }

  if (location2.y > height) {
    velocity2.y = velocity2.y * -0.95; 
    location2.y = height;
  }
  
  stroke(50,255,23);
  strokeWeight(2);
  fill(123,127,30);
  ellipse(location1.x,location1.y,60,60);
  stroke(543,255,45);
  strokeWeight(2);
  fill(139,127,240);
  ellipse(location2.x,location2.y,48,48);

}