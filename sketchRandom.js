
function setup() {
	createCanvas(500, 500);
  //creates canvas for the sketch to be drawn
  rectMode(CENTER);
  //draws squares and rect from center
  noLoop();
  //sketch will only update when mouse is clicked and calls mousePressed()
}



function draw() {
  background(random(0,255),random(0,255),random(0,255));
  //generates random colour for background
  randomShapes();
  //calls randomShapes() function
}

function mousePressed() {
  background(random(0,255),random(0,255),random(0,255));
  //generates random colour for background
  randomShapes();
  //calls randomShapes() function
}

function randomShapes() {
  noStroke();
  //shapes have no stroke

  let shapesNum = floor(random(3,200));
  //calculates how many shapes will appear

  for (let i = 0; i<(shapesNum); i = i + 1)
  {
    let type = floor(random(0,2));
    //circle or square
    let x = random(0,500); // x coord
    let y = random(0,500); // y coord
    let z = random(30,150); // size of shape
    fill(random(0,255),random(0,255),random(0,255),random(30,255)  );

    if(type == 0)
    {
      ellipse(x, y, z);
    } 
      else 
    {
      square(x, y, z);
    }
  }
}