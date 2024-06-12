function setup() {
    createCanvas(400, 400);
    background ("black")
  }
  
  function draw() {
  stroke("pink");
  fill("rgb(99,40,99)");
    
    if (mouseIsPressed){
      rect(mouseX,mouseY,20,35);
    }
    
  }
  