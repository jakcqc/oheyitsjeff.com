
document.addEventListener('DOMContentLoaded', function() {
  const gridSize = 30; // More manageable grid size
  const width = 720;   
  const height = 720;  
  const cellSize = width / gridSize; 

  // Generate random maze data, using 0 for path and 1 for wall
  const data = Array.from({length: gridSize}, () => 
      Array.from({length: gridSize}, () => Math.floor(Math.random() * 2))
  );

  const svg = d3.select("#maze")
      .attr("width", width)
      .attr("height", height);

  // Initialize player position
  let player = { x: 0, y: 0 }; // Starting at the top-left corner

  // Draw the maze
  const rows = svg.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(0, ${i * cellSize})`);

  rows.selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * cellSize)
      .attr("y", 0)
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("fill", d => getColor(d))
      .attr("class", "cell");

  // Draw the player
  const playerRect = svg.append("rect")
      .attr("x", player.x * cellSize)
      .attr("y", player.y * cellSize)
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("fill", "blue");

  // Handle arrow key movements
  document.addEventListener("keydown", function(event) {
      if (event.key.startsWith("Arrow")) {
          let newX = player.x;
          let newY = player.y;
          console.log(player);
          //console.log(gridSize, cellSize);

          switch (event.key) {
              case "ArrowUp": newY = Math.max(player.y - 1, 0); break;
              case "ArrowDown": newY = Math.min(player.y + 1, gridSize - 1); break;
              case "ArrowLeft": newX = Math.max(player.x - 1, 0); break;
              case "ArrowRight": newX = Math.min(player.x + 1, gridSize - 1); break;
          }
         
          //console.log("new pos", newX,newY);
          //console.log("new data", data);

          // Check if moving to a green cell
          if (data[newY][newX] === 0) {
            console.log("green");
              player.x = newX;
              player.y = newY;
              playerRect.attr("x", player.x * cellSize)
                        .attr("y", player.y * cellSize);
          } else if (data[newY][newX] >= 1) { // Check if moving onto a red cell
            console.log("red");

              // Move the player half the distance
              player.x = newX;
              player.y = newY;
              playerRect.attr("x", player.x * cellSize)
                        .attr("y", player.y * cellSize);
          }
          else{
            console.log("out of bounds");

            playerRect.attr("x", player.x)
                        .attr("y", player.y);
          }
      }
  });
});
function getColor(d) {
  switch(d) {
      case 0: return "green";    // For example, '0' might represent a wall
      case 1: return "red";  // '1' might represent a path
      case 2: return "blue";   // '2' could represent water
      case 3: return "yellow"; // '3' could be sand
      default: return "black"; // Default color if none of the above
  }
}


function goTo(page){
  window.location.href = page;
}
let shouldClose = false;


function information(){
  if(!shouldClose){
    document.getElementById('info-box').style.display = 'block';
    
  }else{
    document.getElementById('info-box').style.display = 'none';
  }
  shouldClose = !shouldClose
  
}
function closeInfoBox(){
  //document.getElementById('info-box').style.display = 'none';
}