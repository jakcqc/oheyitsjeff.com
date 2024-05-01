import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


const shapeTypeMap = {
    1: 'box',
    2: 'sphere',
    3: 'cylinder',
    4: 'cone',
    5: 'torus',
    6: 'torusKnot',
    7: 'dodecahedron',
    8: 'icosahedron'
};
let shape1 = 'box';
let shape2 = 'box';
let modder =10;
// Module: Scene setup
function createScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    return scene;
}

// Module: Camera setup
function createCamera() {
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.6, 1000);
    camera.position.z = 100;
    camera.far = 5000; // Increase this value as needed
camera.updateProjectionMatrix()

    return camera;
}

// Module: Renderer setup
function createRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

// Module: Create tesseract (4D Hypercube projected in 3D)
function createTesseract(scene) {
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });
    const cube = new THREE.Mesh(geometry, material);

    // Create an additional rotated cube inside
    const innerCube = new THREE.Mesh(geometry, material);
    innerCube.rotation.x = Math.PI / 4;
    innerCube.rotation.y = Math.PI / 4;
    scene.add(cube);
    scene.add(innerCube);

    return { outerCube: cube, innerCube: innerCube };
}

// Module: Animation
function animate(renderer, scene, camera, objects) {
    requestAnimationFrame(() => animate(renderer, scene, camera, objects));

    let count =0;
    objects.forEach(child => {
        if (child instanceof THREE.Mesh) {
            if(count%modder == 0){
                child.scale.x += THREE.MathUtils.randFloat(-0.001,0.001);
                child.scale.y += THREE.MathUtils.randFloat(-0.001,0.001);
                child.scale.z += THREE.MathUtils.randFloat(-0.001,0.001);
            }
            child.rotation.x += THREE.MathUtils.randFloat(0.0,0.007);
            child.rotation.y += THREE.MathUtils.randFloat(0.0,0.01);
            child.rotation.z += THREE.MathUtils.randFloat(0.0,0.006);
            
        }
    });
    
    renderer.render(scene, camera);
}

// Initialization
function init() {
    const scene = createScene();
    const camera = createCamera();
    const renderer = createRenderer();
    const tesseract = createTesseract(scene);
    animate(renderer, scene, camera, tesseract);
}
// Module: Lighting setup
function createLights(scene) {
    const ambientLight = new THREE.AmbientLight(0xff0000, 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xf080ff, 1);
    directionalLight.position.set(0, 100, 0);
    scene.add(directionalLight);

    // Event listeners for UI controls
    document.getElementById('ambientColor').addEventListener('input', function() {
        ambientLight.color.set(this.value);
    });

    document.getElementById('ambientIntensity').addEventListener('input', function() {
        ambientLight.intensity = parseFloat(this.value);
    });

    document.getElementById('directionalColor').addEventListener('input', function() {
        directionalLight.color.set(this.value);
    });

    document.getElementById('directionalIntensity').addEventListener('input', function() {
        directionalLight.intensity = parseFloat(this.value);
    });

    return {ambientLight, directionalLight};
}
function addShape(scene, shapeType, materialOpts, dimensions, position, rotation) {
    let geometry;
    switch (shapeType) {
        case 'box':
            geometry = new THREE.BoxGeometry(...dimensions);
            break;
        case 'sphere':
            geometry = new THREE.SphereGeometry(...dimensions);
            break;
        case 'cylinder':
            // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
            geometry = new THREE.CylinderGeometry(...dimensions);
            break;
        case 'cone':
            // ConeGeometry(radius, height, radialSegments)
            geometry = new THREE.ConeGeometry(...dimensions);
            break;
        case 'torus':
            // TorusGeometry(radius, tube, radialSegments, tubularSegments)
            geometry = new THREE.TorusGeometry(...dimensions);
            break;
        case 'torusKnot':
            // TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q)
            geometry = new THREE.TorusKnotGeometry(...dimensions);
            break;
        case 'dodecahedron':
            // DodecahedronGeometry(radius, detail)
            geometry = new THREE.DodecahedronGeometry(...dimensions);
            break;
        case 'icosahedron':
            // IcosahedronGeometry(radius, detail)
            geometry = new THREE.IcosahedronGeometry(...dimensions);
            break;
        default:
            console.warn('Shape type not supported:', shapeType);
            return;
    }

    const material = new THREE.MeshPhongMaterial(materialOpts);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    scene.add(mesh);
    return mesh;
}
function addShape_int(scene, shapeType_int, materialOpts, dimensions, position, rotation) {
    let geometry;
    switch (shapeType_int) {
        case 0:
            geometry = new THREE.BoxGeometry(...dimensions);
            break;
        case 1:
            geometry = new THREE.SphereGeometry(...dimensions);
            break;
        case 2:
            // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
            geometry = new THREE.CylinderGeometry(...dimensions);
            break;
        case 3:
            // ConeGeometry(radius, height, radialSegments)
            geometry = new THREE.ConeGeometry(...dimensions);
            break;
        case 4:
            // TorusGeometry(radius, tube, radialSegments, tubularSegments)
            geometry = new THREE.TorusGeometry(...dimensions);
            break;
        case 5:
            // TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q)
            geometry = new THREE.TorusKnotGeometry(...dimensions);
            break;
        case 6:
            // DodecahedronGeometry(radius, detail)
            geometry = new THREE.DodecahedronGeometry(...dimensions);
            break;
        case 7:
            // IcosahedronGeometry(radius, detail)
            geometry = new THREE.IcosahedronGeometry(...dimensions);
            break;
        default:
            console.warn('Shape type not supported:', shapeType_int);
            return;
    }

    const material = new THREE.MeshPhongMaterial(materialOpts);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    scene.add(mesh);
    return mesh;
}
// Module: Create tesseract using the generic shape function
function createTesseract_g(scene) {
    const cube = addShape(scene, 'box', {
        color: 0xffffff,
        opacity: 0.5,
        transparent: true
    }, [5, 5, 5], [0, 0, 0], [0, 0, 0]);
    const innerCube = addShape(scene, 'box', {
        color: 0xffffff,
        opacity: 0.5,
        transparent: true
    },  [5, 5, 5], [0, 0, 0], [Math.PI / 4, Math.PI / 4, 0]);
    //const outter = addShape(scene, 'sphere', {color: 0xaaaaaa, wireframe: true}, [40, 20, 20], [0, 0, 0], [Math.PI / 4, Math.PI / 4, 0]);

    return { outerCube: cube, innerCube: innerCube };
}
function getNextPointInNoiseMap(index) {
    // Scale factors for noise to adjust the "smoothness" and spatial frequency
    const scale = 0.05; // Smaller values for smoother transitions
    const displacement = 100; // Range control

    // Calculate noise-based coordinates
    const x = THREE.MathUtils.randFloat(-340,(0, index * scale, 0, 0) * displacement+350);
    const y = THREE.MathUtils.randFloat(0,(0, index * scale, 0) * displacement+100);
    const z = THREE.MathUtils.randFloat(-340,(0, 0, index * scale) * displacement+350);
    
    return new THREE.Vector3(x, y, z);
}
function sceneBuilderComplete(scene, amount){
    let meshes =[];
    for (let index = 0; index < amount; index++) {
       const point =  getNextPointInNoiseMap(index);
        let scaler = THREE.MathUtils.randFloat(0.4,3);
        let scaler1 = THREE.MathUtils.randFloat(0.4,2);
        let scaler2 = THREE.MathUtils.randFloat(0.4,2);
       const color = [scaler1,scaler2,scaler-1]; 
        meshes.push(...sceneBuilder(scene,point,scaler,color,6,shape1,shape2));
    }
    return meshes;
}
function sceneBuilder(scene, point,scale,color,modder,shape11,shape22){

    let allShapes = [];
    
   
    
    for (let i = 1; i < 50; i++) {
    if(i%modder == 0){
        
        allShapes.push(addShape(scene, shape11, 
        {
            color: new THREE.Color(255,255,255),
            opacity: i*0.001 + 0.01,
            wireframe:true
        }, 
        [scale * i, scale * i,scale *  i], [0, 30*scale + 50, 0], [Math.PI / 4, Math.PI / 4, 0]));
            
        
    }else{
                allShapes.push(addShape(scene, shape22, 
                {
                    color: new THREE.Color(i*color[0] / 255, i*color[1] / 255, i*color[2] / 255),
                    opacity: i*0.001 + 0.07,
                    transparent: true
                }, 
                [scale * i, scale * i,scale *  i], [0, 30*scale + 50, 0], [Math.PI / 4, Math.PI / 4, 0]));
                    
                }
                
                allShapes[i-1].position.add(point);
    }
    // allShapes.push(addShape_int(scene, 0, {color: 0xffffff, wireframe: true}, [20, 20, 20], [0, 0, 0], [0, 0, 0]));
    // allShapes.push(addShape_int(scene, 0, {color: 0xffffff, wireframe: true}, [20, 20, 20], [0, 0, 0], [0, 0, 0]));
    // allShapes.push(addShape_int(scene, 0, {color: 0xffffff, wireframe: true}, [20, 20, 20], [0, 0, 0], [0, 0, 0]));

    
    return allShapes;


}
/**
 * Creates a 3D grid of boxes in a Three.js scene.
 * 
 * @param {THREE.Scene} scene - The scene to which the boxes will be added.
 * @param {number[]} gridSize - Array of three integers [x, y, z] representing the number of boxes along each axis.
 * @param {number} boxSize - The size of each side of the boxes.
 * @param {THREE.Material} material - Material to be used for each box.
 */
function createBoxGrid(scene, gridSize, boxSize) {
    const [gridX, gridY, gridZ] = gridSize;
    const offsetX = ((gridX - 1) * boxSize / 2);
    const offsetY = ((gridY - 1) * boxSize / 2);
    const offsetZ = ((gridZ - 1) * boxSize / 2);

    const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    //const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: true });
    const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, wireframe: false });
    const instancedMesh = new THREE.InstancedMesh(geometry, material, gridX * gridY * gridZ);
    const dummy = new THREE.Object3D();

    let index = 0;
    for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
            for (let k = 0; k < gridZ; k++) {
                dummy.position.set(
                    (i * boxSize) - offsetX,
                    (j * boxSize) - offsetY,
                    (k * boxSize) - offsetZ
                );
                dummy.updateMatrix();
                instancedMesh.setMatrixAt(index++, dummy.matrix);
            }
        }
    }

    scene.add(instancedMesh);
}

function getColor(opacity,colorScale){
    return ({
        color: new THREE.Color(colorScale*1.5 / 255, colorScale*1.5 / 255, colorScale*1.5 / 255),
        opacity: opacity,
        transparent: true,
        wireframe: true
    })
}
/**
 * Sets the camera position to be standoff distance away from the object while looking at the object.
 *
 * @param {THREE.Camera} camera - The camera to adjust.
 * @param {THREE.Object3D} object - The object to focus on.
 * @param {number} standoffDistance - The distance from the object to position the camera.
 */
function positionCamera(camera, object, standoffDistance) {
    // Ensure the object's world matrix is updated
    object.updateMatrixWorld(true);

    // Calculate the position vector pointing away from the object
    const position = new THREE.Vector3();
    position.setFromMatrixPosition(object.matrixWorld); // Get world position of the object

    // Assuming the standoff direction is along the z-axis of the object
    const direction = new THREE.Vector3(0, 0, 1);
    direction.applyQuaternion(object.quaternion); // Apply the object's rotation to the direction
    direction.multiplyScalar(standoffDistance); // Scale the direction by the standoff distance

    // Set the camera position
    camera.position.copy(position.add(direction)); // Add the direction to the object's position

    // Make the camera look at the object
    camera.lookAt(object.position);
}
function makeCubes(num,scene,scaleColor,opacity, scaleSize){

    let allShapes = [];
    let scale = 1.5;
    for (let i = 1; i < 50; i++) {
        
    allShapes.push(addShape(scene, 'box', 
    {
        color: new THREE.Color(i*1.5 / 255, i*1.5 / 255, i*1.5 / 255),
        opacity: i*0.1,
        transparent: true,
    }, 
    [scaleSize * i, scaleSize * i,scaleSize *  i], [0, 0, 0], [Math.PI / 4, Math.PI / 4, 0]));
        
    }
    // allShapes.push(addShape_int(scene, 0, {color: 0xffffff, wireframe: true}, [20, 20, 20], [0, 0, 0], [0, 0, 0]));
    // allShapes.push(addShape_int(scene, 0, {color: 0xffffff, wireframe: true}, [20, 20, 20], [0, 0, 0], [0, 0, 0]));
    // allShapes.push(addShape_int(scene, 0, {color: 0xffffff, wireframe: true}, [20, 20, 20], [0, 0, 0], [0, 0, 0]));

    
    return allShapes;


}
function makeCube(scene,colorB){

    
    let scale = 10;
    let material;
    if(colorB){
         material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
        });
    }else{
         material = new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true
        });
    }
    return (addShape(scene, 'box', 
    material, 
    [scale, scale,scale], [0, 0, 0], [0,0, 0]));


}
function createMaze(scene) {
    const gridSize = 40; // 20x20 grid
    const cellSize = 30; // Each cell is 10x10 in size
    const wallHeight = 20; // Height of the walls

    // Calculate total number of floor cells and potential walls
    const numFloors = gridSize * gridSize;
    const numWalls = (gridSize + 1) * gridSize * 2; // Vertical and horizontal walls

    // Geometry for floors and walls
    const floorGeometry = new THREE.BoxGeometry(cellSize, 1, cellSize); // Thin, flat boxes for floors
    const wallGeometry = new THREE.BoxGeometry(cellSize, wallHeight, 1); // Thin, tall boxes for walls

    // Materials
    const floorMaterial = new THREE.MeshPhongMaterial({ color: 0x050505 }); // Light green floors
    const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x050505 }); // Yellow walls

    // Instanced Meshes
    const floors = new THREE.InstancedMesh(floorGeometry, floorMaterial, numFloors);
    const walls = new THREE.InstancedMesh(wallGeometry, wallMaterial, numWalls);

    // Dummy objects for positioning
    const floorDummy = new THREE.Object3D();
    const wallDummy = new THREE.Object3D();
    let wallIndex = 0;

    // Create floor and wall instances
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            // Floor positioning
            floorDummy.position.set(i * cellSize - (gridSize * cellSize / 2) + (cellSize / 2),
                                    0,
                                    j * cellSize - (gridSize * cellSize / 2) + (cellSize / 2));
            floorDummy.updateMatrix();
            floors.setMatrixAt(i * gridSize + j, floorDummy.matrix);

            // Wall positioning (horizontal and vertical walls)
            if (i < gridSize) { // Vertical walls
                wallDummy.position.set(i * cellSize - (gridSize * cellSize / 2),
                                       wallHeight / 2,
                                       j * cellSize - (gridSize * cellSize / 2) - (cellSize / 2));
                wallDummy.updateMatrix();
                walls.setMatrixAt(wallIndex++, wallDummy.matrix);
            }
            if (j < gridSize) { // Horizontal walls
                wallDummy.position.set(i * cellSize - (gridSize * cellSize / 2) - (cellSize / 2),
                                       wallHeight / 2,
                                       j * cellSize - (gridSize * cellSize / 2));
                wallDummy.rotation.y = Math.PI / 2; // Rotate to horizontal
                wallDummy.updateMatrix();
                walls.setMatrixAt(wallIndex++, wallDummy.matrix);
            }
        }
    }

    // Add instanced meshes to the scene
    scene.add(floors);
    scene.add(walls);

    // Update instance matrices
    floors.instanceMatrix.needsUpdate = true;
    walls.instanceMatrix.needsUpdate = true;
}
function addCamControl(camera){
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const moveSpeed = 1; // Speed of the camera movement

        switch(key) {
            case 'ArrowUp':
                // Move forward
                camera.position.z -= moveSpeed;
                break;
            case 'ArrowDown':
                // Move backward
                camera.position.z += moveSpeed;
                break;
            case 'ArrowLeft':
                // Move left
                camera.position.x -= moveSpeed;
                break;
            case 'ArrowRight':
                // Move right
                camera.position.x += moveSpeed;
                break;
        }
    });

    

}
// Initialization
function init_g() {


    const scene = createScene();
    const lights = createLights(scene);  // Add lights to the scene
    const camera = createCamera();
    const renderer = createRenderer();
   // const shapesT = createTesseract_g(scene);
    
    let shapes = sceneBuilderComplete(scene,THREE.MathUtils.randInt(1,30));
    const pos = shapes[0].position
    let posA = [pos.x,pos.y,pos.z];
   addCamControl(camera);
   const controls = new OrbitControls(camera, renderer.domElement);
   controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
   controls.dampingFactor = 0.25;
   controls.screenSpacePanning = false;
   controls.maxPolarAngle = Math.PI / 2; // Limit the camera to 90 degrees vertically

   controls.update();
    //createBoxGrid(scene,[5,1,5],5);
    createMaze(scene);
    positionCamera(camera, scene.children[50], 1000);
    animate(renderer, scene, camera, shapes);
    

}

init_g();
