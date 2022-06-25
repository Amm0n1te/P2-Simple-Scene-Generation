const GRASSAMOUNT = 1000;
const SECONDGRASS = GRASSAMOUNT/2;
const DEFAULTSIZE = 50;  
let grassX = [];
let grassY = [];
let grass2X = [];
let grass2Y = [];

function setup() {
    console.log("setup");
    createCanvas(600, 600);
    for (let i=0; i<GRASSAMOUNT; i++) {
        //y=45lnx + 10.  random() is x
        grassY[i] = -(45*Math.log(random())) + height/2;
        grassX[i] = random()*width;
    }
    grassY.sort();
}




function draw() {
    fill(212, 172, 103); 
    background(0, 105, 183);
    fill(212, 172, 103);
    let ground = rect(-20, height/2, width+40, height);  
    fill(211, 52, 235);
    for (let i=0; i<GRASSAMOUNT; i++) {
        //circle(grassX[i], grassY[i], DEFAULTSIZE*((grassY[i]-height/2)/(height/2)));
        line(grassX[i], grassY[i], grassX[i], grassY[i]+DEFAULTSIZE*( (grassY[i]-height/2)/(height/2) ));
    }
}


function test() {
    console.log(string)
};

clicker.onclick = setup;

