console.dir(document);

console.log();
console.log(docoment.title);
document.title = "Halihó";
console.log(document.links);

document.log(document.links[0].immerText = "ELTE linkek");
document.links[0].innerHTML = "ELTE links";
document.links[1].style.color = 'red';

console.log(document.getElementById("main-header"));
var headar = document.getElementById("header-title");

headar.style.backgroundColor = "gray";

var elemek = document.getElementsByTagName('li');

console.log(elemek);

// elemek[0].innerText = 'kalap';
// elemek[1].style.color = 'blue';

var elemek = document.getElementsByClassName('li');

console.log(elemekclass);

var elemek2 = document.querySelector(".list-group-item");
console.log(elemek2);

var elemek3 = document.querySelector(".list-group-item");
console.log(elemek3);

elemek3[3].style.color = "red";

let ht = document.querySelector("#header-title");
ht.innerText = 'tesztelek';