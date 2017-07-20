var celInput = document.getElementById("cel-input");
var farenInput = document.getElementById("faren-input");

celInput.onkeyup = function() {
faren = celInput.value * (9/5) + 32;
document.getElementById("output-celToFaren").innerHTML = Math.round(faren) + "    &#8457;";

if (celInput.value == "") {
  document.getElementById("output-celToFaren").innerHTML ="&#8457;";
}

}


farenInput.onkeyup = function() {

celsius = (farenInput.value - 32) * (5/9);
document.getElementById("output-farenToCel").innerHTML = Math.round(celsius) + "    &#8451;";

if (farenInput.value == "") {
  document.getElementById("output-farenToCel").innerHTML ="&#8451;";
}

}
