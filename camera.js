//
//
//
var cameraOptions = { quality: 50, destinationType: Camera.DestinationType.FILE_URI };

function getCamera() {
	navigator.camera.getPicture(onSuccessCamera, onFailCamera, cameraOptions);
}

function onSuccessCamera(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFailCamera(message) {
    alert('Failed because: ' + message);
}