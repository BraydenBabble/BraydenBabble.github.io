alert("BraydenBabble needs access to your camera and microphone to work properly. When prompted, select Allow.");

var front = false;
var video = document.querySelector('video');
var constraints = { video: { facingMode: (front? "user" : "environment"), width: 640, height: 480  } };
navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
video.srcObject = mediaStream;
video.onloadedmetadata = function(e) {
video.play();
};
})
.catch(function(err) { console.log(err.name + ": " + err.message); })
