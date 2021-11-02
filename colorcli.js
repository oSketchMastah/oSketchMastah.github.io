
const ElementSpecs = ['m', 'box', 'nav', 'active', 'target'];

function GetBackgroundVar(spec) { return '--color-' + spec + 'bg'; }
function GetTextVar(spec) { return '--color-' + spec + 'txt'; }
function GetVar(id) {
if ((id & 1) == 0) {
	return GetBackgroundVar(ElementSpecs[id >> 1]);
} else {
	return GetTextVar(ElementSpecs[id >> 1]);
}
}

var hexc = localStorage.colors;
if (hexc) {
	for (let i = 0; i < 10; i++) {
		let cssvar= GetVar(i);
		this.root.setProperty(cssvar, '#' + hexc.substring(0, 6));
		hexc = hexc.substring(6);
	}
}
