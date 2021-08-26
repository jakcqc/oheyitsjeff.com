import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Platform,NavController } from '@ionic/angular';
import * as math from 'mathjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-kandinsky-square',
  templateUrl: './kandinsky.component.html',
  styleUrls: ['./kandinsky.component.scss'],
})
export class KandinskyComponent implements OnInit {
  height;
  width;

  constructor(platform: Platform,public navCtrl: NavController, private router: Router) { 
    platform.ready().then(() => {
      this.height = platform.height();
      this.width = platform.width();
      
      
    });
    
  }
  ionViewWillEnter(){

    let x = document.getElementById('visKan');
    x.remove();
    let z = document.getElementById('outterKan');
    let y = document.createElement('div');
    y.setAttribute('id','visKan');
    z.appendChild(y);
    this.createCircle();
  }
  route(name){
    this.router.navigate([name]);
  }
  ngOnInit() {}
  createCircle(){
  const z = 50,
      x = this.width / z,
      y = this.height / z;
    let hue = 0,
        min = 5,
        max = 150;

let svg = d3.select("#visKan").append("svg")
      .attr("width", Math.ceil(this.width/10)*10)
      .attr("height", Math.ceil(this.height/10)*10)
      .on("click", canvasClick);
  function getRandom(min, max) {
      let x =  Math.floor(Math.random() * (max - min) + min);     
      
      
      return x; 
    }
  
  function drawCircle(x, y, size) {
          svg.append("circle")
              .attr('class', 'click-circle')
              .attr("cx", x)
              .attr("cy", y)
              .attr("r", size)
              .style("fill",function(i) {
                if(hue != 360){
                  hue = hue + 8; 
                }else{
                  hue = 0;
                }
                
                return d3.hsl(hue, 1,.60); 
                })
                .style("stroke","black")
              .style("stroke-width",""+getRandom(1,5)+"px")
              .style("stroke-opacity",(getRandom(1,7)/10).toString())
              .style("fill-opacity",(getRandom(3,7)/10).toString());
      }
      svg.on('click', (event) => {
        let coords = d3.pointer(event);
          
          drawCircle(coords[0], coords[1], getRandom(min,max));
      })
  function randomColorCircle(){

  }
  function canvasClick(i){

    d3.select(this)
      .append("circle")
        .attr("cx","1000")
        .attr("cy","500")
        .style("fill","white")      
  }
  function mouseover(i) {
    this.parentNode.appendChild(this);
        
      
      // .remove();
      
  }
  }
}
