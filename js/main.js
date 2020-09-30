// kourbatov.com/faq/operatin.htm - To get the users operating system

function getOs() {
	var osName = "unkown"
	
	if (navigator.appVersion.indexOf("Win") !=- 1) osName="windows";
	if (navigator.appVersion.indexOf("Mac") !=- 1) osName="mac";
	if (navigator.appVersion.indexOf("X11") !=- 1) osName="unix / linux";
	if (navigator.appVersion.indexOf("Win") !=- 1) osName="linux";
	
	console.log(osName)
	document.write(osName);
}
