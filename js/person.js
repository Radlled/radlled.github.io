var imgMih = document.getElementById('mihImg');

var imgSid = document.getElementById('sidImg');

var formMih = document.getElementById('mihForm');
var formSid = document.getElementById('sidForm')

imgMih.onclick = function () {
	formMih.style.display = ("block");
	formSid.style.display = ('none');
}

imgSid.onclick = function () {
	formMih.style.display = ("none");
	formSid.style.display = ('block');
}
