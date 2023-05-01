/* code goes here */
var first = document.getElementById("first");

var text = document.createTextNode("This is programatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

var icon = document.getElementById("iconList");
icon.removeChild(document.getElementById("deleteThisOne"));