let width;
let height;
document.addEventListener("DOMContentLoaded", function () {
  width = window.innerWidth;
  height = window.height;
  createAnimation();
  // gradientAnimation();
});
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
    image: "assets/Images/mond4D.png",
    description: "Ever wonder what A mondrian would like look like in 3D? How about 4D? 5...?.",
    link: "/MondrianAbstractionV2/Viewer3D/"
  },
  {
    title: "Mondrian Abstraction",
    image: "assets/Images/MondrianAbstraction.png",
    description: "A fun take on the popular Mondrian Composition using D3.js.",
    link: "/MondrianAbstraction/"
  },
  {
    title: "InnerLight",
    image: "assets/Images/InnerLight.png",
    description: "Small shape-based visualizations that use color changes and spatial differences.",
    link: "/InnerLight/"
  },
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




function createAnimation() {
  const z = 10,
    x = width / z,
    y = height / z;
  let hue = 0,
    hueBody = 0,
    vhTen = height * .05;

  let yIncrease = 50;
  let yCheck = 50;
  let yIncreaseRect = 10;
  let yCheckRect = 10;
  let rectHeight = 40;
  let rectWidth = 40;
  let animationXChange = 0;
  let animationXChangeRect = 0;
  let sizeRect = -(rectWidth * 3);
  let size = 10;
  let ogLineSize = ".3vh";
  let svg = d3.select("#visHome").append("svg")
    .attr("width", Math.ceil(width / 10) * 10)
    .attr("height", 150);
  // svg.selectAll("rect")
  //   .data(d3.range(30))
  //   .enter().append("rect")
  //   .attr("x",xIncreaseRect)
  //   .attr("y", animationYIncreaseRect)
  //   .attr("height",rectHeight*2)
  //   .attr("width",rectWidth*2)
  //   .attr("fill","none")
  //   .attr("stroke","white")
  //   .style("stroke-width","6px");

  //.on("mouseover", rectOver);         
  svg.selectAll("circle")
    .data(d3.range(8))
    .enter().append("circle")
    .attr("cx", xIncrease)
    .attr("cy", animationYIncrease)
    .attr("r", 20)
    .attr("fill", "white")
    .style("fill-opacity", ".9")
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .on("mouseover", mouseover);
  let load = d3.transition()
    .duration(300)
    .ease(d3.easeLinear);




  function animationYIncrease(i) {
    if (yIncrease === yCheck) {
      yIncrease = yIncrease + rectHeight;
    }
    else {
      yIncrease = yIncrease - rectHeight;
    }

    return yIncrease;
  }
  function xIncrease(i) {

    size = size + 40;
    return size;
  }
  function animationYIncreaseRect(i) {
    if (yIncreaseRect === yCheckRect) {
      yIncreaseRect = yIncreaseRect + rectHeight;
    }
    else {
      yIncreaseRect = yIncreaseRect - rectHeight;
    }

    return yIncreaseRect;
  }
  function xIncreaseRect(i) {
    if (sizeRect > width) {
      sizeRect = -(rectWidth);
    }
    sizeRect = sizeRect + rectWidth * 2;

    return sizeRect;
  }
  function rectOver(i) {
    this.parentNode.appendChild(this);

    d3.select(this)
      .style("stroke", "white")
      .style("stroke-width", ogLineSize)
      .transition()
      .duration(300)
      .style("stroke-width", "1px")
      .style("stroke", function (i) {
        if (hue != 360) {
          hue = hue + 10;
        } else {
          hue = 0;
        }

        return d3.hsl(hue, 1, .60);

      })
      .transition()
      .duration(400)
      .style("stroke", "black")
      .style("stroke-width", "5px")
      .attr("transform", "translate(" + 4 * rectWidth + "," + 0 + ")scale(1)")

  }
  function mouseover(i) {
    this.parentNode.appendChild(this);

    d3.select(this)
      .style("stroke", "white")
      .style("stroke-width", ogLineSize)
      .style("fill-opacity", ".65")

      .transition()
      .duration(300)
      .style("stroke-width", "3vh")
      .style("fill", function (i) {
        if (hue != 360) {
          hue = hue + 10;
        } else {
          hue = 0;
        }

        return d3.hsl(hue, 1, .60);

      })
      .transition()
      .duration(300)
      .style("stroke", "black")
      .style("stroke-width", "5px")

  }
}

document.addEventListener("DOMContentLoaded", function() {
  const backgroundDiv = document.getElementById('background');
  projects.forEach(project => {
      const projectHTML = `
          <div class="outter">
              <div class="apps">
                  <div class="card-header">${project.title}</div>
                  <div class="card-content" onclick="goTo('${project.link}')">
                      <img class="thumb" src="${project.image}" alt="${project.title}">
                  </div>
                  <div class="overlay">
                      <div class="styleInfo"><span class="tab1"></span>${project.description}</div>
                  </div>
              </div>
          </div>
      `;
      backgroundDiv.innerHTML += projectHTML;
  });
});