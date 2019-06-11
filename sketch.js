var s;
let p;
var scl = 5;
let arrowUp = true;
let arrowDown = true;
let arrowLeft = true;
let arrowRight = true;
let wUp = true;
let sDown = true;
let aLeft = true;
let dRight = true;
let wait = new Audio("./engine.wav");
let drive = new Audio("./cycle.wav")
let gameOver = new Audio("./gameover.wav")
pointsBlue = 0;
pointsRed = 0;
drive.pause();
let press = false;
let start = true;
let mainFont

function preload() {
  mainFont = loadFont('./font.ttf')
}

function setup() {
  createCanvas(800, 500);
  s = new Snake(00, 250, "red");
  p = new Snake(800, 250, "green")
  frameRate(30);
  wait.play();
}

function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 350, 200);
  if (d < 100) {
    press = true;
    // Pick new random color values
  }
}

function draw() {
menu()
  if (press) {
     start = false;
    background(21, 32, 51);
    s.death();
    s.update();
    s.show();
    p.death();
    p.update();
    p.show();
    s.total++
    p.total++
    textSize(16);
    fill("blue")
    text(`P2: ${pointsBlue}`, 50, 30);
    fill("yellow")
    text(`P1: ${pointsRed}`, 650, 30);
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
      arrowDown = false;
      arrowLeft = true;
      arrowRight = true;
      if (arrowUp) {
        p.dir(0, -1);
      }
      break;
    case 40:
      arrowLeft = true;
      arrowRight = true;
      arrowUp = false;
      if (arrowDown) {
        p.dir(0, 1);
      }
      break;
    case 39:
      arrowUp = true;
      arrowDown = true;
      arrowLeft = false;
      if (arrowRight) {
        p.dir(1, 0);
      }
      break;
    case 37:
      arrowUp = true;
      arrowDown = true;
      arrowRight = false;
      if (arrowLeft) {
        p.dir(-1, 0);
      }
      break;
    case 87:
      sDown = false;
      aLeft = true;
      dRight = true;
      if (wUp) {
        s.dir(0, -1)
      }
      break;
    case 83:
      wUp = false;
      aLeft = true;
      dRight = true;
      if (sDown) {
        s.dir(0, 1)
      }
      break;
    case 68:
      aLeft = false;
      wUp = true;
      sDown = true;
      if (dRight) {
        s.dir(1, 0);
      }
      break;
    case 65:
      dRight = false;
      wUp = true;
      sDown = true;
      if (aLeft) {
        s.dir(-1, 0);
      }
      break;
    case 13:   
      this.setup()
      break;
    default:
      break;
  }
}