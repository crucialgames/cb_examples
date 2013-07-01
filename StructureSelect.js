
//Associated Cursors. Set these in the Inspector.
var highlightCursor : GameObject;
var selectCursor : GameObject;

//Cameras
var camView : GameObject;
var camHi : GameObject;


//Switches
var selectEnabled : boolean = false;

static var currentStructure : GameObject = null;
static var activeCursorS : GameObject;
static var activeCursorH : GameObject;



//Mouse functions
function OnMouseEnter () {
	if (selectEnabled){
		if (currentStructure != this.gameObject){
			HighlightThis();
		}
	}
}

function OnMouseExit () {
	if (selectEnabled){
		if (currentStructure != this.gameObject){
			DeHighlightThis();
		}
		if (currentStructure != null){
			//GET CAMERA FROM currentStructure AND ENABLE
		}
	}
}

function OnMouseDown () {
	if (selectEnabled){
	
		if(currentStructure == null) {
			DeHighlightThis();
			SelectThis();
		}
		else {
			if (currentStructure == this.gameObject){
				DeselectAnything();
				HighlightThis();
			}
			else {
				DeselectAnything();
				DeHighlightThis();
				SelectThis();
			}
		}

	}
}

function HighlightThis(){
	highlightCursor.renderer.enabled = true;
	activeCursorH = highlightCursor;
	camHi.camera.enabled = true;
	//highlightStructure = this.gameObject?
}

function DeHighlightThis(){

	if(activeCursorH){
		activeCursorH.renderer.enabled = false;
		activeCursorH = null;
	}
	camHi.camera.enabled = false;
}

function SelectThis(){
	selectCursor.renderer.enabled = true;
	activeCursorS = selectCursor;
	
	currentStructure = this.gameObject;
	currentStructure.SendMessage("TurnOnOff", true);
	print("StructureSelect: Selected!");
	
	camView.camera.enabled = true;
}

function DeselectAnything(){
	activeCursorS.renderer.enabled = false;
	activeCursorS = null;
	
	currentStructure.SendMessage("TurnOnOff", false);
	
		currentStructure.GetComponent("StructureSelect").camView.camera.enabled = false;
		
		
	currentStructure = null;
	print("StructureSelect: Deselected!");
	
	//camView.camera.enabled = false;
}


/*
SHORT VERSION
function HighlightThis(){
	highlightCursor.renderer.enabled = true;
}

function DeHighlightThis(){
	highlightCursor.renderer.enabled = false;
}

function SelectThis(){
	selectCursor.renderer.enabled = true;
	
	currentStructure = this.gameObject;
	currentStructure.SendMessage("TurnOnOff", true);
}

function DeselectAnything(){
	selectCursor.renderer.enabled = false;
	
	currentStructure.SendMessage("TurnOnOff", false);
	currentStructure = null;
}
*/