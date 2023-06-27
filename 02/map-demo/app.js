let tomb = [
    {
		termek: "🍌",
		ar: 100,
		db: 3,
	},
	{
		termek: "🍎",
		ar: 50,
		db: 8,
	},
	{
		termek: "🥝",
		ar: 150,
		db: 3,
	},
	{
		termek: "🍒",
		ar: 200,
		db: 1,
	},
	{
		termek: "🍑",
		ar: 60,
		db: 5,
	},
	{
		termek: "🥝",
		ar: 150,
		db: 6,
	},
];
let listOne = document.querySelector(".list-one");
let listTwo = document.querySelector(".list-two");

// 1) forEach függvénnyel jelenitünk meg elemek az oldalin
/*
tomb.forEach((elem) => {
    listOne.innerHTML += '<li>${elem.temek} - ${elem.ar} × ${elem.db}</li>';
});*/
// 2) forEach fuggvennyel jelenitunk meg elemeket az oldalon
// es adunk hozza egy click esemenyt is
/*
tomb.forEach((elem) => {
 	listaElem = document.createElement("li");
 	listaElem.innerHTML = `${elem.termek} ${elem.ar}HUF x ${elem.db}`;
 	listaElem.addEventListener("click", () => {
	alert(`A ${elem.termek} ${elem.ar * elem.db} HUF-ba kerül`);
 	});
 	listOne.appendChild(listaElem);
});*/

// 3) map fuggvennyel jelenitunk meg elemeket az oldalon
// es adunk hozza egy click esemenyt is

const listOfNodes = tomb.map((elem) => {
 	listaElem = document.createElement("li");
 	listaElem.innerHTML = `${elem.termek} ${elem.ar}HUF x ${elem.db}`;
 	listaElem.addEventListener("click", () => {
 		alert(`A ${elem.termek} ${elem.ar * elem.db} HUF-ba kerül`);
 	});
 	return listaElem;
});
listTwo.append(...listOfNodes);