//Developed by Amitav Nott. All rights reserverd.

var players;
var ball;
var cnv;
var r = 110, g = 200, b = 250;
var dr = 10, dg = 10, db = 10;
var gameOver = false;

function centerCanvas() {
	var x = (windowWidth - width)/2;
	var y = (windowHeight - height)/2;
	cnv.position(x, 40);
}

function setup() {
	cnv = createCanvas(600, 400);
	centerCanvas();
	players = new Players();
	ball = new Ball();
	frameRate(100);
}

function windowResized() {
	centerCanvas();
}

function draw() {
	background(0);

	stroke(255);
	strokeWeight(3);
	//line(width/2, 0, width/2, height);

	var length = 10;
	var lineY = 0;
	for (var i = 0; i < height/length; i++) {
		line(width/2, lineY, width/2, lineY + length);
		lineY += length * 3;
	}

	noStroke();
	fill(r, g, b);

	if (r < 100 || r > 250) dr *= -1;
	if (g < 100 || g > 250) dg *= -1;
	if (b < 100 || b > 250) db *= -1;

	r += dr;
	g += dg;
	b += db;
	if (players.score1 != 20 && players.score2 != 20 && gameOver === false) {
		ball.check();
		players.check();
		ball.show();
		players.show();
		ball.move();
		players.move();
		players.showScore();
		textSize(10);
    	text(" Developed by: \n Amitav Nott", width-80, height-20);
	}
	if (players.score1 === 20) {
		gameOver = true;
		background(0);
		textSize(60);
		text("Player 1 wins!", width/2 - 160, height/2);
		textSize(30);
		text("Click to play again", width/2 - 120, height/2 + 50);
	}
	if (players.score2 === 20) {
		gameOver = true;
		background(0);
		textSize(60);
		text("Player 2 wins!", width/2 - 160, height/2);
		textSize(30);
		text("Click to play again", width/2 - 120, height/2 + 50);
	}
	if (mouseIsPressed && gameOver) {
		gameOver = false;
		players.score1 = 0;
		players.score2 = 0;
		ball.x = width/2;
		ball.y = width/2;
	}
}

function keyPressed() {
	if (keyCode == 87) players.moveUp1 = true;
	if (keyCode == 83) players.moveDown1 = true;
	if (keyCode == UP_ARROW) players.moveUp2 = true;
	if (keyCode == DOWN_ARROW) players.moveDown2 = true;
}

function keyReleased() {
	if (keyCode == 87) players.moveUp1 = false;
	if (keyCode == 83) players.moveDown1 = false;
	if (keyCode == UP_ARROW) players.moveUp2 = false;
	if (keyCode == DOWN_ARROW) players.moveDown2 = false;
}
