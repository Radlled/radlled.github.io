var imgMih = document.getElementById('mihImg');
var imgSid = document.getElementById('sidImg');
var imgEgor = document.getElementById('egorImg');

var formMih = document.getElementById('mihForm');
var formSid = document.getElementById('sidForm');
var formEgor = document.getElementById('egorForm');

var closed = document.getElementById('close');
var closedtwo = document.getElementById('closetwo');

imgMih.onclick = function () {
	formMih.style.display = ("block");
	formSid.style.display = ('none');
	formEgor.style.display = ('none');
}

imgSid.onclick = function () {
	formMih.style.display = ("none");
	formSid.style.display = ('block');
	formEgor.style.display = ('none');
}

imgEgor.onclick = function () {
	formMih.style.display = ("none");
	formSid.style.display = ('none');
	formEgor.style.display = ('block');
}

closed.onclick = function () {
	formMih.style.display = ("none");
	formSid.style.display = ("none");
	formEgor.style.display = ("none");
}

closedtwo.onclick = function () {
	formMih.style.display = ("none");
	formSid.style.display = ("none");
	formEgor.style.display = ("none");
}
