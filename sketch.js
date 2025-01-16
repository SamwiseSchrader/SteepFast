function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  var x = width;
  var y = height;

  rotate(0.610865); // a bit less than 45 degrees
  translate(75,-150);
  rectMode(CENTER);
  rect(200, 200, 175, 120);
  fill(150, 228, 250);
  arc(x/2, y/2-45, 175, 175, PI, 0); // top hemisphere
  arc(x/2, y/2+45, 175, 175, 0, PI); // bottom hemisphere
  
  push();
    noStroke();
    fill(106, 143, 4);
    //arc(x/2, y/2-45, 170, 170, PI, 0); // top negative hemisphere
    arc(x/2, y/2+45, 170, 170, 0, PI); // bottom negative hemisphere
  pop();

  push();
    noStroke();
    fill(106, 143, 4);
    triangle(x/4+15, y/2+45, 285, 140, 285, 245); // bottom triangle
  pop();

  // push();
  // fill(0);
  // translate(0, 13);
  // triangle(174, 182, 178, 150, 205, 163);
  // pop();

  print(mouseX, mouseY);
}