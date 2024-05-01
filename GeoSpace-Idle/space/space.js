let height, width;
let shiftX = 0;
let shiftY = 0;
let circSize = 50;
let circD = [];
let circX = [];
let circY = [];
let x1 = 25;
let y1 = 0;
let strokeColor = 255;
let fillColor = [0,0,0,0]
const circNumb = 500;
let x = 0;
let fillRGB = [0,0,0];
let dLogCurrent = 1;
//dialogue
const dLog = ["hello, do you know where you are?","it is not often you stumble upon a one dimensional point",
                "i have a feelin you don't do things the normal way","anyway, welcome, you'll find out dimensions have a way of...changing...",
                "to survive you must become more than a point: you have to become greater, become more, become...like me","Good luck and",
                "Welcome to the GeoSpace","Now your discovery can begin"];
//saves(key,value);
//localStorage.clear();
document.addEventListener("DOMContentLoaded", function(){

   

    width = window.innerWidth;
    height = window.innerHeight;
    y1 = height;
   
    
    
    setupButtons();
    checkSave();
    //make intial circle coord
    if(true){

        createCircWave(0,height,50,50);
        createCircWave(0,25,-50,50);
        document.getElementById("da-body").addEventListener("click", dLogger);
    }



 });
function goTo(page){
    window.location.href = page;
}
//get current game state
function checkSave(){
    if(true){
        if(true){
            document.getElementById('interface').style.height = "300px";
            //document.getElementById("blob").style.display = "none";
            areaOne();
            if(getSave('act1')==='1'){
                
            }else{}
        }else{}
    
        let audio = new Audio('../assets/Bluebird.mp3');
        audio.play();
    }
}
function setupButtons() {
    document.getElementById('homeGoTo').addEventListener('click', function() {
        goTo('../index.html');
    });
    
    document.getElementById('Menu').addEventListener('click', function() {
        goTo('home.html');
    });
    document.getElementById('Shapes').addEventListener('click', function() {
        goTo('../shapes/shapeTesting.html');
    });
}
//clicker for dialogue starts the tutorial 
function dLogger(){
    
    if(dLogCurrent<dLog.length){
        const dete = document.getElementById("d-et-e").innerText = dLog[dLogCurrent];
        
        if(dLogCurrent ===4){
            fillRGB[0] =250, fillRGB[1]=150, fillRGB[2]=240, strokeColor = 'black';
        }
        if(dLogCurrent ===5){
            fillRGB[0] =50, fillRGB[1]=105, fillRGB[2]=255, strokeColor = 'black';
        }
        if(dLogCurrent ===6){
            fillRGB[0] =250, fillRGB[1]=100, fillRGB[2]=240, strokeColor = 'white';
        }
        if(dLogCurrent ===7){
            fillRGB[0] =0, fillRGB[1]=255, fillRGB[2]=200, strokeColor = 'black';
            //insert alec codepen for shape creation
            document.getElementById('interface').style.height ='300px';
        }
        if(dLogCurrent ===8){
            fillRGB[0] =0, fillRGB[1]=0, fillRGB[2]=0, strokeColor = 'black';
            //set new event
            saves('tutorial','true');
            remove();
            areaOne();
           // goTo('home.html');

        }
        if(dLogCurrent ===9){
            fillRGB[0] =0, fillRGB[1]=0, fillRGB[2]=0, strokeColor = 'black';
            
            //insert alec codepen for shape creation
            
        }
        dLogCurrent++;
    }if(dLogCurrent<0){
        dLogCurrent = 0;
    }
}
function saves(key,value){
    localStorage.setItem(key,value);
}
function getSave(key){
    return localStorage.getItem(key);
}
function areaOne(){

    // for (let x = 0; x < 300; x++) {
    //     const pat = document.createElement('img');
    //     pat.src = "/GeoSpace-idle/assets/firstABack.svg";
    //     pat.style.position = "absolute";
    //     pat.style.left = ""+shiftX+"%";
    //     pat.style.top = ""+shiftY+"%";
    //     pat.style.transform = "scale(1,1)";
    //     document.getElementById('da-body').appendChild(pat);
    //     shiftX+=7;
    //     if(shiftX>=100){
    //         shiftY+=10;
    //         shiftX = 0;
    //     }
    // }
    // const crys = document.createElement('img');
    // crys.src = "/GeoSpace-idle/assets/crystal.svg";
    // crys.style.position = "absolute";
    // crys.style.right = "10%";
    // crys.style.top = "10%";
    // crys.classList.add('breathe');
    // document.getElementById('da-body').appendChild(crys);
}
function setup(){
    
    createCanvas(width, height);
    background(5);

}
function draw(){
        stroke(strokeColor);
        fill(fillRGB[0],fillRGB[1],fillRGB[2]);
        if(false){
            for (let z = 0; z <circX.length; z++) {
                circle(circX[z],circY[z],circD[z]);
                
            }
        }
        if(true){
            circle(circX[x],circY[x],circD[x]);
            if(x<circX.length){
                x++; 
            }
            if(x === circX.length/2){
                //const dete = document.getElementById("d-et-e").innerText = dLog[0];
                //document.getElementById('interface').style.height = "300px"; 

            }
            if(x>=circX.length-1 && getSave('startingEvent')==='false'){
                saves('startingEvent','true');
                // for (let y = 0; y < circX.length; y++) {
                //     circle(circX[y],circY[y],circD[y]);
                //     y++;
                // }

            }
        }
        
        // if(x>=circX.length ){
        //     x = 0;
        //     strokeColor = 0;
        // }
        
}
function createCircWave(startX,startY,scaler,startSize){
    x1 = startX;
    y1 = startY;
    circsize = startSize;
    for (let x = 0; x < circNumb; x++) {
        circX.push(x1);
        circY.push(y1);
        circD.push(circSize);
        x1+=50;
        if(x1 >= width){
            x1 = startX;
            y1 -=scaler;
            circSize-=2.6;
        }
        
    }
}