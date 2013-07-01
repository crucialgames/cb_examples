//set manually by level builder
var vehicleTeam : int = 2;
//set by StructureIdentify/CCStructureIdentify
var sType : int;
var sTeam : int;
//set by WellCore
private var overWellCore : boolean = false;
//set by WellTrigger
private var currentWell : int; //this will be used for new CCs and moved/stolen structures
//set by this script
private var laden : boolean = false;

	
function Update(){
	
	if (Input.GetButtonDown("Jump")){
		if(laden){
			//Drop the structure if location is suitable
			print("Vehicle: We'll put it down when we're good and ready!");
		}
		
		else{
			//Dock or Lift
			switch(sType){
				case 0:
					gameObject.SendMessage("NoStructure");
				break;
			
				case 1:
					if(sTeam == vehicleTeam){
						gameObject.SendMessage("Dock");
					}
					else{
						print("Vehicle: DANGER - ENEMY HQ!!!");
					}
				break;
			
				case 2:
					gameObject.SendMessage("Lift");
					laden = true;
					print("Vehicle: Airlift Underway.");
				break;
			
				case 3:
					gameObject.SendMessage("CantLift");
				break;			
			}
		}
		

	}	
	
	if (Input.GetButtonDown("Fire3")){
		if (overWellCore){
			gameObject.SendMessage("NewCC");
			print("Vehicle: Command Center creation test successful!");
		}
		else{
			print("Vehicle: We can only create a new CC on an Energy Well!");
		}
	}
}

