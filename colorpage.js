
var cp = null;
document.addEventListener('DOMContentLoaded', function () {
cp = new ColorPicker();

(cp.input[0]).oninput = function() {
 cp.HandleRedChange(this.value);
};

(cp.input[1]).oninput = function() {
 cp.HandleGreenChange(this.value);
};

(cp.input[2]).oninput = function() {
 cp.HandleBlueChange(this.value);
};

(cp.input[3]).oninput = function() {
 cp.HandleBrightnessChange(this.value);
};

});
