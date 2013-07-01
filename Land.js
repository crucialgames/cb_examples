
//IGNORE COLLISION WITH PLAYER
function Awake() {
    var playerx = GameObject.FindGameObjectWithTag("Player").transform; 
    Physics.IgnoreCollision(playerx.collider, collider);
}

function OnCollisionEnter(col : Collision) {
		if(col.gameObject.tag == "Projectile"){
		
			col.gameObject.GetComponent("Projectile").DetachParticles();
			Destroy (col.gameObject);
		}
		
	}
