var isThisThingOn : boolean = false;

var rotatePart : Transform;
var anglePart : Transform;
var rotateSpeed : float = 5;
var elevSpeed : float = 5;
var minElev : float = 0;
var maxElev : float = 85;

var firer : Transform;
var bullet : Rigidbody;
var power : float = 6000;

var cannonCamera : Camera;
var boom : AudioClip;


function Update () {
	//TURN
	if (isThisThingOn){	
		var v : float = Input.GetAxis("Vertical") * Time.deltaTime * elevSpeed;
		var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * rotateSpeed;
		var elev : float = anglePart.transform.eulerAngles.x;
	
		rotatePart.Rotate(0, h, 0);
		anglePart.transform.eulerAngles.x = Mathf.Clamp((elev + v), minElev, maxElev); 
		
		
		//FIRE
		if(Input.GetButtonDown("Fire3")){
			var instance: Rigidbody = Instantiate(bullet, firer.position, firer.rotation);
			var fwd: Vector3 = firer.TransformDirection(Vector3.forward);

			instance.AddForce(fwd * power);
		
			AudioSource.PlayClipAtPoint(boom, transform.position);
		}
	}	
}


function TurnOnOff (turnedOn : boolean){
 	isThisThingOn = turnedOn;
}


