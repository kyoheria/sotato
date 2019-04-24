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

	if(mouseX>50 &&mouseX<150){
		if(mouseY>130&&mouseY<150){
			sotato.changeAnimation('left');
		}
	}
	if(mouseX>450 &&mouseX<550){
		if(mouseY>130&&mouseY<150){
			sotato.changeAnimation('right');
		}
	}

	drawSprites();

}
