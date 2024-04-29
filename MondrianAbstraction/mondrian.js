
let width, height, w, h, z, hue, x, y;
    document.addEventListener("DOMContentLoaded", function(){
        width = window.innerWidth;
        height = window.innerHeight;
        //subscriber();
        createAbstraction();
        
      });
      function goTo(page){
        window.location.href = page;
      }
function createAbstraction(){
  
        h = height;
        w = width;
        z = Math.floor(calculateSquareSize(h,w)/5)*5 +10;
        x = w / z;
        y = h / z;
        hue = 0;
        let hueBody = 0;
        vhTen = 1080*.05;

    let svg = d3.select("#vis").append("svg")
        .attr("width", Math.ceil(w/10)*10)
        .attr("height", Math.ceil(h/10)*10);
       
    function calculateSquareSize(h,w){
        return(Math.sqrt(w*h/860));
    }
    console.log(x,y);
    svg.selectAll("rect")
        .data(d3.range(x * y))
        .enter().append("rect")
        .attr("x", translateX)
        .attr("y", translateY)
        .attr("width", z)
        .attr("height", z)
        .attr("fill","white")
        .attr("stroke","black")
        .attr("stroke-width",".05vh")
        //.on("mouseover", mouseover)
        .on("pointermove", toucher);

    
    const rectsAll = document.getElementsByTagName('rect');
    for(let i = 0;i<rectsAll.length;i++){
      // rectsAll[i].ontouchmove = moveTouch
      rectsAll[i]
        .addEventListener("ontouchmove", function(event){
        
  console.log("moving");
  //this.parentNode.appendChild(this);
    d3.select(this)
        .transition()
          .duration(600)
          .attr("x", "0")
          .attr("y", "0")
            .attr("transform", "translate("+width*.5+","+height*.5+")scale(1)rotate(180)")
            .style("fill-opacity",  .1)
            .style("stroke","black")
            .style("stroke-width"," .1px")
        .transition()
          .delay(1200)
          .attr("x","0")
          .attr("y","0")
          .attr("transform", "translate(" + (Math.floor(Math.random()*(width-(2*z)))+0)+ "," + (Math.floor(Math.random()*(height-(2*z)))+0) + ")scale("+(Math.floor(Math.random()*2.6) + 1)+")")
          .style("stroke-width"," .09vh")
          .style("stroke", "black")
          .style("fill-opacity", .45)
          .style("fill", function(i) {
            if(hue != 360){
              hue++; 
            }else{
              hue = 0;
            }
            return d3.hsl(hue, 1,.60); 
            
            })
    });
  }
    function translateX(i){
            return Math.floor((i % x) * z)
    }
    function translateY(i){
          return (Math.floor(i / x) * z)
    }
    function translate(i) {
      return "translate("+(i % x) * z+","+Math.floor(i / x) * z+")";
    }
    function toucher(i) {
      console.log("mouse");
      this.parentNode.appendChild(this);
      d3.select(this)
        .transition()
          .duration(600)
          .attr("x", "0")
          .attr("y", "0")
            .attr("transform", "translate("+w*.5+","+h*.5+")scale(1)rotate(180)")
            .style("fill-opacity",  .1)
            .style("stroke","black")
            .style("stroke-width"," .1px")
        .transition()
          .delay(1200)
          .attr("x","0")
          .attr("y","0")
          .attr("transform", "translate(" + (Math.floor(Math.random()*(w-(2*z)))+0)+ "," + (Math.floor(Math.random()*(h-(2*z)))+0) + ")scale("+(Math.floor(Math.random()*2.6) + 1)+")")
          .style("stroke-width"," .09vh")
          .style("stroke", "black")
          .style("fill-opacity", .45)
          .style("fill", function(i) {
            if(hue != 360){
              hue++; 
            }else{
              hue = 0;
            }
            hue = hue;
            return d3.hsl(hue, 1,.60); 
            
            })
    }
  
  function subscriber(){
    const allRects = document.getElementsByTagName('rect');
    for(let i = 0; i<allRects.length;i++){
      allRects[i].ontouchmove = moveTouch;
    }
  }
  // function moveThisRect(rect){
  //   d3.select(this)
  //       .transition()
  //         .duration(600)
  //         .attr("x", "0")
  //         .attr("y", "0")
  //           .attr("transform", "translate("+width*.5+","+height*.5+")scale(1)rotate(180)")
  //           .style("fill-opacity",  .1)
  //           .style("stroke","black")
  //           .style("stroke-width"," .1px")
  //       .transition()
  //         .delay(1200)
  //         .attr("x","0")
  //         .attr("y","0")
  //         .attr("transform", "translate(" + (Math.floor(Math.random()*(width-(2*z)))+0)+ "," + (Math.floor(Math.random()*(height-(2*z)))+0) + ")scale("+(Math.floor(Math.random()*2.6) + 1)+")")
  //         .style("stroke-width"," .09vh")
  //         .style("stroke", "black")
  //         .style("fill-opacity", .45)
  //         .style("fill", function(i) {
  //           if(hue != 360){
  //             hue++; 
  //           }else{
  //             hue = 0;
  //           }
  //           return d3.hsl(hue, 1,.60); 
            
  //           })
  // }
}
function moveTouch(rect) {
  console.log("moving");
 //this.parentNode.appendChild(this);
   d3.select(this)
       .transition()
         .duration(600)
         .attr("x", "0")
         .attr("y", "0")
           .attr("transform", "translate("+width*.5+","+height*.5+")scale(1)rotate(180)")
           .style("fill-opacity",  .1)
           .style("stroke","black")
           .style("stroke-width"," .1px")
       .transition()
         .delay(1200)
         .attr("x","0")
         .attr("y","0")
         .attr("transform", "translate(" + (Math.floor(Math.random()*(width-(2*z)))+0)+ "," + (Math.floor(Math.random()*(height-(2*z)))+0) + ")scale("+(Math.floor(Math.random()*2.6) + 1)+")")
         .style("stroke-width"," .09vh")
         .style("stroke", "black")
         .style("fill-opacity", .45)
         .style("fill", function(i) {
           if(hue != 360){
             hue++; 
           }else{
             hue = 0;
           }
           return d3.hsl(hue, 1,.60); 
           
           })

 }
