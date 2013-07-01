
var followCam : GameObject;
var newCommandCenter : GameObject;

var dStructure : GameObject = null;
private var structureLocation : Vector3;
private var dWellCore : GameObject = null; //used to get wellCoreLocation, and needs turned off.
private var wellCoreLocation : Vector3;

//var animRotateSpeed = 0.1;
//var camFollow : GameObject;

//These get data from objects on the ground
//These probably aren't necessary. These values can be set directly with GetComponent etc.
//And again, GameObject or Transform?
function DockData(whichStructure : GameObject){
	dStructure = whichStructure;
}

function WellCoreData(whichWellCore : GameObject){
	dWellCore = whichWellCore;
	wellCoreLocation = dWellCore.transform.position;
}



//These are actions called by 'Vehicle'
function NoStructure(){
	print("ChopperAction: No Structure present. Perhaps I should land.");
}

function CantLift(){
	print("ChopperAction: We can't lift that!");
	//GUI.Box( Rect( (Screen.width * 0.5) - 100, 10, 200, 25 ), "We can't lift that!" );
}

function Lift(){

	MoveIntoPlace();
	
	//Turn off collision. Chopper gets stuck without this.
	//Not sure what this is about. The structure will need to register hits while being airlifted.
	var allColliders = dStructure.GetComponentsInChildren(MeshCollider);
	for (var eachCollider : MeshCollider in allColliders) {
    	eachCollider.enabled = false;
	}
				
	//Pick up Structure
	dStructure.transform.position = Vector3(transform.position.x, transform.position.y - 40, transform.position.z);
	dStructure.transform.parent = transform;
		 		
	//Turn off flyover cursors - REDUNDANT?
	dStructure.GetComponent("StructureIdentify").FlyoverCursorsOff();
		dStructure.GetComponent("StructureIdentify").enabled = false;
}

function Dock(){

	//Give the Chopper to the HQ for later re-enable
	dStructure.gameObject.SendMessage("SetVehicle", this.gameObject);
			
	//DISABLE CHOPPER COMPONENTS
	gameObject.GetComponent(Vehicle).enabled = false;
	gameObject.GetComponent(ChopperMove).enabled = false;
	gameObject.GetComponent(ChopperFire).enabled = false;
	
	MoveIntoPlace();
	
	gameObject.GetComponent(AudioSource).enabled = false;
	gameObject.GetComponent(ChopperExhaust).ParticleSwitch();
	//all GetComponents should happen in Start();

	//DOCK STRUCTURE - TURN OFF FLYOVER CURSORS AND SELECT
	dStructure.GetComponent("CCStructureIdentify").FlyoverCursorsOff();
	dStructure.SendMessage("SelectEnable");
	dStructure.GetComponent("StructureSelect").SelectThis();
						
	//TURN OFF FOLLOW CAM	
	followCam.camera.enabled = false;
							
	print("ChopperAction: Chopper Dock Executed");
	
}
				
function Deploy(){
	gameObject.GetComponent(Vehicle).enabled = true;
	gameObject.GetComponent(ChopperMove).enabled = true;
	gameObject.GetComponent(ChopperFire).enabled = true;
	gameObject.GetComponent(AudioSource).enabled = true;
	gameObject.GetComponent(ChopperExhaust).ParticleSwitch();
	
	dStructure.GetComponent("CCStructureIdentify").FlyoverCursorsOn();
		
	//camFollow.camera.enabled = true;
}

function NewCC(){
	gameObject.GetComponent("Vehicle").overWellCore = false;
	dWellCore.gameObject.active = false;
	var cc : GameObject;
	cc = Instantiate(newCommandCenter, wellCoreLocation, Quaternion.Euler(0, 0, 0));
}

function MoveIntoPlace(){
	structureLocation = dStructure.transform.position;
	transform.position = Vector3.Slerp(transform.position, Vector3(structureLocation.x, transform.position.y, structureLocation.z), .4);
}
