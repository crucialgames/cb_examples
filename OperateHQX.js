
var isThisThingOn : boolean = false;
var vehicle : GameObject;

var selectScript : StructureSelect;


function Start() {
	selectScript = gameObject.GetComponent("StructureSelect");

}


function Update() {

	if(isThisThingOn){
		if (Input.GetButtonDown("Fire3")){
		
			isThisThingOn = false;
			
			
			//////
			selectScript.DeHighlightThis();
			
			
			
			selectScript.DeselectAnything();
			SelectDisable();
			

			
			//add animation and such.
			//the whole fire button sequence should maybe be a function
		
			//vehicle.active = true;
			vehicle.SendMessage("Deploy");
		}
	}
}

function TurnOnOff (turnedOn : boolean){
 	isThisThingOn = turnedOn;
}

function SetVehicle(flyer : GameObject){
	vehicle = flyer;
}

//Array always exists for each [WELL/CC]. Each Structure will be added to the array as it is created.
//so no need to search for tags on the fly.

//Remember: The script name is its own class.

//How to add to/subtract from the array when Structures are created or moved?
//Get tag from current well?

//move select enable/disable functions to CCRoot?

function SelectEnable(){
	var well10ArriveStructures = GameObject.FindGameObjectsWithTag("Well10Root");
	for (var w10Arrive in well10ArriveStructures){
		var selectScript : StructureSelect;
		selectScript = w10Arrive.GetComponent(StructureSelect);
		selectScript.selectEnabled = true;
		print("OperateHQX: SELECT ENABLED!");
	}
}

function SelectDisable(){
	var well10DepartStructures = GameObject.FindGameObjectsWithTag("Well10Root");
	for (var w10Depart in well10DepartStructures){
		var selectScriptAll : StructureSelect;
		selectScriptAll = w10Depart.GetComponent(StructureSelect);
		selectScriptAll.selectEnabled = false;
		//CLEAN UP ALL HIGHLIGHT CURSORS HERE
		print("OperateHQX: SELECT DISABLED!");
	}
}

