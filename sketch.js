const GRASSAMOUNT = 2000;
const SECONDGRASS = GRASSAMOUNT/2;
const DEFAULTSIZE = 50;  
let grassX = [];
let grassY = [];
let grass2X = [];
let grass2Y = [];
let sunX = 500;
let sunRadius = 30;
let sunHeight = 70;

function setup() {
    console.log("setup");
    createCanvas(600, 600);
    for (let i=0; i<GRASSAMOUNT; i++) {
        //y=45lnx + 10.  random() is x
        grassY[i] = -(45*Math.log(random())) + height/2;
        grassX[i] = random()*width;
    }
    grassY.sort();
    angleMode(DEGREES);

}


let wind = 0;
let windspeed = 0.1;
let windpress = 20;
let direction = 1;

function draw() {
    noStroke(0);
    fill(212, 172, 103); 
    background(0, 105, 183);
    fill(206, 165, 109);
    let ground = rect(-20, height/2, width+40, height);  
    stroke(155, 108, 54);
    wind += windspeed;
    let noisewind = noise(wind);
    if (keyIsDown(32)) {
        console.log("spacebar detected");
        windspeed = 0.5;
        windpress = 100;
    } else {
        windspeed = 0.1;
        windpress = 20;
    }
    for (let i=0; i<GRASSAMOUNT; i++) {
        //circle(grassX[i], grassY[i], DEFAULTSIZE*((grassY[i]-height/2)/(height/2)));
        line(grassX[i], grassY[i], grassX[i] + direction * (noisewind*windpress)*((grassY[i]-height/2)/(height/2)), grassY[i]-DEFAULTSIZE*( (grassY[i]-height/2)/(height/2) ));
    }
    noStroke();
    fill(255, 224, 130);
    circle(sunX, sunHeight, sunRadius+60);
    fill(235, 189, 52);
    circle(sunX, sunHeight, sunRadius);
    sunX -= 0.1;
    if (sunX < -100) sunX = 700
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        direction = -1;
    }
    else if (keyCode == RIGHT_ARROW) {
        direction = 1;
    }
}



clicker.onclick = setup;
