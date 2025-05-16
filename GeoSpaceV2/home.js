let width;
let height;
let svg;
let radius = 50;
let x1 = 0;
let y1 = 0;
let sliderX = [];
let sliderY = [];
let currentSlide = 0;
let circleAmount = 350;
let circleNumb = [];
let resetX;
let resetY;
let slideAmount = .5;
let slideIter = .01;
//page is clicked on
saves();
console.log(localStorage.getItem('hasSpace'));
    document.addEventListener("DOMContentLoaded", function(){
        width = window.innerWidth;
        height = window.innerHeight;
        const ps = document.getElementsByTagName("p");
        let counter = 10;
        let scale = 120;
        let scaleP = "-10%";
        if(width < 1000){
          scale = 60;
          scaleP = "-5%";
          circleAmount = 230;
        }
        if(width < 450){
          scale = 35;
          circleAmount= 130;
          scaleP = "-5%";
        }
        ps.forEach(element => {
          element.style.left = ""+counter+"px";
          element.style.top = scaleP;
          counter = counter + scale;
        });
        createSlider();
    });
  function goTo(page){
    localStorage.setItem('hasSpace', 'true');
    window.location.href = page;
  }
  function saves(){
    if(localStorage.getItem('hasSpace') === 'true'){
      console.log(localStorage.getItem('hasSpace'));
      //goTo('space/space.html');
    }else{
      localStorage.setItem('hasSpace', 'false');
      localStorage.setItem('startingEvent', 'false');
      localStorage.setItem('tutorial', 'false');
      localStorage.setItem('act1', '0');
      localStorage.setItem('freeplay', 'false');
    }
  }
  function setup() {
    createCanvas(width, height);
  }
  function draw() {
    //background(102);
    if (mouseIsPressed) {
      background(255);
      circle(width/2,height/2,radius);
      fill(255);
      radius+=45;
      if(radius>width+300){
        let audio = new Audio('../assets/Bluebird.mp3');
        audio.play();
        goTo("../GeoSpace-Idle/space/space.html");
      }
    } else {
      background(0);
      
    }
    let points = [0,10,10,0];
    
    
    for(let x = 0; x < 220; x++){
      line(points[0],points[1],points[2],points[3]);
      stroke(100);
      points[1] += 10;
      points[2] += 10;
    }
    for (let zz = 0; zz < circleAmount; zz++) {
      circle(sliderX[zz],sliderY[zz],8);
       sliderX[zz] += slideAmount;
       sliderY[zz] -= slideAmount;
       slideAmount += slideIter;

      if(zz%15 ===1){
        slideIter = slideIter*-1;
      }
      
      stroke(255);    
      fill("none");
    }
    slideAmount = .1;
    currentSlide = random(circleNumb);
    stroke(50);
  }

  function createSlider(){
    for (let xx = 0; xx < circleAmount; xx++) {
      sliderX.push(x1);
      sliderY.push(y1);
      circleNumb.push(xx);
      if(xx==circleAmount/2 ){
        x1 = width/2;
        y1 = 0;
      }
       x1+=10;
       y1+=10;
    }
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
  
  