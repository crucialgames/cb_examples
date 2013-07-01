var damageMultiplier : int = 100;
var sRoot : GameObject;

private var projectileDamage : int; //move this inside the function?


//IGNORE COLLISION WITH PLAYER
//can this be done with layers instead?
function Awake() {
    var playerx = GameObject.FindGameObjectWithTag("Player").transform; 
    Physics.IgnoreCollision(playerx.collider, collider);
}


//DETECT PROJECTILE COLLISIONS AND SEND DAMAGE INFO TO StructureRoot SCRIPT
function OnCollisionEnter(clsn: Collision){
	if (clsn.gameObject.tag == "Projectile"){
		
		//Calculate damage
		projectileDamage = ((clsn.gameObject.GetComponent("Projectile").damage) * (damageMultiplier/100));
	
		//Send damage to root
		sRoot.GetComponent(StructureRoot).AssessDamage(projectileDamage);

		//Deal with projectile
		clsn.gameObject.GetComponent("Projectile").DetachParticles();
		Destroy(clsn.gameObject);
	}
}
			