
function SendForm() {
//const req = new XMLHttpRequest();
//let req = new XMLHttpRequest();
var req = new XMLHttpRequest();
document.forms.publish.onsubmit = function() {
if (this.message.value.length < 2) { return; }
req.open("POST", "http://mainintelligence:9003/", true);
req.send(this.message.value);
let msgdiv = document.createElement('div');
msgdiv.style.cssText = 'left: 0;';
msgdiv.textContent = this.message.value;
document.getElementById('messages').appendChild(msgdiv);
this.message.value = "";

return false;
};

req.onreadystatechange = function () {
if(req.readyState === XMLHttpRequest.DONE) {
var status = req.status;
if (status === 0 || (status >= 200 && status < 400)) {
// The request has been completed successfully
  if (req.responseText.length == 0) {
  return;
  }
  let msgdiv = document.createElement('div');
  msgdiv.style.cssText = "color:red;";
  msgdiv.textContent = req.responseText;
  document.getElementById('messages').appendChild(msgdiv);
}
}
};

};

