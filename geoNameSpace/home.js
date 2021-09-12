let width;
let height;
let svg;
let radius;
    document.addEventListener("DOMContentLoaded", function(){
        width = window.innerWidth;
        height = window.innerHeight;
        if(width < 600){
          radius = 70;
        }else{
          radius = 130;
        }
        
        svg = d3.select("#vis").append("svg")
            .attr("width", Math.ceil(width/10)*10)
            .attr("height", Math.ceil(height/10)*10);
          createLotus(svg);
    });
  function goTo(page){
    window.location.href = page;
  }
  
  