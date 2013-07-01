


var yPos : float = 0.1;
var xPos : float = 0.1;

var winWidth = 0.1;
var winHeight = 0.1;


private var sWidth : float;
private var sHeight : float;




function Start () {
	sWidth = Screen.width;
	sHeight = Screen.height;
	//xPos = (sWidth - 154)/sWidth;
	//yPos = 45/sHeight;
	//winWidth = 148/sWidth;
	//winHeight = 142/sHeight;
	camera.rect = Rect (xPos, yPos, winWidth, winHeight);
	//camera.rect = Rect (.5, .2, .2, .2);
}


function Update (){

	//print(winHeight);
	
}