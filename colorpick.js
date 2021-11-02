
function strcpy(dest, pos, src) {
	return dest.substring(0, pos) + src + dest.substring(pos + src.length);
}

function toStringN(v, base, digs) {
 let sv = v.toString(base);
 let str = ""
 for(let i=0; i<digs-sv.length; i++) {
  str += '0';
 }
 return str + sv;
}


//********* Colors class **********
class ColorPicker {

//load in cookie data if available, set color values
constructor() {
this.root = document.querySelector(':root').style;
this.setr = new ColorSetter();
this.vnodes = Array();
this.vs = Array();
this.projnodes = Array();
this.projs = Array();
this.input = Array();
let rz = document.body;
rz = rz.querySelector('#colorarea');
let vsto = rz.children[1];
const sliderz = rz.querySelector('div');
const wraps = sliderz.children;
for (let i=0; i<4; i++) {
	this.input[i] = (wraps[i]).children[0];
}

for (let i=0; i<3; i++) {
	this.vnodes[i] = vsto.children[i];
	this.vs[i] = (this.input[i]).value;
	this.vnodes[i].innerHTML = this.vs[i].toString(10);
}

this.vnodes[3] = vsto.children[3];
this.vs[3] = Math.pow(2, (this.input[3]).value);
this.vnodes[3].innerHTML = this.vs[3].toString(10);

vsto = rz.children[2];

this.hexcode = "";
for (let i=0; i<3; i++) {
	this.projnodes[i] = vsto.children[i];
	this.projs[i] = GetMinimum(255, Math.trunc(this.vs[3] * this.vs[i]));
	this.projnodes[i].innerHTML = this.projs[i].toString(10);
	this.hexcode += toStringN(this.projs[i], 16, 2);
}
this.hexnode = vsto.children[3];
this.hexnode.innerHTML = '#' + this.hexcode;
this.root.setProperty('--color-chosen', '#' + this.hexcode);
}//ctor

HandleRedChange(v) {
  this.vs[0] = v;
  this.vnodes[0].innerHTML = v.toString(10);
  
  this.projs[0] = GetMinimum(255, Math.trunc(v * this.vs[3]));
  this.projnodes[0].innerHTML = this.projs[0].toString(10);
  
  
  this.hexcode = strcpy(this.hexcode, 0, toStringN(this.projs[0], 16, 2));
  this.hexnode.innerHTML = '#' + this.hexcode;
  //console.log(this.projs[0].toString(16));
  //console.log(this.hexcode);
  //this.clrbox.style.backgroundColor = '#' + this.hexcode;
  
  this.root.setProperty('--color-chosen', '#' + this.hexcode);
  //console.log("wat");
}

HandleGreenChange(v) {
  this.vs[1] = v;
  this.vnodes[1].innerHTML = v.toString(10);
  
  this.projs[1] = GetMinimum(255, Math.trunc(v * this.vs[3]));
  this.projnodes[1].innerHTML = this.projs[1].toString(10);
  
  this.hexcode = strcpy(this.hexcode, 2, toStringN(this.projs[1], 16, 2));
  this.hexnode.innerHTML = '#' + this.hexcode;
  
  this.root.setProperty('--color-chosen', '#' + this.hexcode);
}

HandleBlueChange(v) {
  this.vs[2] = v;
  this.vnodes[2].innerHTML = v.toString(10);
  this.projs[2] = GetMinimum(255, Math.trunc(v * this.vs[3]));
  this.projnodes[2].innerHTML = this.projs[2].toString(10);
  
  this.hexcode = strcpy(this.hexcode, 4, toStringN(this.projs[2], 16, 2));
  this.hexnode.innerHTML = this.hexcode;
  
  this.root.setProperty('--color-chosen', '#' + this.hexcode);
}

HandleBrightnessChange(v) {
  this.vs[3] = Math.pow(2, v);
  v = this.vs[3];
  
  this.vnodes[3].innerHTML = v.toString(10);
  
  this.hexcode = "";
  for(let i=0; i<3; i++) {
    this.projs[i] = GetMinimum(255, Math.trunc(this.vs[i] * v));
    this.projnodes[i].innerHTML = this.projs[i].toString(10);
    this.hexcode += toStringN(this.projs[i], 16, 2);
  }
  this.hexnode.innerHTML = '#' + this.hexcode;
  this.root.setProperty('--color-chosen', '#' + this.hexcode);
}


}
