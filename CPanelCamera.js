
private var sWidth : float;
private var sHeight : float;

private var yPos : float;
private var xPos : float;

private var winWidth;
private var winHeight;

function Start () {
	sWidth = Screen.width;
	sHeight = Screen.height;
	xPos = (sWidth - 154)/sWidth;
	yPos = 45/sHeight;
	winWidth = 148/sWidth;
	winHeight = 142/sHeight;
	camera.rect = Rect (xPos, yPos, winWidth, winHeight);
	//camera.rect = Rect (.5, .2, .2, .2);
}


function Update (){

	//print(winHeight);
	
}