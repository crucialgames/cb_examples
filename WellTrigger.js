var wellNumber : int = 0;

function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag == "Player"){
		col.GetComponent("Vehicle").currentWell = wellNumber;
		print("XXWellTrigger: currentWell = "+wellNumber);
	}
}

function OnTriggerExit (col : Collider){
	if(col.gameObject.tag == "Player"){
		col.GetComponent("Vehicle").currentWell = 0;
		print("XXWellTrigger: currentWell = "+0);
	}
}
