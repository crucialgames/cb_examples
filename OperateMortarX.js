//MORTAR
//SIMPLE FIRE
//ONE OR MORE SHOTS
//ALL RELOAD

var isThisThingOn : boolean = false;

var rotatePart : Transform;
var anglePart : Transform;
var rotateSpeed : float = 5;
var elevSpeed : float = 5;
var minElev : float = 0;
var maxElev : float = 85;

var bulletSpawn : Transform;
var bullet : Rigidbody;

var magazine : int = 1;
var reloadTime : float = 3;
var shotPower : float = 12;

private var shotsLeft : int = 1;
private var reloadNow : float = 0;
private var reloading : boolean = true;

var boom : AudioClip;


function Awake (){
	print("OperateMortarX: shotsLeft = "+shotsLeft);
}


function Update () {

	if(isThisThingOn){
		var v : float = Input.GetAxis("Vertical") * Time.deltaTime * elevSpeed;
		var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * rotateSpeed;
		var elev : float = anglePart.transform.eulerAngles.x;
	
		rotatePart.Rotate(0, h, 0);
		anglePart.transform.eulerAngles.x = Mathf.Clamp((elev + v), minElev, maxElev); 

		//FIRE
		if(Input.GetButtonDown ("Fire3")){
			if(shotsLeft > 0){
				var mortarABullet: Rigidbody = Instantiate(bullet, bulletSpawn.position, bulletSpawn.rotation);
				var gunFwd: Vector3 = bulletSpawn.TransformDirection(Vector3.forward);
				mortarABullet.AddForce (gunFwd * shotPower * 1000);
				
				AudioSource.PlayClipAtPoint(boom, transform.position);
	
				shotsLeft--;
				print("OperateMortarX: shotsLeft = "+shotsLeft);
			}
		}
	
		//START RELOAD CLOCK
		if(!reloading && shotsLeft == 0){			
				reloading = true;
				reloadNow = Time.time + reloadTime;
		}
	
		//RELOAD
		if(reloading && reloadNow <= Time.time){
			shotsLeft = magazine;
			reloading = false;
			print("OperateMortarX: shotsLeft = "+shotsLeft);
		}
	}
}

function TurnOnOff (turnedOn : boolean){
 	isThisThingOn = turnedOn;
}
