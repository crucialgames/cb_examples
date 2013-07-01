
var heightFromGround : float = 75;
var speed : float = 100.0;
var rotateSpeed : float = 100.0;
var strafeSpeed : float = 10.0;
var layerShift : int;
var rayLength : float = 2000;

private var controller : CharacterController;
private var forward : Vector3;
private var right : Vector3;
private var curSpeed : float = 0;
private var sideSpeed : float = 0;
private var layerMask : int;
private var chopperHigh : boolean = false;


function Start () {
	controller = GetComponent(CharacterController);
	layerMask = 1 << layerShift;
}

function Update (){

	//Keep Chopper (heightFromGround) above ground
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, -Vector3.up, hit, rayLength, layerMask)) {
		transform.position.y = hit.point.y + heightFromGround;
		
		//var distanceToGround = hit.distance;
        //print(distanceToGround);
    }
    
	// Move forward / backward
	forward = transform.TransformDirection(Vector3.forward);
	curSpeed = (Input.GetAxis ("Vertical") * (speed));
	controller.Move((forward * curSpeed) * Time.deltaTime);

	// Rotate around y - axis
	transform.Rotate(0, Input.GetAxis ("Horizontal") * ((rotateSpeed) * Time.deltaTime), 0);

	// Strafe. This kind of sucks. It works fine, it just sucks.
	//right = transform.TransformDirection(Vector3.right);
	//sideSpeed = (Input.GetAxis ("Mouse X") * (strafeSpeed * Time.deltaTime));
	//controller.Move(right * sideSpeed);
	
	//Change Altitude. This currently sucks.
	/*
	if(Input.GetButton("Fire3")){
		if (chopperHigh){
    		heightFromGround = 75;
    		chopperHigh = false;
    		print("going low!");
    	}
    	
    	else{
    		heightFromGround = 1000;
    		chopperHigh = true;
    		print("going high!");
    	}
    }
    */    
    
}



