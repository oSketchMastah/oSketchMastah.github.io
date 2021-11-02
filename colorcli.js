
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
console.log("yeet");
if (hexc) {
	console.log("yert");
	let hexvs = this.colorstr;
	for (let i = 0; i < 10; i++) {
		let cssvar= GetVar(i);
		this.root.setProperty(cssvar, '#' + hexvs.substring(0, 6));
		hexvs = hexvs.substring(6);
	}
}
