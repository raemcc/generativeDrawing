
function setup() {
	createCanvas(500, 500);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  //draw squares from centre
  
  stroke(150);
  strokeWeight(0.5);
  	
}

function draw() {
  let c = 250;
  //colour starts as slightly darker than white at the edge of the square
  let a = 0;
  for (let x = 0; x < width; x = x + 25) 
    //defines x coord
  //for(define initial; define condition to be met; what to do if its not met after next iteration)
  {
    for ( let y = 0; y < height; y =y+25){
      //defines y coord

          for (let z = 45; z>= 5; z = z -5){
            //defines size

          push();

          translate(x+25,y+25);
          //moves origin
          fill(c);
          //fills with current c value

          square(x,y, z);
          //draws square

          if( c>25){
            c = c-30}else{
              c=250
            }
            //c gets darker as squares gets smaller until resets
          pop();  
         
        }
    }
  }
}

