
//StructureIdentify and CCStructureIdentify are currently identical.
//Except that CCStructureIdentify sends AddOne() and SubtractOne() to CCIdentify.

var structureTeam : int;
var structureType : int;
//structureType - 0: NoStructure 1:HQ 2:Lift 3:NoLift

var friendCursor : GameObject;
var enemyCursor : GameObject;

private var thisStructure : GameObject;
private var nullStructure : GameObject = null;

private var vehicleScript : Vehicle;



function Start(){
	thisStructure = this.gameObject;
}


//Flyover Cursor Functions
function OnTriggerEnter(col: Collider) {

	if (col.gameObject.tag == "Player"){
	    vehicleScript = col.gameObject.GetComponent("Vehicle");
		col.gameObject.SendMessage("DockData", thisStructure);
		
		vehicleScript.sTeam = structureTeam;
		vehicleScript.sType = structureType;
		
		if (vehicleScript.vehicleTeam == structureTeam){
			friendCursor.renderer.enabled = true;
		}
		else {
			enemyCursor.renderer.enabled = true;
		}
	}
}

function OnTriggerExit (col : Collider){
	if(col.gameObject.tag == "Player"){
		FlyoverCursorsOff();
		
		col.gameObject.SendMessage("DockData", nullStructure);
		vehicleScript.sType = 0;
	}
}


//Access the following functions from other scripts? Rethink this.
function FlyoverCursorsOff(){
		friendCursor.renderer.enabled = false;
		enemyCursor.renderer.enabled = false;
}

function FlyoverCursorsOn(){
		friendCursor.renderer.enabled = true;
}


