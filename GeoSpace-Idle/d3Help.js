
const path = d3.path();

function cubeMaker(){

    const svg = d3.select('body').append('svg')
    .attr('width', 300)
    .attr('height', 300)
    .style('border', '1px solid black');

const cubeData = [
    { transform: 'translate(100, 100) rotate(0) skewX(0) skewY(0)' },   // Front
    { transform: 'translate(100, 100) rotate(180) translate(200, 0)' }, // Back
    { transform: 'translate(100, 100) rotate(90) skewY(-45) scale(1,0.5)' }, // Top
    { transform: 'translate(100, 100) rotate(270) skewY(45) scale(1,0.5)' }  // Bottom
    // Add other faces as needed
];
    svg.selectAll('.face')
    .data(cubeData)
    .enter().append('rect')
    .attr('class', 'face')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 100)
    .attr('height', 100)
    .style('fill', 'rgba(255, 255, 255, 0.8)')
    .style('stroke', '#ccc')
    .attr('transform', d => d.transform);
}
function createPoly(sideLength,numSides) {
    const points = [];
    for (let i = 0; i < numSides; i++) {
        const angle = Math.PI / (numSides/2) * i;
        const x = sideLength * Math.cos(angle);
        const y = sideLength * Math.sin(angle);
        points.push([x, y]);
    }
    return points;
}
function tilePolygon(svg, width, height, vertices) {
    // Calculate the bounding box of the polygon
    let minX = Math.min(...vertices.map(v => v[0])),
        maxX = Math.max(...vertices.map(v => v[0])),
        minY = Math.min(...vertices.map(v => v[1])),
        maxY = Math.max(...vertices.map(v => v[1]));

    const boxWidth = maxX - minX;
    const boxHeight = maxY - minY;

    // Create a pattern element
    const pattern = svg.append("defs")
        .append("pattern")
            .attr("id", "polygonPattern")
            .attr("patternUnits", "userSpaceOnUse")
            .attr("width", boxWidth)
            .attr("height", boxHeight);

    // Add the polygon to the pattern
    pattern.append("polygon")
        .attr("points", vertices.map(d => [d[0] - minX, d[1] - minY].join(",")).join(" "))
        .style("fill", "none")
        .style("stroke", "black");

    // Use the pattern to fill a rectangle covering the SVG
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "url(#polygonPattern)");
}

function createPolygonGrid(svg, width, height, vertices) {
    // Calculate pattern bounds
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    vertices.forEach(([x, y]) => {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
    });

    const repeatX = maxX - minX;
    const repeatY = maxY - minY;

    const pattern = svg.append("defs")
      .append("pattern")
        .attr("id", "polygonPattern")
        .attr("width", repeatX)
        .attr("height", repeatY)
        .attr("patternUnits", "userSpaceOnUse");

    pattern.append("polygon")
      .attr("points", vertices.map(d => d.join(",")).join(" "))
      .style("fill", "lavender")
      .style("stroke", "purple");

    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "url(#polygonPattern)");
}

  function createRectangleGrid(svg, width, height, rectWidth, rectHeight) {
    const numRows = Math.ceil(height / rectHeight);
    const numCols = Math.ceil(width / rectWidth);
  
    const grid = svg.selectAll(".rectangle")
      .data(d3.range(numRows * numCols))
      .enter().append("rect")
        .attr("class", "rectangle")
        .attr("width", rectWidth)
        .attr("height", rectHeight)
        .attr("x", (d, i) => (i % numCols) * rectWidth)
        .attr("y", (d, i) => Math.floor(i / numCols) * rectHeight)
        .style("fill", "none")
        .style("stroke", "black");
  }
  
  function createTriangleGrid(svg, width, height, triangleBase, triangleHeight) {
    const numRows = Math.ceil(height / triangleHeight);
    const numCols = Math.ceil(width / (triangleBase / 2));
    const triangles = [];
  
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        let points = [
          [x * triangleBase / 2, y * triangleHeight],
          [(x + 1) * triangleBase / 2, (y + 1) * triangleHeight],
          [(x - 1) * triangleBase / 2, (y + 1) * triangleHeight]
        ];
        if ((x + y) % 2 === 0) points.reverse();
        triangles.push(points);
      }
    }
  
    svg.selectAll(".triangle")
      .data(triangles)
      .enter().append("polygon")
        .attr("class", "triangle")
        .attr("points", d => d.map(p => p.join(",")).join(" "))
        .style("fill", "none")
        .style("stroke", "black");
  }
  
function animateCircle(selection, initialRadius, hoveredRadius) {
    selection.on("mouseover", function(event, d) {
        d3.select(this).transition()
            .duration(300)
            .attr("r", hoveredRadius);
    })
    .on("mouseout", function(event, d) {
        d3.select(this).transition()
            .duration(300)
            .attr("r", initialRadius);
    });
}
function tooltipEffect(selection, labelAccessor) {
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text("a simple tooltip");

    selection.on("mouseover", function(event, d) {
        tooltip.text(labelAccessor(d));
        tooltip.style("visibility", "visible");
    })
    .on("mousemove", function(event, d) {
        tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
    })
    .on("mouseout", function() {
        tooltip.style("visibility", "hidden");
    });
}

function enableZoom(svgElement) {
    const zoom = d3.zoom()
        .scaleExtent([0.5, 10])
        .on("zoom", (event) => {
            svgElement.attr("transform", event.transform);
        });

    svgElement.call(zoom);
}
function rotate3DObject(object, speed) {
    d3.timer(function(elapsed) {
        object.rotation.x = elapsed * speed;
        object.rotation.y = elapsed * speed;
        renderer.render(scene, camera);
    });
}
function project2Dto3D(selection, threeObject, colorScale) {
    selection.on("mouseover", function(event, d) {
        // Assuming 'd' contains coordinates or identifiers matching 3D objects
        const color = colorScale(d.value);
        threeObject.material.color.set(color);  // Change color based on data
        renderer.render(scene, camera);
    });
}

