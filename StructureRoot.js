//cc and freestanding
var maxHitPoints : int = 0;
var armorMultiplier : float = 0;
var disableAt : int = 0;
var regenRate : int = 0;

//damage
var smoke : GameObject;
//destroy
var explode : GameObject;
var explodeSound : AudioClip;

//----
//freestanding only
var mass : int = 0;
var powerRequired : int = 0;





//----
//Dynamic attributes
var powered : boolean = false;
var currentHitPoints : int = 0;
var currentDamage : float = 0;




//ASSESS DAMAGE FUNCTION - Called from 'StructureMesh' script with 'GetComponent'

function AssessDamage(hitPointDamage : int){
	//CALCULATE DAMAGE - shields irrelevant here - they can be self-contained.
	print("StructureRoot: calculating damage");
	currentDamage = (hitPointDamage/armorMultiplier);
	currentHitPoints = (currentHitPoints - currentDamage);
	



	//DISABLE OR DESTROY STRUCTURE
	if(currentHitPoints <= 0) {
		//disable smoke
		var damageParticles : GameObject;
		damageParticles = Instantiate(smoke, transform.position, transform.rotation);
						
		yield WaitForSeconds(3);
		
		//destroy explosion	
		var explodeParticles : GameObject;
		explodeParticles = Instantiate(explode, transform.position, transform.rotation);
		
		AudioSource.PlayClipAtPoint(explodeSound, transform.position);
		Destroy (gameObject, 0);
		print("StructureRoot: Structure DESTROYED");
	}
	
	else {
		if(currentHitPoints <= disableAt) {
			print("StructureRoot: Structure DISABLED");
			//HOW TO DISABLE? this sucks. >> this.GameObject.SendMessage(
		}
	}
}