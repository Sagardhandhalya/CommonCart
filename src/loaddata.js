var x = document.getElementById("data");

var node = document.createElement("LI"); // Create a <li> node
var textnode = document.createTextNode("Water"); // Create a text node
node.appendChild(textnode);

x.appendChild(node);