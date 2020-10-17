// Sources:
// - hhtps://kourbatov.com/faq/operatin.htm - To get the concept down
// - https://medium.com/@justenphelps/mobile-os-detection-1f14b46565cc - Works better
// - https://jaketrent.com/post/addremove-classes-raw-javascript/ - Class functions

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

function getOs() {
	var osName = "unkown"
	
	if (navigator.platform.indexOf("Win") !=- 1) osName="windows";
	if (navigator.platform.indexOf("Mac") !=- 1) osName="macos";
	if (navigator.platform.indexOf("Mac") !=- 1) osName="unix";
	if (navigator.platform.indexOf("Mac") !=- 1) osName="ios";
	if (navigator.platform.indexOf("Mac") !=- 1) osName="android";
	if (navigator.platform.indexOf("Linux") !=- 1) osName="linux";
	
	return osName;
}

var osLst = {Value: ["linux", "windows", "macos"]};
var spots = ["left", "middle", "right"];

function displayOsOnSpot(osLst) {

	switch (getOs()) {
		case "windows":
			osLst.Value = ["linux", "windows", "macos"]
			break;

		case "macos":
			osLst.Value = ["windows", "macos", "linux"]
			break;

		case "linux":
			osLst.Value = ["macos", "linux", "windows"]
			break;

		default:
			osLst.Value = ["linux", "windows", "macos"]
	}

	for (let i=0; i<3; i++) {
		document.getElementById(spots[i]).setAttribute("class", osLst.Value[i]);
		document.getElementById(spots[i]).innerHTML = osLst.Value[i]
	}
}

function right(osLst) {
	osLst.Value.push(osLst.Value.shift())
	console.log(osLst.Value)

	for (let i=0; i<3; i++) {
		document.getElementById(spots[i]).setAttribute("class", osLst.Value[i]);
		document.getElementById(spots[i]).innerHTML = osLst.Value[i]
	}
}

function sleep(milli) {
	const date = Date.now()
	let currentDate = null;

	do {
		currentDate = Date.now();
		
	} while(currentDate - date < milli)
}
function left(osLst) {
	osLst.Value.unshift(osLst.Value.pop());

	for (let i=0; i<3; i++) {
		document.getElementById(spots[i]).setAttribute("class", osLst.Value[i]);
		document.getElementById(spots[i]).innerHTML = osLst.Value[i]; 
	}
}


