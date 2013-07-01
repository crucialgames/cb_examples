var thisWellCore : GameObject;

function Start(){
	thisWellCore = this.gameObject;
}

function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag == "Player"){
		col.GetComponent("Vehicle").overWellCore = true;
		print("WellCore: Over Well Core!");
		col.gameObject.SendMessage("WellCoreData", thisWellCore);
	}
}

function OnTriggerExit (col : Collider){
	if(col.gameObject.tag == "Player"){
		col.GetComponent("Vehicle").overWellCore = false;
		print("WellCore: We're Clear of the Well Core!");
		//col.gameObject.SendMessage("WellCoreData", null);
		//is this necessary? Yes, but it's broken.
		//Might require a custom 'set to null' function in target script (ChopperAction).
	}
}


//Should we be sending transforms rather than gameObjects?
//Across all/most scripts?
//Look into this.
