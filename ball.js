function Ball() {
  this.x = width/2;
  this.y = height/2;
  this.dx = 8;
  this.dy = 4;
  this.rad = 15;

  this.show = function() {
    ellipse(this.x, this.y, this.rad*2, this.rad*2);
  }

  this.move = function() {
    this.x += this.dx;
    this.y += this.dy;
  }

  this.check = function() {
    if (this.x < 60 && this.x > 40 && this.y > players.y1 && this.y < players.y1 + 50) {
        this.dx *= -1;
        this.dy *= -1;
    }

    if (this.x < 60 && this.x > 40 && this.y < players.y1 + 100 && this.y > players.y1 + 50) {
        this.dx *= -1;
        //this.dy *= -1;
    }

    if (this.x > (width-40) - 20 && this.x < width - 40 && this.y > players.y2 && this.y < players.y2 + 50) {
        this.dx *= -1;
        this.dy *= -1;
    }

    if (this.x > (width-40) - 20 && this.x < width - 40 && this.y < players.y2 + 100 && this.y > players.y2 + 50) {
        this.dx *= -1;
        //this.dy *= -1;
    }

    if (this.y < 15 || this.y > height-15) {
        this.dy *= -1;
    }

    if (this.x < 15) {
        players.score2++;
        this.dx *= -1;
    }

    if (this.x > width-15) {
        players.score1++;
        this.dx *= -1;
    }
  }

}
