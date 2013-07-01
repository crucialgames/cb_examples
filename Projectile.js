
var damage : int = 2;


var emit1 : ParticleEmitter;


function Awake() {
    var playerx = GameObject.FindGameObjectWithTag("Player").transform; 
    Physics.IgnoreCollision(playerx.collider, collider);
}


// Call this immediately before you destroy your missile
function DetachParticles()
{
    // This splits the particle off so it doesn't get deleted with the parent
    emit1.transform.parent = null;

    // this stops the particle from creating more bits
    emit1.GetComponent("ParticleEmitter").minEmission = 0;
    emit1.GetComponent("ParticleEmitter").maxEmission = 0;

    // This finds the particleAnimator associated with the emitter and then
    // sets it to automatically delete itself when it runs out of particles
    emit1.GetComponent("ParticleAnimator").autodestruct = true;
}



function Update () {

}


//shout out to Kieren Wallace of Unity Community