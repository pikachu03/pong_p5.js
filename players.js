function Players() {
  this.x1 = 40;
  this.x2 = width-60;
  this.y1 = 40;
  this.y2 = 40;
  this.moveUp1 = false;
  this.moveUp2 = false;
  this.moveDown1 = false;
  this.moveDown2 = false;
  this.score1 = 0;
  this.score2 = 0;

  this.show = function() {
    rect(this.x1, this.y1, 20, 100);
    rect(this.x2, this.y2, 20, 100);
  }

  this.check = function() {
    if (this.y1 < -1) this.y1 = 0;
    if (this.y2 < -1) this.y2 = 0;
    if (this.y1 > height - 99) this.y1 = height - 100;
    if (this.y2 > height - 101) this.y2 = height - 100;
  }

  this.move = function() {
    if (this.moveUp1) this.y1 -= 10;
    if (this.moveDown1) this.y1 += 10;
    if (this.moveUp2) this.y2 -= 10;
    if (this.moveDown2) this.y2 += 10;
  }

  this.showScore = function() {
    stroke(0);
    fill(255);
    textSize(20);
    text("Score: " + this.score1, 60, 20);
    text("Score: " + this.score2, width - 120, 20);
  }
}
