let width;
let height;
let svg;
const SIZE = 50;
document.addEventListener("DOMContentLoaded", function(){
  width = window.innerWidth;
  height = window.innerHeight;
  console.log(width,height);
});

function setup() {
  createCanvas(width, height);
  strokeWeight(2);
  noFill();
  editor = [];
  buttons = [];
  editor.push(new RegularPolygon(1/3*width, height*.8, 4, height*.6));
  design = [];
  nodes = [];
  core = new NodePolygon(editor[0].x + editor[0].size/2 - SIZE/2, height*.5 + SIZE/2, 3, SIZE);
  design.push(core);

  buttons.push(new PolyButton(editor[0].x + editor[0].size+25, height*.2, 4, height*.08, clearEditor));

  for(let i = 3; i < 9; i++){
    buttons.push(new PolyButton(editor[0].x + editor[0].size+25, height*i*.1, i, height*.03, function(){
      nodes = [];
      selectPoly(i);
    }));
  }

  core.addPoly(0,4);
  core.nodes[0].addPoly(3,5);
}
  
function draw() {
  background(255);
  buttons.forEach(item => {
    item.display();
    item.over();
  })
  editor.forEach(item => {
    item.display();
  });
  design.forEach(item => {
    item.display();
  })
  nodes.forEach(item => {
    item.display();
    item.over();
  })
}

function mousePressed() {
  buttons.forEach(item => {
    item.active = false;
    item.pressed();
  });
  nodes.forEach(item => {
    item.pressed();
  });
}
  
function createSpheres(n,s){
  console.log(n);
  for(let i = 0; i < n.npoints; i++){
    if(n.open[i]){
      let v = n.nodes[i];
      console.log(v);
      let a = TWO_PI/n.npoints*(1-i) + PI + n.angle;
      nodes.push(new PolyButton(v.x, v.y, s, SIZE/4, function(){
        n.addPoly(i, s);
        nodes = [];
      }, a));
    } else if (n.nodes[i] != null){
      createSpheres(n.nodes[i],s);
    }
  }
}
function goTo(page){
  window.location.href = page;
}
function selectPoly(sides) {
  if(core == null){
    core = new NodePolygon(editor[0].x + editor[0].size/2 - SIZE/2, height*.5 + SIZE/2, sides, SIZE);
    design.push(core);
  } else {
    createSpheres(core,sides);
  }
}

function clearEditor() {
  core = null;
  design = [];
  nodes = [];
}

class RegularPolygon {
  constructor(xpos, ypos, points, size, angle=0) {
    this.x = xpos;
    this.y = ypos;
    this.npoints = points;
    this.size = size;
    this.angle = angle;
    this.visible = true;
    this.points = [];

    let a = this.angle;
    let x = this.x;
    let y = this.y;
    for (let i = 0; i < this.npoints; i++){
      this.points.push(createVector(x,y));
      let v = p5.Vector.fromAngle(a, this.size);
      x = x+v.x;
      y = y+v.y;
      a -= TWO_PI/this.npoints;
    }
  }

  display() {
    push();
    beginShape();
    if(this.visible){
      this.points.forEach(v => {
        vertex(v.x,v.y);
      });
    }  
    endShape(CLOSE);
    pop();
  }
}



class PolyButton extends RegularPolygon {
  constructor(xpos, ypos, points, size, click, angle=0) {
    super(xpos, ypos, points, size, angle);
    this.click = click;
    this.active = false;
  }

  display() {
    if(this.rollover){
      fill(200);
    }
    if(this.active){
      fill(150);
    }
    super.display();
    noFill();
  }

  over() {
    let xmin = width;
    let xmax = 0;
    let ymin = height;
    let ymax = 0;
    this.points.forEach(v => {
      if(v.x < xmin) xmin = v.x;
      if(v.x > xmax) xmax = v.x;
      if(v.y < ymin) ymin = v.y;
      if(v.y > ymax) ymax = v.y;
    });
    if (mouseX > xmin && mouseX < xmax && mouseY < ymax && mouseY > ymin){
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  pressed() {
    if(this.rollover){
      this.active = true;
      this.click();
    }
  }
}

class NodePolygon extends RegularPolygon {
  constructor(xpos, ypos, points, size, angle=0, side=-1) {
    super(xpos, ypos, points, size, angle);
    this.nodes = [...this.points];
    this.open = []
    for(let i = 0; i < this.npoints; i++){
      this.open[i] = true;
    }
    if(side != -1) {
      this.nodes[side] = null;
      this.open[side] = false;
    }
  }

  addPoly(node, sides) {
    if(this.open[node]){
      let v = this.nodes[node];
      let a = TWO_PI/this.npoints*(1-node) + PI + this.angle;
      let np = new NodePolygon(v.x, v.y, sides, SIZE, a, 1);
      this.nodes[node] = np;
      this.open[node] = false;
      design.push(np);
    }
  }
}
