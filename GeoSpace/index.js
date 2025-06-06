import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import {ParticleSim} from "./particleSimBC.js";
import {ranFromDefault} from "./randomPS.js"

function isMobile() {
    //return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    return true;
  }
let sims = {};
function createSim(key, groups, config,scene) {
    sims[key] = new ParticleSim(key,groups, config,scene, (key) => {delete sims[key]; showConfig();});
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// === PARAMETERS (mirrors PartInfo) ===
// let groups = [
//     {
//       name:"A",
//       amount: 50,
//       depth:0,
//       order:0,
//       particleRadius:4,
//       color: 0xff4444, // red
//       // How group 0 (red) is affected by [red, green, blue]:
//       interactWeights: [ 50, -20,  60 ], // [red, green, blue]
//       interactRadii:   [ 1100, 1300, 1200 ],
//     },
//     {
//       name:"B",
//       amount: 70,
//       depth:0,
//       order:1,
//       particleRadius:3,
//       color: 0x44ff44, // green
//       // How group 1 (green) is affected by [red, green, blue]:
//       interactWeights: [ -30, 90, -50 ],
//       interactRadii:   [ 1300, 1150, 1350 ],
//     },
//     {
//       name:"C",
//       amount: 70,
//       depth:0,
//       order:2,
//       particleRadius:3,
//       color: 0x4444ff, // blue
//       // How group 2 (blue) is affected by [red, green, blue]:
//       interactWeights: [ 80, -100, 40 ],
//       interactRadii:   [ 1200,1350, 1180 ],
//     },
//     {
//       name:"D",
//       amount: 100,
//       depth:0,
//       order:3,
//       particleRadius:3,
//       color: 0x0044ff, // blue
//       // How group 2 (blue) is affected by [red, green, blue]:
//       interactWeights: [ 12, -233, -500 ],
//       interactRadii:   [ 1200,1350, 1180 ],
//     }
//   ];
let groupOfGroups = [];
document.addEventListener("DOMContentLoaded", async function () {
fetch('./gameState.json')
  .then(res => res.json())
  .then(data => { 
    Object.keys(data.World.PG).forEach(key => {
      const dt = {};
      dt[key] = data.World.PG[key]
    groupOfGroups.push(dt); // stores the entire value under each PG key
});
    // groupOfGroups.push({"Siphon":data.World.PG.Siphon});
    // groupOfGroups.push({"Cyclone":data.World.PG.Cyclone});
    
    console.log("Loaded groups:", groupOfGroups);
    initGEO();
  })
  .catch(err => console.error('Failed to load JSON:', err));
});
  let globalConfig = {
    SimulationBounds: 500,
    velocityScale: [0.9,0.9,0.9],
    interactionScaling: 5000,
    baseParticleSize:3,
    threeBackground: 0x111111
  }
  
 
// === GLOBALS ===
let scene, camera, renderer, composer;
let controls, raycaster, pointer;
let meshes = [], positions = [], velocities = [];
let width, height;
const dummy = new THREE.Object3D();

// === INIT THREE ===
function initThree() {
  const container = document.getElementById('vis');

  // Scene & Background
  scene = new THREE.Scene();
  //const loader = new THREE.TextureLoader();
  scene.background = new THREE.Color(globalConfig.threeBackground);
  // loader.load('../assets/Images/inner.png', function(texture) {
  //   scene.background = texture;
  // });
  // Camera
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 50000);
  camera.position.set(0, 0, 3000);

  // Renderer & Composer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Raycaster & Pointer
  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();

// MOBILE VS DESKTOP CONTROLS
if (isMobile()) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.target.set(0, 0, 0);
  } else {
    controls = new FirstPersonControls(camera, renderer.domElement);
    controls.movementSpeed = 140;
    controls.lookSpeed = 0.3;
    controls.lookVertical = true;
    controls.activeLook = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    }
  //controls.target.set(0,0,0);

  // Handle resize
  window.addEventListener('resize', onWindowResize, false);
}
// Helper to convert hex color to string (e.g., 0xff4444 -> "#ff4444")
function hexToHtmlColor(hex) {
    return "#" + (hex & 0xffffff).toString(16).padStart(6, "0");
}
// Helper to convert html color string (e.g., "#ff4444") to hex number
function htmlColorToHex(str) {
    return parseInt(str.replace("#", ""), 16);
}
function randHex(){
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
}
function randArray(min,max, num)
{
    let tempArr = [];
    for (let i = 0; i < num; i++) {
        tempArr.push(THREE.MathUtils.randFloat(min,max));
    }
    return tempArr;
}
// --- EXPORT FUNCTION ---
function exportParticleConfig() {
    const data = {
        groups: groups,
        globalConfig: globalConfig
    };
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to download
    const link = document.createElement("a");
    link.href = url;
    link.download = "particle_config.json";
    document.body.appendChild(link);
    link.click();

    // Clean up
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 100);
}
function htmlColorToHexNumber(hexStr) {
    return 0xFFFFFF & parseInt(hexStr.replace("#", ""), 16);
}
// --- IMPORT FUNCTION ---
// Accepts either JSON string or JS object.
function importParticleConfig(input) {
    let data;
    if (typeof input === "string") {
        try {
            data = JSON.parse(input);
        } catch (err) {
            alert("Invalid JSON: " + err.message);
            return;
        }
    } else {
        data = input;
    }

    if (!data.groups || !Array.isArray(data.groups)) {
        alert("Invalid format: missing or invalid 'groups' array.");
        return;
    }
    if (!data.globalConfig || typeof data.globalConfig !== "object") {
        alert("Invalid format: missing 'globalConfig'.");
        return;
    }
    // Set and re-init
    groups = data.groups;
    globalConfig = data.globalConfig;

    // Refresh everything
    createParticleConfigUI();
    onParticleConfigChanged();
}
function hexStringToRgb(hexStr) {
    // Remove "#" if present and convert to integer
    const hex = parseInt(hexStr.replace("#", ""), 16);
    return [
        (hex >> 16) & 0xff, // Red
        (hex >> 8) & 0xff,  // Green
        hex & 0xff          // Blue
    ];
}
function hexStringToHex(hexStr) {
    // Remove "#" if present and convert to integer
    return parseInt(hexStr.replace("#", ""), 16);
    
}
window.exportParticleConfig = exportParticleConfig;
function appendParticleGroup()
{ 
  console.log(randHex())
    //add new particle
    const nn = groups.length;
    console.log(nn)
    groups.push({
        amount: Math.floor(THREE.MathUtils.randFloat(10,80)),
        color: hexStringToHex(randHex()), 
        order:nn,
        depth:0,
        name:randHex(),
        particleRadius:Math.floor(THREE.MathUtils.randFloat(1,4)),
        // How group 0 (red) is affected by [red, green, blue]:
        interactWeights: randArray(-200,200,nn+1), // [red, green, blue]
        interactRadii:   randArray(50,1000,nn+1),
      });
    //add interacitons for new particle getting added
    groups.forEach(function(element, index) {
        element.interactWeights.push(THREE.MathUtils.randFloat(-200,200));
        element.interactRadii.push(THREE.MathUtils.randFloat(50,800));
    });
    
      createParticleConfigUI();
      onParticleConfigChanged();
}
function createImportExportUI()
{
    const container = document.getElementById("configParticle");
    const innetT = `<div style="margin-bottom: 10px;"><button onclick="exportParticleConfig()">Export Config</button>
  <input type="file" id="importFileInput" style="display:none;" />
  <button onclick="document.getElementById('importFileInput').click()">Import Config</button></div>`;
  container.innerHTML = innetT;
  document.getElementById('importFileInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (event) {
        importParticleConfig(event.target.result);
    };
    reader.readAsText(file);
    // reset input so user can select same file again if needed
    e.target.value = '';
});
}
// Call this function after DOMContentLoaded and after your groups array is defined
function createParticleConfigUI() {
    const container = document.getElementById("configParticle");
    container.innerHTML = ""; // Clear old UI
    createImportExportUI();
    createGlobalConfigUI();


    groups.forEach((group, gi) => {
        const groupDiv = document.createElement("div");
        groupDiv.style = "margin-bottom:14px; padding:10px; background:#222; border-radius:8px;";

        // Group label
        const title = document.createElement("div");
        title.innerHTML = `<b>Group ${gi + 1}</b>`;
        groupDiv.appendChild(title);

        // Amount input
        groupDiv.appendChild(makeInputRow("Amount", "number", group.amount, (val) => {
            groups[gi].amount = Number(val);
            onParticleConfigChanged();
        }));
        groupDiv.appendChild(makeInputRow("ParticleRadiusSize", "number", group.particleRadius, (val) => {
            groups[gi].particleRadius = Number(val);
            onParticleConfigChanged();
        }));
        // Color input
        groupDiv.appendChild(makeInputRow("Color", "color", hexToHtmlColor(group.color), (val) => {
            groups[gi].color = htmlColorToHex(val);
            onParticleConfigChanged();
        }));

        // Interact Weights (array)
        groupDiv.appendChild(arrayInputRow("Interact Weights", group.interactWeights, (idx, val) => {
            groups[gi].interactWeights[idx] = Number(val);
            onParticleConfigChanged();
        }));

        // Interact Radii (array)
        groupDiv.appendChild(arrayInputRow("Interact Radii", group.interactRadii, (idx, val) => {
            groups[gi].interactRadii[idx] = Number(val);
            onParticleConfigChanged();
        }));

        container.appendChild(groupDiv);
    });

    // === Add Particle Group Button ===
    const addBtn = document.createElement("button");
    addBtn.textContent = "+";
    addBtn.title = "Add Particle Group";
    addBtn.style = "font-size:1.5em; border-radius:50%; width:40px; height:40px; margin-top:8px; background:#333; color:white; border:none; cursor:pointer;";
    addBtn.onclick = appendParticleGroup;
    // Button label (optional, for accessibility)
    const label = document.createElement("span");
    label.textContent = " Add Particle Group";
    label.style = "margin-left:8px; font-size:1em;";
    const wrapper = document.createElement("div");
    wrapper.style = "display:flex; align-items:center; gap:5px; margin-bottom:10px;";
    wrapper.appendChild(addBtn);
    wrapper.appendChild(label);

    container.appendChild(wrapper);
}
function createGlobalConfigUI() {
    const config = globalConfig; // for easy reference
    const container = document.getElementById("configParticle");
    //container.innerHTML = ""; // Clear old UI
  
    // Helper: create a labeled row with input
    function makeInputRow(label, type, value, onChange, extraAttrs={}) {
      const row = document.createElement("div");
      row.style = "margin-bottom:8px; display:flex; align-items:center;";
      const lab = document.createElement("label");
      lab.textContent = label;
      lab.style = "flex:1; margin-right:8px;";
      row.appendChild(lab);
  
      const input = document.createElement("input");
      input.type = type;
      if (type === "number") input.step = "any";
      input.value = value;
      Object.entries(extraAttrs).forEach(([k,v]) => input.setAttribute(k, v));
      input.oninput = (e) => onChange(e.target.value);
      row.appendChild(input);
      return row;
    }
  
    // SimulationBounds
    container.appendChild(makeInputRow(
      "Simulation Bounds",
      "number",
      config.SimulationBounds,
      (val) => {
        config.SimulationBounds = Number(val);
        onParticleConfigChanged();
      }
    ));
  
    // velocityScale (array input)
    function makeVectorInputRow(label, arr, onChange) {
      const row = document.createElement("div");
      row.style = "margin-bottom:8px; display:flex; align-items:center;";
      const lab = document.createElement("label");
      lab.textContent = label;
      lab.style = "flex:1; margin-right:8px;";
      row.appendChild(lab);
  
      arr.forEach((val, idx) => {
        const input = document.createElement("input");
        input.type = "number";
        input.step = "any";
        input.value = val;
        input.style = "width:60px; margin-right:6px;";
        input.oninput = (e) => {
          arr[idx] = Number(e.target.value);
          onParticleConfigChanged();
        };
        row.appendChild(input);
      });
      return row;
    }
  
    container.appendChild(makeVectorInputRow(
      "Velocity Scale",
      config.velocityScale,
      onParticleConfigChanged
    ));
  
    // interactionScaling
    container.appendChild(makeInputRow(
      "Interaction Scale",
      "number",
      config.interactionScaling,
      (val) => {
        config.interactionScaling = Number(val);
        onParticleConfigChanged();
      }
    ));
    container.appendChild(makeInputRow(
        "Base Particle Scale",
        "number",
        config.baseParticleSize,
        (val) => {
          config.baseParticleSize = Number(val);
          onParticleConfigChanged();
        }
      ));
  }
  

// Helper: single input row
function makeInputRow(label, type, value, onChange) {
    const row = document.createElement("div");
    row.style = "margin:6px 0;";
    const input = document.createElement("input");
    input.type = type;
    input.value = value;
    if(type === "number") {
        input.style = "width:60px;margin-left:8px";
        input.step = "any";
    } else if (type === "color") {
        input.style = "margin-left:8px";
    }
    input.oninput = (e) => onChange(e.target.value);

    row.innerHTML = `<span>${label}:</span>`;
    row.appendChild(input);
    return row;
}

// Helper: array row for interactWeights/interactRadii
function arrayInputRow(label, arr, onChange) {
    const row = document.createElement("div");
    row.style = "margin:6px 0;";
    const title = document.createElement("span");
    title.textContent = `${label}: `;
    row.appendChild(title);

    arr.forEach((val, idx) => {
        const input = document.createElement("input");
        input.type = "number";
        input.value = val;
        input.style = "width:45px; margin-left:6px";
        input.step = "any";
        input.oninput = (e) => onChange(idx, e.target.value);
        row.appendChild(input);
    });
    return row;
}
function showConfig() {
  const randoPS = ranFromDefault()["Default"];
  deleteScene();
  createSim("Random", deepClone(randoPS.Groups), deepClone(randoPS.GlobalConfig), scene);

  // const container = document.getElementById("configParticle");

  // if (container.classList.contains("visible")) {
  //   // fade out
  //   container.style.opacity = "0";
  //   container.addEventListener('transitionend', function handler() {
  //     container.style.display = 'none';
  //     container.classList.remove("visible");
  //     container.removeEventListener('transitionend', handler);
  //   });
  // } else {
  //   // fade in
  //   container.style.display = 'block';
    
  //   requestAnimationFrame(() => {
  //     container.classList.add("visible");
  //     container.style.opacity = "1";
  //   });
  // }
}
function createSimsFromJS()
{
    groupOfGroups.forEach(group => {
      const [key, value] = Object.entries(group)[0]; // key = "Siphon", value = { Groups, GlobalConfig }
      console.log("creating sim: ", key)
      createSim(key, deepClone(value.Groups), deepClone(value.GlobalConfig), scene);
      sims[key].translation = value.PS.translation;

  });
console.log(sims)
}
window.showConfig = showConfig;
// Main universal config changed handler
function onParticleConfigChanged() {
    // 1. Delete old scene stuff
    deleteScene();

    // 2. Re-init data arrays
    positions = [];
    velocities = [];
    meshes = [];

    //we need to define an update funciton which will handlw what parts of the scene to update
    //initThree();
    // 3. Re-create instances with new group settings
    //initInstances();
    createSimsFromJS()
}

// Your existing deleteScene() implementation (just make sure this exists!)
function deleteScene() {

    // Remove all meshes from scene
    // meshes.forEach(mesh => {
    //     scene.remove(mesh);
    //     if (mesh.geometry) mesh.geometry.dispose();
    //     if (mesh.material) mesh.material.dispose();
    // });
    meshes = [];
    positions = [];
    velocities = [];
    Object.values(sims).forEach(sim => {
      sim.deleteSystem();
    });


    // sims["sim1"].deleteSystem();
    // sims["sim2"].deleteSystem();

    //sims = {};
}



// === RESIZE HANDLER ===
function onWindowResize() {
  const container = document.getElementById('vis');
   width = container.clientWidth;
   height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
    if(renderer && composer){
        renderer.setSize(width, height);
        composer.setSize(width, height);
    }
    initThree();
    onParticleConfigChanged();
}
let lastTime = performance.now();
// === ANIMATION LOOP ===
function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const delta = (now - lastTime) / 1000; // in seconds
  lastTime = now;

  controls.update(delta);

    Object.values(sims).forEach(sim => sim.update(delta));


  // render through composer for glow
  renderer.render(scene, camera);
}
function initGEO(){
      width = window.innerWidth;
      height = window.innerHeight;
  // === INIT ===
      initThree();
      createSimsFromJS();
      showConfig();
      // createSim("sim1", deepClone(groups), deepClone(globalConfig),scene);
      // createSim("sim2", deepClone(playerUnits), deepClone(globalConfig),scene);

      //initInstances();
      animate();
      //createParticleConfigUI();
       window.addEventListener('mousedown', (e) => {
    // Only left button
    if (e.button === 0) controls.activeLook = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) controls.activeLook = false;
    });
    window.addEventListener('mouseleave', () => {
      controls.activeLook = false;
    });
}
// OPTIONAL: navigation helper
function goTo(page) {
  window.location.href = page;
}
window.goTo = goTo;