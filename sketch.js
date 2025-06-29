let value = 255;
let weight =5;
let x = 0;
let px = 0;
let y =0;
let py = 0;
let easing = 0.2;

function setup() {
  createCanvas(480, 480);
  background(0);
}

function draw() {

  strokeWeight(weight);
// listens for mouse pressed to determine if line should be drawn
  if(mouseIsPressed){
    stroke(value);
  } else {
    noStroke();
  }

  //easing enables a smoother drawing experience
  let targetX = mouseX;
	x += (targetX - x) * easing;
  let ptargetX = pmouseX;
  px += (ptargetX - px) *easing;


  let targetY = mouseY;
  y += (targetY-y)* easing;
  let ptargetY = pmouseY;
  py += (ptargetY-py)*easing;
   
  //draws line at mouse coords
  	line(x,y, px, py);
}

//listens for keys pressed and:
// updates "value" variable with the new colour
// draws stars using star function
// updates "weight" variable which sets stroke weight (brush size)

function keyPressed(event) {
  if (key === 'r') {
    value = 'red';
  } else if (key === 'b'){
    value = '#077fba';
  } else if (key === 'o'){
    value = '#f07205';
  }  else if(key === 'c'){
    background(0);
  } else if (key === 'y'){
    value = 'yellow';
  } else if (key === 'g'){
    value = 'green';
  } else if (key === 'v'){
    value = '#8900fa';
  } else if (key === 'e'){
    value = 'black';
  } else if (key === 'p'){
    value = '#ff178b';
  } else if (key === 'w'){
    value = 'white';
  
  
  } else if (key === 's'){
    weight = '2';
  } else if (key === 'm'){
    weight = '5';
  } else if (key === 'l'){
    weight = '20';
  } else if (key === 'h'){
    weight = '50';


  } else if (key === 'x'){
    stroke(random(0,255),random(0,255),random(0,255))
    star(random(0,width), random(0,height), random(1,10));
    star(random(0,width), random(0,height), random(1,10));
    star(random(0,width), random(0,height), random(1,10));
  } else {
    //line colour always starts as white
    value ="255";
  }
}
//draws a simple star shape
function star(x, y, l) {
  line(x, y, x+l, y+l);
  line(x, y, x-l, y-l);
  line(x, y, x+l, y-l);
  line(x, y, x-l, y+l);
}

