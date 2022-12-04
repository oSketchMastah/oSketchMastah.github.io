
const ElementSpecs = ['m', 'box', 'nav', 'active', 'target'];

function GetBackgroundVar(spec) { return '--color-' + spec + 'bg'; }
function GetTextVar(spec) { return '--color-' + spec + 'txt'; }

const BGDefaults = ['000000', '002869', '8000ff', '902000', 'd04000'];
const TXTDefaults = ['008000', 'ffffff', 'ffffff', 'ffffff', 'ffffff'];

function GetMinimum(v1, v2) {
	if (v1 <= v2) { return v1; }
	else { return v2; }
}

function GetVar(id) {
if ((id & 1) == 0) {
	return GetBackgroundVar(ElementSpecs[id >> 1]);
} else {
	return GetTextVar(ElementSpecs[id >> 1]);
}
}

class ColorSetter {

constructor() {
this.root = document.querySelector(':root').style;
this.hexc = Array();
this.colorstr = localStorage.colors;

if (this.colorstr) {
	let hexvs = this.colorstr;
	for (let i = 0; i < 10; i++) {
		this.hexc[i] = hexvs.substring(0, 6);
		let cssvar= GetVar(i);
		this.root.setProperty(cssvar, '#' + this.hexc[i]);
		hexvs = hexvs.substring(6);
	}
}
else {
	for (let i = 0; i < 5; i++) {
		this.hexc.push(BGDefaults[i]);
		this.hexc.push(TXTDefaults[i]);
	}
}
}//ctor

//Save the color selection for later
SaveCookie() {
	this.colorstr = "";
	for (let i=0; i<10; i++) {
		this.colorstr += this.hexc[i];
	}
	localStorage.colors = this.colorstr;
}

//Reset everything to the default
Reset() {
for (let i = 0; i < 5; i++) {
	//this.colors[i<<1] = GetColor(BGDefaults[i]);
	//this.colors[(i<<1)+1] = GetColor(TXTDefaults[i]);
	this.hexc[i<<1] = BGDefaults[i];
	this.hexc[(i<<1)+1] = TXTDefaults[i];
	this.root.setProperty(GetBackgroundVar(ElementSpecs[i]), '#'+ BGDefaults[i]);
	this.root.setProperty(GetTextVar(ElementSpecs[i]), '#'+ TXTDefaults[i]);
}
}

SetColor(eid, hex){
	this.hexc[eid] = hex;
	let cssvar= GetVar(eid);
	this.root.setProperty(cssvar, '#' + hex);
}


}
