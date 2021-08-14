import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Platform,NavController } from '@ionic/angular';
import * as d3 from 'd3';

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.scss'],
})
export class WhoAreYouComponent implements OnInit {
  height;
  width;

  constructor(private router: Router,platform: Platform) { platform.ready().then(() => {
    this.height = platform.height();
    this.width = platform.width();
  }); 
  this.createView();
}

  ngOnInit() {}
  route(name){
    this.router.navigate([name]);
  }
  createView(){
  let svg = d3.select("#vis4").append("svg")
      .attr("width", Math.ceil(this.width/10)*10)
      .attr("height", Math.ceil(this.height/10)*10)
      

  }
}
