

let sw = window.screen.width;
let sh = window.screen.height;
sw = sw - (0.2*sw);
sh = sh - (0.2*sh);
const svg = d3.select("svg");
function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}
//createRectangleGrid(svg, 800, 600, 50, 50);
const pp = createPoly(15,8);
const vertices = [
    [50, 180], 
    [100, 50], 
    [50, 120], 
    [120, 100]
];
//tilePolygon(svg, sw, sh,pp);




