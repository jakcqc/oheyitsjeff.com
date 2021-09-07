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
  function createLotus(svg){
    
    const z = 50,
          ogLineSize = "2px",
          scaleSizeChange = 1;
    let hue = 0,
        hueBody = 0,
        newString,
        lineSet = 0,
        angle = 0,
        points = [],
        counter = 1,
        opacP = .2,
        countCirc = 0,
        numbCirc = 0;
      
        var filter = svg.append("defs")
          .append("filter")
            .attr("id", "blur")
          .append("feGaussianBlur")
            .attr("stdDeviation", 1);
            svg.selectAll(".sphere")
            .data(d3.range(1))
            .enter().append("polyline")
            .style("stroke", "rgb(25,210,42)")
            .style("stroke-width", ogLineSize)
            .attr("points", getCirclePoints) 
            .attr("fill","rgb(0,0,0,.7)")
            .attr("class","sphere")
            .attr("filter", "url(#blur)")

            .style("stroke-linejoin", "round");  // shape the line join
            let fart = 
              svg.selectAll(".sphere")
                        .data(d3.range(14))
                        .enter().append("polyline")
                        .style("stroke", "black")
                        .style("stroke-width", ogLineSize)
                        .style("stroke-linejoin", "round")
                        .attr("points", getCirclePoints) 
                        .attr("fill","rgb(0,0,0,.12)")
                        .attr("class","sphere");
                  // shape the line join
              
                  svg.selectAll(".cum")
                  .data(d3.range(20))
                  .enter().append("polyline")
                  .style("stroke", "black")
                  .style("stroke-width", "2px")
                  .attr("points", getCirclePoints) 
                  .attr("fill","none")
                  .attr("class","cum")
                  // .attr("filter", "url(#blur)")
                  .style("stroke-linejoin", "round");  // shape the line join
                  const allLoad = svg.selectAll('polyline');
                  console.log(allLoad);

                  let i = 0;
                    svg.selectAll('polyline')
                      .transition()
                      .duration(3000)
                        .style("stroke", "rgb(25,210,42)")
    function ran(max) {
      return Math.floor(Math.random() * max) + 5;
    }   
    function tester(points){
      let count = 0;
      while(count < points.length){
        if(count%4 == 0){
          points[count] = points[count] - 6;
        }
        else if(count%5){
          points[count] = points[count] -3;

        }else{
          points[count] = points[count] + 2;
        }
        count++;
      }
      return points;
      
    } 
    function getCirclePoints(){
      let x = 0;
      let y = 0;
      angle = 0;
      let currentPoints = [];
      radius = radius + (countCirc);
      while(angle <= 6.25){
        x = (radius * Math.sin(angle)) + width/5;
        y = (radius * Math.cos(angle)) + height/6;
        currentPoints.push(x);
        currentPoints.push(y);
        angle = angle + .05;
      }
      console.log("circ", x,y,width);

      currentPoints.push(currentPoints[0]);
      currentPoints.push(currentPoints[1]);
      
      countCirc = countCirc + .75;
      return tester(currentPoints.map(zz => zz * 2.5));
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
  