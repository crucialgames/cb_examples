
var rootMaxHP : int = 500;
var ccStructures : GameObject[];

var rootCurrentHP : int = 500;
private var modules : int = 3;

//This script can only be finished after Structure Arrays are implemented.

function Start(){
	//rootCurrentHP = rootMaxHP;
}



function RootDamage(finalDamage : int){
	//CALCULATE ROOT DAMAGE
	print("CCRoot: calculating root damage");
	rootCurrentHP = (rootCurrentHP - finalDamage);
	
	//DESTROY ENTIRE COMMAND CENTER
	if(rootCurrentHP <= 0) {
		print("CCRoot: Command Center DESTROYED");
	}
}

function ModuleGone(){
	modules--;
	//is this wrong? should the main shield go offline
	//if *any* of the three modules is disabled? 
	if(modules == 0){
		print("CCRoot: disable main shield until a module returns");
	}
	else{
		print("CCRoot: disable main shield temporarily");
	}
}

function ModuleReturn(){
	if(modules == 0){
		print("CCRoot: re-enable main shield");
	}
	modules++;
}