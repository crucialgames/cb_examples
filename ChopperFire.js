
var gunProjectile : Rigidbody;
var gunFireRate : float = 0.5;
var gunPower : float = 20000;
var gun : Rigidbody;

var gunMagazine : int = 7;

private var gunNextFire : float = 0;

var bombProjectile : Rigidbody;
var bombFireRate :float = 1.0;
var bombPower : float = 1500;
var bombBay : Rigidbody;

private var bombNextFire : float = 0;


function Update () {

	//FIRE FORWARD GUNS
	if(Input.GetButton("Fire1") && Time.time > gunNextFire && gunMagazine > 0) {
	    

	    gunMagazine--;
	    	
	    gunNextFire = Time.time + gunFireRate;
	        
		var gunInstance: Rigidbody = Instantiate(gunProjectile, transform.Find("chopperGun").position, transform.Find("chopperGun").rotation);
		var gunFwd: Vector3 = transform.Find("chopperGun").TransformDirection(Vector3.forward);
		
		gunInstance.AddForce (gunFwd * gunPower);
	}

	//DROP BOMBS
	if(Input.GetButton("Fire2") && Time.time > bombNextFire) {
		
		bombNextFire = Time.time + bombFireRate;
	        
		var bombInstance: Rigidbody = Instantiate(bombProjectile, transform.Find("chopperBombBay").position, transform.Find("chopperBombBay").rotation);
		var bombFwd: Vector3 = transform.Find("chopperBombBay").TransformDirection(Vector3.forward);

		bombInstance.AddForce(bombFwd * bombPower);
		
	}
}



