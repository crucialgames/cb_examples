	
var chopperParticleL : ParticleEmitter;
var chopperParticleR : ParticleEmitter;

var chopperParticlesOn : boolean = true;


//Turn Chopper's contrails on and off
function ParticleSwitch(){
	if (chopperParticlesOn){
		chopperParticleL.GetComponent("ParticleEmitter").minEmission = 0;
		chopperParticleL.GetComponent("ParticleEmitter").maxEmission = 0;
		chopperParticleR.GetComponent("ParticleEmitter").minEmission = 0;
		chopperParticleR.GetComponent("ParticleEmitter").maxEmission = 0;
		chopperParticlesOn = false;
	}
	else{
		chopperParticleL.GetComponent("ParticleEmitter").minEmission = 30;
		chopperParticleL.GetComponent("ParticleEmitter").maxEmission = 50;
		chopperParticleR.GetComponent("ParticleEmitter").minEmission = 30;
		chopperParticleR.GetComponent("ParticleEmitter").maxEmission = 50;
		chopperParticlesOn = true;
	}
}
