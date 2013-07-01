
var camCloseup : GameObject;

var camRotatorOffset : float = 0;

private var camRotator : Transform;
private var refRotation : float = 0;




function Start(){
	camRotator = this.gameObject.transform;
	refRotation = transform.parent.rotation.y;
	camRotator.rotation.y = ((camRotator.rotation.y + (refRotation * -1)) + camRotatorOffset);
	//is the above line unnecessariy complex?
}

