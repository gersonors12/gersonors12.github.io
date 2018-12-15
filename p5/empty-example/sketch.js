var array = [
	[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 2, 2, 2, 0, 2, 2, 2, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 2, 2, 2, 0, 2, 2, 2, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 2, 0, 0, 2, 2, 2, 0, 0, 2, 1, 0, 0],
	[0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];
var a = 0;
function setup() {
	createCanvas(600, 400);
	aa1 = new skull();
	aa2 = new skull();
	aa3 = new skull();
}
function draw() {
		background(30, 100, 200);

		push();
		aa1.huh(10, 20, 0);
		aa1.render(1, color(0,0,0), color(0, 0, 0, 100));
		pop();
		push();
		aa2.huh(100, 20, 0);
		aa2.render(1, color(0, 255, 0), color(0, 255, 0, 100));
		pop();
		push();
		aa3.huh(190, 20, 0);
		aa3.render(2, color(300, 100, 255), color(0, 0, 55, 100));
		pop();
		
}
function skull() {
	noStroke();
	this.render = function(shape, c1, c2, c3, c4) {
		for (var i = 0; i < array.length; i++) {
			for (var j = 0; j < array.length; j++) {
				a = array[j][i];
				if(a === 0) { fill(255, 0); }
				if(a === 1) { fill(c1); }
				if(a === 2) { fill(c2); }
				if(a === 3) { fill(255); }

				if(shape === 1) {
					ellipse((i * array.length), (j * array.length), array.length, array.length);
				}
				if (shape === 2) {
					ellipse((i * array.length), (j * array.length), array.length, array.length);
				}
				
			}
		}
	}
	var inc = 0;
	this.huh = function(posX, posY, speed) {
		var spin = 0 + sin(inc)*0;
		inc += speed;
		console.log(spin);
		translate(posX, posY);
		scale(.5);
		rotate(radians(spin));
	}
}