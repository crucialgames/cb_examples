private var xLoc : float;
private var yLoc : float;


private var screenX : float;
private var screenY : float;


function Start(){
	screenX = Screen.width;
	screenY = Screen.height;
	
	xLoc = screenX/2;
	yLoc = (screenY/2) + 80;
}

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (xLoc,yLoc,120,40), null);

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (xLoc + 10,yLoc + 10,100,20), "Start Game")) {
		Application.LoadLevel (1);
	}

}

//put screen width & height variables in static function?