let width;
let height;
let bubbleRadius = 60;
let textRadius = 28;
let svg;
let initStrength = 0.02;
let dragSimStrength = 0.09;

function createD3Bubbles(svg) {
 

  // Patterns for image fill
  svg.append("defs")
    .selectAll("pattern")
    .data(projects)
    .enter()
    .append("pattern")
    .attr("id", d => `imgpat-${d.title.replace(/\s/g, "")}`)
    .attr("patternUnits", "objectBoundingBox")
    .attr("width", 1)
    .attr("height", 1)
    .append("image")
    .attr("xlink:href", d => d.image)
    .attr("preserveAspectRatio", "xMidYMid slice")
    .attr("width", bubbleRadius * 2)
    .attr("height", bubbleRadius * 2)
    .attr("x", 0)
    .attr("y", 0);

  // Initial data
  nodes = projects.map((d, i) => ({
    ...d,
    r: bubbleRadius,
    x: Math.random() * (width - bubbleRadius * 2) + bubbleRadius,
    y: Math.random() * (height - bubbleRadius * 2) + bubbleRadius
  }));
  
// now add drag behavior to your bubbles:
const dragBehavior = d3.drag()
.on("start", (event, d) => {
  // if the simulation is “sleeping,” wake it up
  if (!event.active) simulation.alphaTarget(0.3).restart();
  // fix the node’s position to the pointer
  d.fx = d.x;
  d.fy = d.y;
})
.on("drag", (event, d) => {
  // move the fixed position with the pointer
  d.fx = event.x;
  d.fy = event.y;
})
.on("end", (event, d) => {
  // release the node so simulation can re-position it
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
});
  // Create g for each node
   node = svg.selectAll("g.bubble")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "bubble")
    .style("cursor", "pointer")
    .call(dragBehavior);

  // Draw the bubbles
  node.append("circle")
    .attr("r", d => d.r)
    .attr("fill", d => `url(#imgpat-${d.title.replace(/\s/g, "")})`)
    .attr("stroke", "#000000")
    .attr("stroke-width", '4px')
    .attr("filter", "drop-shadow(0 1px 10px #f8b6f1)");
    node.append("circle")
      .attr("r", d => d.r-5)
      .attr("fill", d => `none`)
      .attr("stroke", "#ffffff")
      .attr("stroke-width", '3px')
      .attr("filter", "drop-shadow(0 4px 16px #8883)");

    node.each(function(d, i) {
      const g = d3.select(this);
    
      // Create a unique path for each bubble
      const arcId = `bubbleArc-${i}`;
      const r = d.r + 12; // arc radius, slightly larger than bubble for outside
    
      // Add path for text arc in defs
      svg.append("defs")
        .append("path")
        .attr("id", arcId)
        .attr("d", describeArc(0, 0, r, 90, 270)); // semi-circle on top
   

      // Draw white strip for the arc
      g.append("path")
        .attr("d", describeArc(0, 0, r, -90, 270))
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-opacity", 0.45)  // also make it a bit translucent
        .attr("stroke-width", textRadius) // thickness of the white strip
        .attr("filter", "drop-shadow(1 2px 4px #aaa8)"); // optional shadow
    
      // Add the text along the arc
      g.append("text")
        .attr("dy", 6) // vertical offset, adjust as needed
        .append("textPath")
        .style("user-select", "none")          // standard
  .style("-webkit-user-select", "none")  // Safari
  .style("-moz-user-select", "none")     // Firefox
  .style("-ms-user-select", "none")      // IE10+
        .attr("xlink:href", `#${arcId}`)
        .attr("startOffset", "50%") // center the text
        .style("text-anchor", "middle")
        .style("font-size", "1.0rem")
        .style("fill", "#333")
        .style("font-family", "inherit")
        .text(d.title);
    });
    function ticked() {
  node.attr("transform", d => {
    // clamp inside
    d.x = Math.max(d.r+textRadius-10, Math.min(width  - d.r-textRadius+10, d.x));
    d.y = Math.max(d.r+textRadius-10, Math.min(height - d.r-textRadius+10, d.y));
    return `translate(${d.x},${d.y})`;
  });
}
    
    // after you’ve set width, height, initStrength, dragSimStrength
const centerX = width  / 2;
const centerY = (height - height*0.2) / 2;

// a little helper to know when a node is off-screen (horizontally)
function isOutX(d) {
  return d.x < d.r || d.x > width - d.r;
}

const forceX = d3.forceX(centerX)
  .strength(d => isOutX(d) ? 0 : initStrength);

const forceY = d3.forceY(centerY)
  .strength(d => isOutX(d) ? dragSimStrength * 4 : initStrength);
// note: I multiplied dragSimStrength by 4 here to make the vertical “slide” more pronounced
// you can tweak that multiplier to taste

const simulation = d3.forceSimulation(nodes)
  .force("collide", d3.forceCollide().radius(d => d.r + textRadius-3).iterations(3))
  .force("x", forceX)
  .force("y", forceY)
  .on("tick", ticked);


  // Title
  // node.append("text")
  //   .attr("class", "bubble-title")
  //   .attr("y", d => d.r + textRadius)
  //   .attr("text-anchor", "middle")
  //   .attr("fill", "#333")
  //   .style("font-size", "1.1rem")
  //   .text(d => d.title);

  // Description overlay (hidden by default)
  // node.append("circle")
  //   .attr("class", "desc-fo")
  //   .attr("x", d => -d.r)
  //   .attr("y", d => -d.r)
  //   .attr("width", d => d.r * 2)
  //   .attr("height", d => d.r * 2)
  //   //.style("pointer-events", "none")
  //   //.style("display", "block")
  //   //.append("xhtml:div")
  //   .attr("class", "desc")
  //   .style("width", "100%")
  //   .style("height", "100%")
  //   .style("display", "flex")
  //   .style("align-items", "center")
  //   .style("justify-content", "center")
  //   .style("background", "rgba(255, 255, 255, 0.78)")
  //   .style("border-radius", "50%")
  //   .style("padding", "20px")
  //   .style("font-size", "1rem")
  //   .style("text-align", "center")
  //   .html(d => d.description);


  // On click, go to the link
  node.on("click", function(event, d) {
    window.location.href = d.link;
  });
}

// Returns an SVG arc string, center at (cx, cy), radius, from startAngle to endAngle (in degrees)
function describeArc(cx, cy, r, startAngle, endAngle){
  var start = polarToCartesian(cx, cy, r, endAngle);
  var end = polarToCartesian(cx, cy, r, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  var d = [
      "M", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
  return d;
}

function polarToCartesian(cx, cy, r, angleInDegrees) {
var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
return {
  x: cx + (r * Math.cos(angleInRadians)),
  y: cy + (r * Math.sin(angleInRadians))
};
}

function goTo(page) {
  window.location.href = page;
}
function gradientAnimation() {
  const blurb = document.getElementsByTagName('body');
  let inc = 1;
  setInterval(function () {

    blurb[0].style.background = "linear-gradient(110deg, rgba(248, 182, 241," + inc + ") , rgba(255,255,255,1) 20.71%)";
    inc = inc - .05;
    
  }, 400);
  console.log(blurb);
}
const projects = [
  {
    title: "Mondrian Abstraction 3D",
    image: "assets/Images/monder3D.jpg",
    description: "Ever wonder what A Mondrian Composition would like look like in 3D? How about 4D? 5...?",
    link: "/MondrianAbstractionV2/Viewer3D/"
  },
  {
    title: "Particle_Explorer",
    image: "assets/Images/stars.jpg",
    description: "Watch Life emerge or fade...You decide, inspired by hunar4321.",
    link: "/ParticleExplorer/index.html"
  },
  {
    title: "InnerLight",
    image: "assets/Images/idleGame.png",
    description: "Small shape-based visualizations that use color changes and spatial differences.",
    link: "/InnerLight/"
  },
  {
    title: "Mondrian Abstraction",
    image: "assets/Images/monder.jpg",
    description: "A fun take on the popular Mondrian Composition.",
    link: "/MondrianAbstraction/"
  },
  {
    title: "Energy_Explorer",
    image: "assets/Images/eng.jpg",
    description: "Observe the energy produced through Newtonian particle movement.",
    link: "/EnergyExplorer/index.html"
  },
   {
    title: "GeoSpace",
    image: "assets/Images/geoLife.jpg",
    description: "Create AI life that consumes the universe...",
    link: "/GeoSpace/index.html"
  },
  {
    title: "Discrete_Mandelbrot",
    image: "assets/Images/InnerLight.png",
    description: "discrete fractal yall",
    link: "/Generic/index.html"
  },
  {
    title: "GameOfLife??",
    image: "assets/Images/gameOfLife0.webp",
    description: "Create AI life that consumes the universe...",
    link: "/GameOfLife_aug/index.html"
  }
  
  
  // {
  //   title: "GeoNameSpace",
  //   image: "assets/Images/idleGame.png",
  //   description: "What are Cubes?",
  //   link: "/GeoSpaceV2/shapes/shapeTesting.html"
  // },
  
  // {
  //   title: "Cube",
  //   image: "assets/Images/truchetTiles.PNG",
  //   description: "A challenging game where players try to outsmart the machine.",
  //   link: "/cubeGame/"
  // },
  // {
  //   title: "StreamLet",
  //   image: "assets/Images/blobs.PNG",
  //   description: "An Ionic/Angular app for a streaming service that consolidates other services into one platform.",
  //   link: "/StreamLet/www/"
  // }
];
// function createProjectCards()
// {
//   const backgroundDiv = document.getElementById('background');
//   projects.forEach(project => {
//       const projectHTML = `
//           <div class="outter">
//               <div class="apps">
//                   <div class="card-header">${project.title}</div>
//                   <div class="card-content" onclick="goTo('${project.link}')">
//                       <img class="thumb" src="${project.image}" alt="${project.title}">
//                   </div>
//                   <div class="overlay">
//                       <div class="styleInfo"><span class="tab1"></span>${project.description}</div>
//                   </div>
//               </div>
//           </div>
//       `;
//       backgroundDiv.innerHTML += projectHTML;
//   });
// }
document.addEventListener("DOMContentLoaded", function() {
  width = window.innerWidth;
  height = window.innerHeight - 68;
  bubbleRadius = Math.min(window.innerWidth * 0.15, 50);
   // Clear previous svg if any
   d3.select("#d3-container").selectAll("*").remove();

   const svg = d3.select("#d3-container")
     .append("svg")
     .attr("width", width)
     .attr("height", height);
  //createProjectCards();
  //createStars(svg);
  createD3Bubbles(svg);

});