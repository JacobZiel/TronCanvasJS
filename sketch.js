//#region Variables
let s;
let p;
let scl = 5;
let arrowUp = false;
let arrowDown = false;
let arrowLeft = false;
let arrowRight = false;
let wUp = false;
let sDown = false;
let aLeft = false;
let dRight = false;
pointsBlue = 0;
pointsRed = 0;
let press = false;
let start = true;
let mainFont

function preload() {
  mainFont = loadFont('./font.ttf')
}

function setup() {
  createCanvas(800, 500);
  s = new Bike(00, 250, "red");
  p = new Bike(800, 250, "green")
  frameRate(60);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, 350, 200);
  if (d < 100) {
    press = true;
  }
}

function draw() {
  menu()
  if (press) {
    start = false;
    background(21, 32, 51);
    s.update();
    s.show();
    p.update();
    p.show();
    s.total++
    p.total++
    p.death();
    s.death();
    textSize(12);
    fill("red")
    text(`P1: ${pointsBlue}`, 50, 30);
    text("WSAD", 50, 480);
    fill("green")
    text(`P2: ${pointsRed}`, 300, 30);
    text("↑↓←→", 700, 480);
    fill("yellow")
    text("ENTER to start", 610, 30);
  }
}

function menu() {
  background(21, 32, 51);
  textFont(mainFont)
  textSize(26)
  fill("Red")
  let title = text("Tron 2000", 275, 140);
  fill("yellow")
  textSize(16)
  let startText = text("START", 350, 200);
  fill("yellow")
  textSize(8)
  let foot = text("by jz", 370, 400);
}

function keyPressed() {
  switch (keyCode) {
    case 38:
      if (arrowUp) {
        p.dir(0, -0.5);
        arrowDown = false;
        arrowLeft = true;
        arrowRight = true;
      }
      break;
    case 40:
      if (arrowDown) {
        p.dir(0, 0.5);
        arrowLeft = true;
        arrowRight = true;
        arrowUp = false;
      }
      break;
    case 39:
      if (arrowRight) {
        p.dir(0.5, 0);
        arrowUp = true;
        arrowDown = true;
        arrowLeft = false;
      }
      break;
    case 37:
      if (arrowLeft) {
        p.dir(-0.5, 0);
        arrowUp = true;
        arrowDown = true;
        arrowRight = false;
      }
      break;
    case 87:
      if (wUp) {
        s.dir(0, -0.5)
        sDown = false;
        aLeft = true;
        dRight = true;
      }
      break;
    case 83:
      if (sDown) {
        s.dir(0, 0.5)
        wUp = false;
        aLeft = true;
        dRight = true;
      }
      break;
    case 68:
      if (dRight) {
        s.dir(0.5, 0);
        aLeft = false;
        wUp = true;
        sDown = true;
      }
      break;
    case 65:
      if (aLeft) {
        s.dir(-0.5, 0);
        dRight = false;
        wUp = true;
        sDown = true;
      }
      break;
    case 13:
      if(press){
      this.setup()
      p.dir(-0.5, 0);
      s.dir(0.5, 0);
      gameStart = true;
      arrowUp=true;
      arrowDown=true;
      wUp=true;
      sDown=true;
      }
      break;
    default:
      break;
  }
}