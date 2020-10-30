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
