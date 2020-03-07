var oneTab = document.getElementById('tabOne');
var twoTab = document.getElementById('tabTwo');
var threeTab = document.getElementById('tabThree');
var fourTab = document.getElementById('tabFour');
var fiveTab = document.getElementById('tabFive');

var oneBtn = document.getElementById('BtnTabOne');
var twoBtn = document.getElementById('BtnTabTwo');
var threeBtn = document.getElementById('BtnTabThree');
var fourBtn = document.getElementById('BtnTabFour');
var fiveBtn = document.getElementById('BtnTabFive');

oneBtn.onclick = function () {
oneTab.style.display = ("block");
twoTab.style.display = ("none");
threeTab.style.display = ("none");
fourTab.style.display = ("none");
fiveTab.style.display = ("none");
}

twoBtn.onclick = function () {
oneTab.style.display = ("none");
twoTab.style.display = ("block");
threeTab.style.display = ("none");
fourTab.style.display = ("none");
fiveTab.style.display = ("none");
}

threeBtn.onclick = function () {
oneTab.style.display = ("none");
twoTab.style.display = ("none");
threeTab.style.display = ("block");
fourTab.style.display = ("none");
fiveTab.style.display = ("none");
}

fourBtn.onclick = function () {
oneTab.style.display = ("none");
twoTab.style.display = ("none");
threeTab.style.display = ("none");
fourTab.style.display = ("block");
fiveTab.style.display = ("none");
}

fiveBtn.onclick = function () {
oneTab.style.display = ("none");
twoTab.style.display = ("none");
threeTab.style.display = ("none");
fourTab.style.display = ("none");
fiveTab.style.display = ("block");
}
