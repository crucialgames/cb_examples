
var ccCursor : GameObject;
var ccTeam : int;
var overStatus : int = 0;


function OnTriggerEnter(col: Collider) {
	if (col.gameObject.tag == "Player"){
		AddOne();
	}
}

function OnTriggerExit(col: Collider) {
	if (col.gameObject.tag == "Player"){
		SubtractOne();
	}
}

function AddOne(){
	overStatus++;
	ccCursor.renderer.enabled = true;
	print("CCIdentify: We're over the Command Center!");
}

function SubtractOne(){
	overStatus--;
	if(overStatus == 0){
		ccCursor.renderer.enabled = false;
		print("CCIdentify: We're clear of the Command Center!");
	}
}