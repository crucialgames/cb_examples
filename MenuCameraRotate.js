#pragma strict

var rotationSpeed : float = 10;



function Update () {
	transform.Rotate(Vector3(0, rotationSpeed * Time.deltaTime, 0));
}