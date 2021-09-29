let width;
let height;
let svg;
let radius;
    document.addEventListener("DOMContentLoaded", function(){
        width = window.innerWidth;

        height = window.innerHeight;
        console.log(width,height);
        
    });
  function goTo(page){
    window.location.href = page;
  }
  function setup() {
    createCanvas(width, height);
  }
  
  function draw() {
    //background(102);
    
    if (mouseIsPressed) {
      background(0);
    } else {
      background(255);
    }
    let currentX = .06;
    let currentY = .5;
    let currentP = 2;
    let currentR = 30;
    for(let x = 0; x < 20; x++){
      push();
      translate(width * currentX, height * currentY);
      rotate(frameCount / -200.0);
      polygon(0, 0, currentR, currentP);
      pop();
      currentP = currentP + 1;
      // currentR = currentR + 5;
      currentX = currentX + .05;

    }
    push();
    translate(width * 0.0, height * 0.5);
    //rotate(frameCount / 200.0);
    polygon(0, 0, 30, 1);
    pop();
  
    // push();
    // translate(width * 0.5, height * 0.5);
    // rotate(frameCount / 50.0);
    // polygon(0, 0, 80, 20);
    // pop();
  
    // push();
    // translate(width * 0.8, height * 0.5);
    // rotate(frameCount / -100.0);
    // polygon(0, 0, 70, 7);
    // pop();
  }
  
  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  
  