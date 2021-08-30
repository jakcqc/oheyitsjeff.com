let width;
let height;
let svg;

    document.addEventListener("DOMContentLoaded", function(){
        width = window.innerWidth;
        height = window.innerHeight;
        svg = d3.select("#vis").append("svg")
            .attr("width", Math.ceil(width/10)*10)
            .attr("height", Math.ceil(height/10)*10);
          createLotus(svg);
    });
  function goTo(page){
    window.location.href = page;
  }
  function createLotus(svg){
    const z = 50,
          radius = width/15,
          ogLineSize = "1",
          scaleSizeChange = 1;
    let hue = 0,
        hueBody = 0,
        vhTen = height*.05,
        cordXY = [45,52,47,35],
        signCheck = [1,1,1,1],
        newString,
        lineSet = 0,
        angle = 0,
        points = [],
        counter = 1,
        opacP = .2;
      
          svg.selectAll(".sphere")
          .data(d3.range(1))
          .enter().append("polyline")
          .style("stroke", "white")
          .style("stroke-width", ogLineSize)
          .attr("points", getCirclePoints) 
          .attr("fill","black")
          .attr("class","sphere")
          .attr("stroke-linecap", "round");
          // .on("mouseover", mouseover);
          
          // svg.selectAll(".cum")
          // .data(d3.range(1))
          // .enter().append("polyline")
          // .style("stroke", "white")
          // .style("stroke-width", ogLineSize)
          // .attr("points", points) 
          // .attr("fill","black")
          // .attr("class","cum")
          // .attr("stroke-linecap", "round");

          // .on("mouseover", mouseover);
          // svg.selectAll(".sphere")
          //   .data(d3.range(1))
          //   .attr("points", tester)
    function tester(){
      let count = 0;
      console.log('before points',points);
      while(count < points.length){
        if(count%5 == 0){
          points[count] = points[count] -3;
        }else{
          points[count] = points[count] + 2;
        }
        count++;
      }
      console.log('points after',points);
      return points;
      
    } 
    function getCirclePoints(){
      let x = 0;
      let y = 0;
      console.log(angle);
      while(angle <= 6.4){
        x = (radius * Math.sin(angle)) + width/5;
        y = (radius * Math.cos(angle)) + height/4;
        points.push(x);
        points.push(y);
        console.log(x,y);
        angle = angle + .1;
      }
      points = points.map(x => x * 2.5);
    return points;
    }
    function mouseover(i) {
        this.parentNode.appendChild(this);
        d3.select(this)
            .style("stroke", "white")
            .style("stroke-width",ogLineSize)
            .style("fill-opacity", opacP)
  
        .transition()
          .duration(300)
            .style("stroke-width","3vh")
            .style("stroke", function(i) {
              if(hue != 360){
                hue = hue + 1.3; 
              }else{
                hue = 0;
              }
              
              return d3.hsl(hue, 1,.60); 
              
              })
        .transition()
          .duration(300)
            .style("stroke-width", "1" + ogLineSize)
    
      }
    }
  