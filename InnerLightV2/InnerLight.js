let scene, camera, renderer, raycaster, pointer;
let width, height;
let activeShapesGroup; // THREE.Group to hold all current shapes
let shouldMove = true; // Pausing mechanism
let hue = 0;
let isDragging = false;
let lastIntersectedObject = null;

// Default shape configurations if UI is not fully implemented/ported
let shapeConfig = {
    shapeType: 'circle',
    numElements: 50,
    numSides: 6,
    radius: 50,
    strokeWidth: 2, // This will be used by LineMaterial
    strokeColor: '#ffffff',
    fillColor: '#000000', // Not used for line shapes
    fillOpacity: 0,     // Not used for line shapes
    xDivisions: 10,
    yDivisions: 10,
    dynamicSize: 10, // For hover effect line width
    incrementSpace: 10,
    centerX: 0,
    centerY: 0
};

// Store which shapes are active by name, mapping to their creation functions
const shapeCreators = {
    'lotus': createLotusThree,
    'circle': createCircleThree,
    'prism': createPrismThree,
    'rect': createRectThree,
    'square': createSquareThree,
    'user': createUserShapeThree
};
let activePatternStates = { // Matches initial shouldCreate array
    'lotus': true,
    'circle': true,
    'prism': false,
    'rect': false,
    'square': false,
    'user': false
};


document.addEventListener("DOMContentLoaded", function () {
    width = window.innerWidth;
    height = window.innerHeight;
    shapeConfig.centerX = 0; // Centered in Three.js world space
    shapeConfig.centerY = 0;

    initThree();

    // Initial UI setup based on D3 version
    const buttons = Array.from(document.getElementsByTagName('button'));
    if (buttons.length > 2) { // Basic check
        if (activePatternStates['lotus']) buttons[1].classList.add('button-active');
        if (activePatternStates['circle']) buttons[2].classList.add('button-active');
    }
    
    redrawActiveShapes();
    animate();

    document.addEventListener('keydown', logKey);
    // Event listeners for UI buttons will be in HTML, calling global functions like changePattern()
});

function initThree() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background

    camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.getElementById("vis").appendChild(renderer.domElement);

    activeShapesGroup = new THREE.Group();
    scene.add(activeShapesGroup);

    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();

    window.addEventListener('resize', onWindowResize, false);
    renderer.domElement.addEventListener('pointerdown', onPointerDown, false);
    renderer.domElement.addEventListener('pointermove', onPointerMove, false);
    renderer.domElement.addEventListener('pointerup', onPointerUp, false);
}

function goTo(page) {
    window.location.href = page;
}

function information() {
    const infoBox = document.getElementById('info-box');
    infoBox.style.display = (infoBox.style.display === 'none' || infoBox.style.display === '') ? 'block' : 'none';
}
function closeInfoBox(){ /* Original was empty, can be used to hide */ information(); }


function logKey(e) {
    if (e.code === "KeyP") {
        shouldMove = !shouldMove;
        const nav = document.getElementById('innerLightNav');
        if (nav) {
            nav.style.borderTop = shouldMove ? '5px double white' : '5px double red';
            nav.style.borderBottom = shouldMove ? '5px double white' : '5px double red';
        }
    }
}

function changePattern(index, shapeName) {
    // D3 index to shapeName mapping (assuming buttons[0] is exit)
    // const shapeMapping = ['lotus', 'circle', 'prism', 'rect', 'square', 'user'];
    // const shapeName = shapeMapping[index]; (passed as argument now)

    activePatternStates[shapeName] = !activePatternStates[shapeName];

    const buttons = document.getElementsByTagName('button');
    if (buttons[index + 1]) { // +1 to account for 'X' button
        buttons[index + 1].classList.toggle('button-active', activePatternStates[shapeName]);
    }
    redrawActiveShapes();
}

function clearActiveShapes() {
    while (activeShapesGroup.children.length > 0) {
        const shape = activeShapesGroup.children[0];
        activeShapesGroup.remove(shape);
        if (shape.geometry) shape.geometry.dispose();
        if (shape.material) {
            if (Array.isArray(shape.material)) {
                shape.material.forEach(m => m.dispose());
            } else {
                shape.material.dispose();
            }
        }
    }
}

function redrawActiveShapes() {
    clearActiveShapes();
    for (const shapeName in activePatternStates) {
        if (activePatternStates[shapeName] && shapeCreators[shapeName]) {
            shapeCreators[shapeName]();
        }
    }
}

// --- Shape Creation Functions (Three.js) ---

// Helper to create a Line2 object
function createLine2(pointsArray, color, lineWidth, shapeType) {
  // pointsArray should be flat: [x1, y1, z1, x2, y2, z2, ...]
  // For 2D, z is often 0.
  const geometry = new THREE.LineGeometry(); // From LineGeometry.js
  geometry.setPositions(pointsArray);

  const material = new THREE.LineMaterial({ // From LineMaterial.js
      color: new THREE.Color(color),
      linewidth: lineWidth / 1000, // e.g., if lineWidth is 2 (pixels), this becomes 0.002
      resolution: new THREE.Vector2(width, height), // Critical for correct thickness scaling
      dashed: false
      // worldUnits: true, // REMOVED - This property caused the warning.
                         // LineMaterial's linewidth with 'resolution' set provides screen-space like thickness.
  });
  
  // Ensure THREE.Line2 is available (depends on LineSegmentsGeometry.js and Line2.js loading correctly)
  if (!THREE.Line2) {
      console.error("THREE.Line2 is not defined. Check script loading order and paths for LineSegmentsGeometry.js and Line2.js.");
      // Fallback or throw error
      const fallbackMaterial = new THREE.LineBasicMaterial({ color: new THREE.Color(color), linewidth: lineWidth }); // linewidth > 1 may not work
      const fallbackGeometry = new THREE.BufferGeometry().setFromPoints(
          pointsArray.reduce((acc, val, idx, arr) => {
              if (idx % 3 === 0) acc.push(new THREE.Vector3(arr[idx], arr[idx+1], arr[idx+2]));
              return acc;
          }, [])
      );
      const line = new THREE.LineSegments(fallbackGeometry, fallbackMaterial);
      console.warn("Falling back to THREE.LineSegments for shape:", shapeType);
       line.userData.type = shapeType;
       line.userData.originalLineWidth = lineWidth;
       line.userData.originalColor = new THREE.Color(color);
       line.userData.isFallback = true;
      return line;
  }
  
  const line = new THREE.Line2(geometry, material); // From Line2.js
  line.computeLineDistances();
  line.scale.set(1, 1, 1);
  line.userData.type = shapeType;
  line.userData.originalLineWidth = lineWidth; // Store intended pixel width
  line.userData.originalColor = material.color.clone(); // Store original color for reset
  return line;
}

function createLotusThree() {
    const z_d3 = 50; // D3 z, not related to Three.js z-depth
    const x_d3 = width / z_d3;
    const y_d3 = height / z_d3;
    const lotusScale = 4;
    let totalPercentChange = 0;

    for (let counter = 1; counter < 70; counter++) {
        let cSetPercent = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
        
        // D3 getPercentCoord logic adapted
        let points = [];
        let currentSign = [1, 0];
        for (let count8 = 0; count8 < 17; count8 += 2) {
            if (count8 == 0) { currentSign = [1, 0]; }
            if (count8 == 2) { currentSign = [lotusScale, lotusScale]; }
            if (count8 == 4) { currentSign = [0, 1]; }
            if (count8 == 6) { currentSign = [-1 * lotusScale, lotusScale]; }
            if (count8 == 8) { currentSign = [-1, 0]; }
            if (count8 == 10) { currentSign = [-1 * lotusScale, -1 * lotusScale]; }
            if (count8 == 12) { currentSign = [0, -1]; }
            if (count8 == 14) { currentSign = [lotusScale, -1 * lotusScale]; }
            if (count8 == 16) { currentSign = [1, 0]; }

            // D3 uses percentage of width/height, then scales.
            // We'll scale directly. Coordinates need to be centered.
            // The D3 code centers these points implicitly around width/2, height/2.
            // Here, we assume they are relative to (0,0) and scale.
            let pX = (cSetPercent[count8] * width * 0.5) - (currentSign[0] * totalPercentChange);
            let pY = (cSetPercent[count8 + 1] * height * 0.5) - (currentSign[1] * totalPercentChange);
            
            points.push(pX, -pY, 0); // Y inverted, Z=0
        }
        
        if (counter == 1) totalPercentChange += 17;
        else totalPercentChange += 0.5; // Smaller increments for subsequent lines

        const line = createLine2(points, 0xffffff, 2, 'lotus'); // Original D3 used .45vh
        activeShapesGroup.add(line);
    }
}

function createSquareThree() {
    let totalPercentChange = 0;
    const scaleFactor = Math.min(width, height) * 0.05; // Base size for squares

    for (let counter = 1; counter < 80; counter++) {
        let cSetPercent = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
        let points = [];
        let currentSign = [1,0];

        for (let count8 = 0; count8 < 9; count8 += 2) {
            if (count8 == 0) currentSign = [1, 0];
            if (count8 == 2) currentSign = [0, 1];
            if (count8 == 4) currentSign = [-1, 0];
            if (count8 == 6) currentSign = [0, -1];
            if (count8 == 8) currentSign = [1, 0];

            // Scale points appropriately for Three.js view
            let pX = (cSetPercent[count8] * width * 0.5) - (currentSign[0] * totalPercentChange * scaleFactor * 0.1);
            let pY = (cSetPercent[count8 + 1] * height * 0.5) - (currentSign[1] * totalPercentChange * scaleFactor * 0.1);
            points.push(pX, -pY, 0);
        }
        if (counter == 1) totalPercentChange += 20;
        else totalPercentChange += 0.5;

        const line = createLine2(points, 0xffffff, 2, 'square');
        activeShapesGroup.add(line);
    }
}

function createCircleThree() {
    let radius = 10;
    const increment = 5;
    const numCircles = Math.floor(Math.min(width, height) / 2 / increment) - 2; // Approx

    for (let i = 0; i < numCircles; i++) {
        const circleGeom = new THREE.RingGeometry(radius - 0.5, radius + 0.5, 64); // Thin ring
        // For Line2:
        const points = [];
        for(let j=0; j <= 64; j++) {
            const angle = (j/64) * Math.PI * 2;
            points.push(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        }
        const line = createLine2(points, 0xffffff, 2, 'circle');
        line.position.set(0,0,0); // Centered by default
        activeShapesGroup.add(line);
        radius += increment;
    }
}

function createRectThree() {
    let sizeW = 10;
    let sizeH = 10;
    const increment = 30; // D3 sizeScale
    const numRects = Math.floor(Math.min(width, height) / 2 / increment);

    for (let i = 0; i < numRects; i++) {
        const points = [
            -sizeW / 2, sizeH / 2, 0,  // top-left
             sizeW / 2, sizeH / 2, 0,  // top-right
             sizeW / 2, -sizeH / 2, 0, // bottom-right
            -sizeW / 2, -sizeH / 2, 0, // bottom-left
            -sizeW / 2, sizeH / 2, 0   // close loop
        ];
        const line = createLine2(points, 0xffffff, 3, 'rect'); // D3 used .6vh
        activeShapesGroup.add(line);
        sizeW += increment;
        sizeH += increment;
    }
}

function createPrismThree() {
    let radius = 10;
    const increment = 25;
    let sizer = 3; // D3 sizer
    const numCircles = 20; // Approx

    for (let i = 0; i < numCircles; i++) {
        let cx = 0, cy = 0;
        // D3 getCenter logic for offset
        if (i % 3 == 0) { cx = width * 0.01; cy = height * 0.005; } // Small offsets
        if (i % 3 == 1) { cx = -width * 0.01; cy = height * 0.005; }
        if (i % 3 == 2) { cy = -height * 0.005; }

        const points = [];
        for(let j=0; j <= 64; j++) {
            const angle = (j/64) * Math.PI * 2;
            points.push(Math.cos(angle) * radius + cx, Math.sin(angle) * radius - cy, 0); // Y inverted
        }
        const line = createLine2(points, 0xffffff, 2.5, 'prism'); // D3 used .5vh
        activeShapesGroup.add(line);
        
        if (sizer % 3 == 0) radius += increment;
        sizer++;
    }
}

function createUserShapeThree() {
    updateShapeConfigFromUI(); // Get latest values from HTML inputs
    const { shapeType, numElements, numSides, radius, strokeWidth, strokeColor, 
            incrementSpace, xDivisions, yDivisions, dynamicSize } = shapeConfig;

    if (shapeType === 'circle') {
        let currentRadius = radius;
        for (let i = 0; i < numElements; i++) {
            const points = [];
            for(let j=0; j <= 64; j++) { // 64 segments for smooth circle
                const angle = (j/64) * Math.PI * 2;
                points.push(Math.cos(angle) * currentRadius, Math.sin(angle) * currentRadius, 0);
            }
            const line = createLine2(points, strokeColor, strokeWidth, 'user');
            activeShapesGroup.add(line);
            currentRadius += incrementSpace;
        }
    } else if (shapeType === 'rect') {
        // This D3 version created a grid of rects, here we'll make concentric ones from center
        // Or, if a grid is desired:
        const cellWidth = width / xDivisions;
        const cellHeight = height / yDivisions;
        let currentIdx = 0;
        for (let r = 0; r < yDivisions; r++) {
            for (let c = 0; c < xDivisions; c++) {
                if (currentIdx >= numElements) break;
                const rectWidth = cellWidth - currentIdx * (dynamicSize/xDivisions) ; // Shrink with index
                const rectHeight = cellHeight - currentIdx * (dynamicSize/yDivisions);
                const x = (c * cellWidth) - width/2 + cellWidth/2;
                const y = (r * cellHeight) - height/2 + cellHeight/2;
                 const points = [
                    x - rectWidth / 2, y + rectHeight / 2, 0,
                    x + rectWidth / 2, y + rectHeight / 2, 0,
                    x + rectWidth / 2, y - rectHeight / 2, 0,
                    x - rectWidth / 2, y - rectHeight / 2, 0,
                    x - rectWidth / 2, y + rectHeight / 2, 0
                ];
                const line = createLine2(points, strokeColor, strokeWidth, 'user');
                activeShapesGroup.add(line);
                currentIdx++;
            }
             if (currentIdx >= numElements) break;
        }


    } else if (shapeType === 'polygon') {
        let currentRadius = radius;
        for (let i = 0; i < numElements; i++) {
            const points = [];
            for (let j = 0; j <= numSides; j++) { // <= to close the polygon
                const angle = (j / numSides) * Math.PI * 2;
                points.push(Math.cos(angle) * currentRadius, Math.sin(angle) * currentRadius, 0);
            }
            const line = createLine2(points, strokeColor, strokeWidth, 'user');
            activeShapesGroup.add(line);
            currentRadius += incrementSpace;
        }
    }
}

function updateShapeConfigFromUI() {
    shapeConfig.shapeType = document.getElementById('shapeType').value;
    shapeConfig.numElements = parseInt(document.getElementById('numElements').value);
    shapeConfig.numSides = parseInt(document.getElementById('numSides').value);
    shapeConfig.radius = parseInt(document.getElementById('radius').value);
    shapeConfig.strokeWidth = parseFloat(document.getElementById('strokeWidth').value.replace('px','')); // Assuming LineMaterial
    shapeConfig.strokeColor = document.getElementById('strokeColor').value;
    shapeConfig.fillColor = document.getElementById('fillColor').value;
    shapeConfig.fillOpacity = parseFloat(document.getElementById('fillOpacity').value);
    shapeConfig.xDivisions = parseInt(document.getElementById('xDivisions').value);
    shapeConfig.yDivisions = parseInt(document.getElementById('yDivisions').value);
    shapeConfig.dynamicSize = parseInt(document.getElementById('dynamicSize').value); // For hover line width
    shapeConfig.incrementSpace = parseInt(document.getElementById('incrementSpace').value);
    shapeConfig.centerX = 0; // Keep centered
    shapeConfig.centerY = 0;
}

function updateShapeIns() { // Called by UI button
    activePatternStates['user'] = false; // Force remove if exists
    changePattern(5, 'user'); // Toggle to remove (if active) then add
    activePatternStates['user'] = false; // Set to false so next call to changePattern actually adds it
    changePattern(5, 'user'); 
}


// --- Interaction & Animation ---
function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;

    camera.left = width / -2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = height / -2;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    // Update resolution for LineMaterial
    activeShapesGroup.children.forEach(child => {
        if (child.material && child.material.resolution) {
            child.material.resolution.set(width, height);
        }
    });
}

function onPointerDown(event) {
    if (!shouldMove) return;
    isDragging = true;
    updatePointer(event);
    handleShapeInteraction();
}

function onPointerMove(event) {
    if (!shouldMove) return;
    updatePointer(event); // Update pointer regardless of dragging for hover-like effects
    if (isDragging) { // Only trigger interaction if dragging
      handleShapeInteraction();
    }
}

function onPointerUp(event) {
    if (!shouldMove) return;
    isDragging = false;
    if (lastIntersectedObject && lastIntersectedObject.userData.isAnimatingHover) {
        // Optional: Revert to original state if mouse leaves while animating
        resetShapeAnimation(lastIntersectedObject);
    }
    lastIntersectedObject = null;
}

function updatePointer(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function handleShapeInteraction() {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(activeShapesGroup.children, false);

    if (intersects.length > 0) {
        const intersected = intersects[0].object;
        if (intersected !== lastIntersectedObject) {
            if (lastIntersectedObject && lastIntersectedObject.userData.isAnimatingHover) {
                 resetShapeAnimation(lastIntersectedObject);
            }
            if (!intersected.userData.isAnimatingHover) {
                 triggerShapeAnimation(intersected);
            }
            lastIntersectedObject = intersected;
        }
    } else {
        if (lastIntersectedObject && lastIntersectedObject.userData.isAnimatingHover) {
            resetShapeAnimation(lastIntersectedObject);
        }
        lastIntersectedObject = null;
    }
}

// In triggerShapeAnimation:
function triggerShapeAnimation(shape) {
  if (shape.userData.isFallback) { // Handle fallback shapes differently if needed
      // Simple color change for fallback
      const targetColor = new THREE.Color().setHSL(hue / 360, 1, 0.60);
      hue = (hue + 10) % 360;
      if (shape.material.color) {
          new TWEEN.Tween(shape.material.color)
              .to({ r: targetColor.r, g: targetColor.g, b: targetColor.b }, 300)
              .easing(TWEEN.Easing.Quadratic.Out)
              .start();
      }
      shape.userData.isAnimatingHover = true; // Mark as animating
      return;
  }

  shape.userData.isAnimatingHover = true;
  // const originalColor = shape.material.color.clone(); // Already stored in userData.originalColor
  const originalLineWidth = shape.userData.originalLineWidth || shape.material.linewidth * 1000;
  
  const hoverLineWidth = (shapeConfig.dynamicSize || originalLineWidth * 1.5);

  const targetColor = new THREE.Color().setHSL(hue / 360, 1, 0.60);
  hue = (hue + 10) % 360;
  
  new TWEEN.Tween(shape.material.color)
      .to({ r: targetColor.r, g: targetColor.g, b: targetColor.b }, 300)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

  new TWEEN.Tween(shape.material)
      .to({ linewidth: hoverLineWidth / 1000 }, 300)
      .easing(TWEEN.Easing.Quadratic.Out)
      .chain(
          new TWEEN.Tween(shape.material)
              .to({ linewidth: (originalLineWidth * 0.8) / 1000 }, 300)
              .easing(TWEEN.Easing.Quadratic.In)
               .onComplete(() => {
                   if (shape !== lastIntersectedObject) {
                       resetShapeAnimation(shape);
                   }
               })
      )
      .start();
}
// In resetShapeAnimation:
function resetShapeAnimation(shape) {
  if (shape.userData.isFallback) {
      if (shape.material.color && shape.userData.originalColor) {
          new TWEEN.Tween(shape.material.color)
              .to({ r: shape.userData.originalColor.r, g: shape.userData.originalColor.g, b: shape.userData.originalColor.b }, 300)
              .easing(TWEEN.Easing.Quadratic.Out)
              .start();
      }
      shape.userData.isAnimatingHover = false;
      return;
  }

  shape.userData.isAnimatingHover = false;
  // TWEEN.remove(shape.material.color); // Not strictly necessary with how tweens are chained/replaced
  // TWEEN.remove(shape.material);

  const originalColor = shape.userData.originalColor || new THREE.Color(0xffffff);
  const originalLineWidth = shape.userData.originalLineWidth || 2; // Default original width in pixels
  
  new TWEEN.Tween(shape.material.color)
      .to({ r: originalColor.r, g: originalColor.g, b: originalColor.b }, 300)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

  new TWEEN.Tween(shape.material)
      .to({ linewidth: originalLineWidth / 1000 }, 300) // Reset to original pixel width
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
}


function animate() {
    requestAnimationFrame(animate);
    if (shouldMove) { // Only update tweens if not paused
        TWEEN.update();
    }
    renderer.render(scene, camera);
}