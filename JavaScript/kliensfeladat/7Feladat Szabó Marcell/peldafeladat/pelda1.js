const vaszon = $("canvas");
const rajz = vaszon.getContext("2d");

const szelesseg = 640;
const magassag = 400;
vaszon.width = szelesseg; // szélesség beállítása
vaszon.heigt = magassag; // magasság beállítása

// háromszög rajzolása
rajz.beginPath(); // elkezdjük az alakzatot
rajz.strokeStyle = "blue"; // a toll színének állítása
rajz.lineWith = 3; // a toll vastagságának beállítása
rajz.fillStyle = "yellow"; // a kitöltés színének éllítása
rajz.moveTo(10,10); // a 10; 10 koordinátájú helyre
rajz.lineTo(10,200); // a 10; 10-ból a 10; 200-ba
rajz.lineTo(200,200); // a 10; 200-ból a 200; 200-ba
rajz.lineTo(10,10); // a 200; 200-ból helyre 10;10-be
rajz.stroke(); // az alakzat körvonalának megrajzolása
rajz.fill(); // az alakzat kitöltése
rajz.closePath(); // az alakzat lezárása

// Téglalap rajzolás
rajz.strokeStyle = "purple";
rajz.lineWith = 5;
rajz.fillStyle = "orange";

// 150*150-es téglalap kitöltése 120;120 bal felső saroktól
rajz.fillRect(120, 120, 150, 150);

// 200*200-as téglalap körvonal rajzolása a 150;150 felső saroktól
rajz.strokeRect(150, 20, 200, 200);

// köriv rajzolása
rajz.beginPath();
rajz.strokeStyle = "red";
rajz.lineWith = 5;
rajz.fillStyle = "green";

// 150;150 középpontú, 1000 sugarú körív a 0-tól a 2 Pi szögig, a szögek radiánban vannak
rajz.arc(150, 150, 100, 0, Math.PI * 2);
rajz.stroke(); // körvonal megrajzolása
rajz.fill(); // kitöltés
rajz.closePath();

// szöveg kiírása
rajz.font = "54px Arial";
rajz.strokeStyle = "black";
rajz.lineWith = 2;
rajz.fillStyle = "gray";
rajz.fillText("Szia", 90, 160);
rajz.strokeText("Szia", 90, 160);

function haromszog(x1, y1, x2, y2, x3, y3, szin){
    rajz.beginPath();
    rajz.fillStyle = szin;
    rajz.moveTo(x1, y1);
    rajz.lineTo(x2, y2);
    rajz.lineTo(x3, y3);
    rajz.lineTo(x1, x2);
    rajz.fill();
    rajz.closePath();
}
haromszog(10, 10, 10, 200, 200, 95, "blue");

const kep = new Image(); // új kép létrehozása
kep.src = "kepfajl.png"; // // kép elérési útjának beállítás
// kép felhelyezése a vászonra az 50;50 koordinátától 100×100px méretben
rajz.drawImage(kep, 50, 50, 10, 10);

function $(szelektor){
    return document.querySelector(szelektor);
}
const vaszon = $("canvas");
const rajz = vaszon.getContext("2d");

rajz.fillStyle = "gold";
rajz.beginPath();
rajz.arc(100, 100, 50, 0, Math.PI * 2);
rajz.fill();
rajz.closePath();

rajz.fillStyle = "black";
rajz.beginPath();
rajz.arc(80, 80, 5, 0, Math.PI * 2);
rajz.arc(120, 80, 5, 0, Math.PI * 2);
rajz.fill();
rajz.closePath();

rajz.lineWith = 5;
rajz.fillStyle = "black";
rajz.beginPath();
rajz.arc(100, 100, 30, Math.PI / 4, Math.PI / 4 * 3);
rajz.stroke();

// Kördiagram
function $(szelektor){
    return document.querySelector(szelektor);
}
const vaszon = $("canvas");
const rajz = vaszon.getContext("2d");

function kordiagram(szazalek){
    rajz.fillStyle = "red";
    rajz.beginPath();
    rajz.arc(100, 100, 50, 0, Math.PI * 2);
    rajz.fill();
    rajz.closePath();   

    rajz.fillStyle = "gold";
    rajz.beginPath();
    const arany = (szazalek / 100) * (Math.PI * 2)
    rajz.moveTo(100, 100);
    rajz.arc(100, 100, 50, 0, arany);
    rajz.fill();
    rajz.closePath();
}
kordiagram(15);