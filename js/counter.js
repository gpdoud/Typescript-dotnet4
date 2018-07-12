"use strict";
var nbr = 0;
function display(nbr) {
    var inpCtrl = document.getElementById("nbr");
    inpCtrl.value = nbr;
}
function change(amt) {
    nbr += amt;
    display(nbr);
}
function loaded() {
    display(nbr);
}
