//cc and freestanding
var maxHitPoints : int = 0;
var armorMultiplier : float = 1;
var disableAt : int = 0;
var regenRate : int = 0;

//damage
var smoke : GameObject;
//destroy
var explode : GameObject;
var explodeSound : AudioClip;






//----
//CC only
var rootObject : GameObject;

//----
//Dynamic attributes
var powered : boolean = false;
var currentHitPoints : int = 0;
var currentDamage : float = 0;




//ASSESS DAMAGE FUNCTION - Called from 'CCStructureMesh' script with 'GetComponent'

function AssessDamage(hitPointDamage : int){
	//CALCULATE DAMAGE - shields irrelevant here - they can be self-contained.
	print("CCStructureRoot: calculating damage");
	currentDamage = (hitPointDamage/armorMultiplier);
	currentHitPoints = (currentHitPoints - currentDamage);
	
	//SEND DAMAGE UP
	transform.parent.GetComponent(CCRoot).RootDamage(currentDamage);

	//DISABLE OR DESTROY CC STRUCTURE
	if(currentHitPoints <= 0) {
		//'destroyed' smoke
		var destroySmoke : GameObject;
		destroySmoke = Instantiate(smoke, transform.position, transform.rotation);
						
		yield WaitForSeconds(3);
		
		//'destroyed' explosion	
		var explodeParticles : GameObject;
		explodeParticles = Instantiate(explode, transform.position, transform.rotation);
		
		AudioSource.PlayClipAtPoint(explodeSound, transform.position);
		Destroy (gameObject, 0);
		print("CCStructureRoot: Structure DESTROYED");
	}
	
	else {
		if(currentHitPoints <= disableAt) {
			print("CCStructureRoot: Structure DISABLED");
			var damageSmoke : GameObject;
			damageSmoke = Instantiate(smoke, transform.position, transform.rotation);
			rootObject.GetComponent(CCRoot).ModuleGone();
			//HOW TO DISABLE? this sucks. >> this.GameObject.SendMessage(
		}
	}
}