
let gameStart = false;

function Bike(x, y, color) {
  this.x = x;
  this.y = y;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];


  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.death = function () {

    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y)
      let b = dist(s.x, s.y, pos.x, pos.y);
      let g = dist(p.x, p.y, pos.x, pos.y);
      if(gameStart){
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        this.xspeed = 0
        this.yspeed = 0
        if (p.total == 0) {
          pointsBlue++
          gameStart = false;
        } else if (s.total == 0) {
          pointsRed++
          gameStart = false;
        }
        setup()
      } else if (b < 1) {
        textCheck2 = false;
        s.total = 0;
        s.tail = [];
        s.xspeed = 0
        s.yspeed = 0
        pointsRed++
        gameStart = false;
        setup()
      } else if (g < 1) {
        textCheck2 = false;
        p.total = 0;
        p.tail = [];
        p.xspeed = 0
        p.yspeed = 0
        pointsBlue++
        gameStart = false;
        setup()
      }
    
    }
  }
}
 
  this.update = function () {

    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }
 
  this.show = function () {
    fill(color);
    stroke(0, 0, 0, 0)
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }
}


