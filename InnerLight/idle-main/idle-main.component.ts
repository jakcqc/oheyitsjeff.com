import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Platform,NavController } from '@ionic/angular';
import * as math from 'mathjs';
import { Router, NavigationEnd } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-idle-main',
  templateUrl: './idle-main.component.html',
  styleUrls: ['./idle-main.component.scss'],
})
export class IdleMainComponent implements OnInit {
  height;
  width;
  constructor(platform: Platform,public navCtrl: NavController, private router: Router) { 
    platform.ready().then(() => {
      this.height = platform.height();
      this.width = platform.width();
      
      
    });
    
  }
  ionViewWillEnter(){

    let zzTop = document.getElementById('visGeo');
    zzTop.remove();
    let zm = document.getElementById('outterGeo');
    let yyTop = document.createElement('div');
    yyTop.setAttribute('id','visGeo');
    zm.appendChild(yyTop);
    this.createRect();
  }
  route(name){
    this.router.navigate([name]);
  }
  ngOnInit() {}
 
  createRect(){

      const z = 15;
      const svgWidth = this.width;
      const svgHeight = this.height;
      
      
  let x = this.width / z,
      y = this.height / z,
      newW = this.width,
      sizeScale = 15,
      hue = 0,
      hueBody = 0,
      sizeH = 15,
      sizeW = svgWidth/7,
      reset = 0,
      reset2 = 0,
      newSize = 10,
      moveSpeed = 5,
      keys = [],
      gBlur = 1.5,
      playerSize = 20;
      let total = 0;
function KeyIsPressed(code) {
    var pressed = keys[code];
    if (typeof pressed !== "undefined" && pressed) {
        return true;
    }
    return false;
  }

let svg = d3.select("#visGeo").append("svg")
      .attr("width", Math.ceil(this.width/10)*10)
      .attr("height", Math.ceil(this.height/10)*10)
      
let filter = svg.append("defs")
      .append("filter")
      .attr("id", "blur")
      .append("feGaussianBlur")
      .attr("stdDeviation", gBlur);
    svg.selectAll("circle")
      .data(d3.range(x*y))
      .enter().append("circle")
      .attr("cx",dotNewX)
      .attr("cy",dotNewY)
      .attr("r", (this.width/700))
      .attr("stroke","rgb(71, 144, 212)")
      .attr("fill","none");
    svg.append("circle")
        .attr("cx", svgWidth/2)
        .attr("cy",this.height/1.3)
        .attr("r", playerSize+10)
        .attr("stroke","rgb(71, 144, 212)")
        .attr("stroke-width","2px")
        .style("fill","black")
        .on("click",playerInformation);
    svg.append("circle")
        .attr("cx", svgWidth/2)
        .attr("cy",this.height/1.3)
        .attr("r", playerSize-5)
        .attr("stroke","rgb(71, 144, 212)")
        .attr("stroke-width","2px")
        .style("fill","none")
        
        .on("click",playerInformation);
      svg.append("circle")
        .attr("cx", svgWidth/2)
        .attr("cy",this.height/1.3)
        .attr("r", playerSize-10)
        .attr("stroke","black")
        .attr("stroke-width","1px")
        .style("fill","white")
        .on("click",playerInformation);
   
    //set goals
    const glower =  Math.floor(Math.random() * (total));
    
    
    const circArr = document.getElementsByTagName("circle");
      const playerCirc = circArr.length;
      let circle = circArr[glower];
      circle.setAttribute("r","10");
    function dotNewY(i){
      if(reset2 > svgWidth){
        sizeH = sizeH + sizeScale;
        
        reset2 = 0;
      }
      if(sizeH > svgHeight-svgHeight/7){
       d3.select(this).remove();
       total--;
      }
           reset2 = reset2 + sizeScale;
           total++;
           
           return sizeH;     
    }
    function dotNewX(i){
      if(sizeW > svgWidth-svgWidth/7){
        sizeW = svgWidth/7;
        
      }
      sizeW = sizeW + sizeScale;
      
           reset++;
          
           
           
           return sizeW;
    }
    function playerInformation(i){
     
      
    }
    window.addEventListener('keydown',function(event){
    //   let x = 1;
    
    //   while(x<4 && gBlur){
    //   keys[event.code] = true;
    //   const circArr = document.getElementsByTagName("circle");
    //   const playerCirc = circArr.length;
    //   let circle = circArr[playerCirc-x];
    //   let xer = circle.getAttribute('cx');
    //     let yer = circle.getAttribute('cy');
    //     let xNum = parseInt(xer);
    //     let yNum = parseInt(yer);
        
    //     if(gBlur > playerSize*1.5){
    //       return;
    //     }
    //   if(KeyIsPressed("KeyA")){
       
        
        
    //     xNum = xNum - 10;
    //     const xS = xNum.toString();
        
        
    //     circle.setAttribute('cx',xS);
        
        
    //   }
    // if(KeyIsPressed("KeyS")){
    //   yNum = yNum + 10;
    //     const xS = yNum.toString();
        
        
    //   circle.setAttribute('cy',xS);
    // }
    // if(KeyIsPressed("KeyD")){
    //   xNum = xNum + 10;
    //     const xS = xNum.toString();
        
        
    //     circle.setAttribute('cx',xS);
    // }
    // if(KeyIsPressed("KeyW")){
    //   yNum = yNum - 10;
    //     const xS = yNum.toString();
        
        
    //   circle.setAttribute('cy',xS);
    // } 
    // gBlur++;
    // filter.attr("stdDeviation", gBlur);
    // x++;
    // }
  });
  window.addEventListener("keyup", function (event) {
    keys[event.code] = false;
});
  }
}
