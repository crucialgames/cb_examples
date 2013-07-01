
var fstructure01 : GameObject;
var isThisThingOn : boolean = false;

function TurnOnOff (turnedOn : boolean){
 	isThisThingOn = turnedOn;
}

function Update(){

	if (isThisThingOn){
		if (Input.GetButtonDown ("Fire2")){
			var fs01 : GameObject;
			fs01 = Instantiate(fstructure01, Vector3(transform.position.x + 40, transform.position.y, transform.position.z + 40), Quaternion.Euler(0, 315, 0));
		}	
	}
}