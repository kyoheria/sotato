var sotato;

function preload(){
	// get API use https instead http
	
}

function setup() {
	//canvas size
	createCanvas(windowWidth, windowHeight);
	//values
  	sotato= createSprite(600, 200);
  	sotato.addAnimation('left', 'そたそっち１.png', 'そたそっち２.png');
  	sotato.addAnimation('right', 'そたそっち３.png', 'そたそっち４.png');

}

function draw() {
	backgroud();
	if(mouseX>50 &&mouseX<150){
		if(mouseY>height-150&&mouseY<height-100){
			sotato.changeAnimation('left');
			sotato.velocity.x = -2;
		}
	}
	if(mouseX>width-150 &&mouseX<width-50){
		if(mouseY>height-150&&mouseY<height-100){
			sotato.changeAnimation('right');
			sotato.velocity.x = 2;
		}
	}

	fill(223,104,168);
	rect(50,height-150,100,50);
	rect(width-150,height-150,100,50);

	drawSprites();

}
