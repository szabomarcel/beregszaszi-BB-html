// const frissitesiIdo = {/*...*/};
const g = 9.82; // a gravitációs gyorsulás
const frissitesiIdo = 1000 / 60;
let x, y, // A test x és y koordinátákja a vászon 
    vx, vy;  // A test x és y irányú sebessége
let utolsoFrissites = Date.now();
let allapot;

function kezdoAllapot(){/*...*/};
function kovetkezoAllapot(){/*...*/};

function animaciosLepes(){
    let most = Date.now();
    if(most > utolsoFrissites + frissitesiIdo){
        kezdoAllapot();
        utolsoFrissites = most;        
    }
}
requestAnimationFrame(animaciosLepes); // a függvény önmagára hivatkozik

const $ = document.querySelector.bind(document);
const vaszon = $("canvas");
const rajz = vaszon.getContext("2d");
function rajzolIdo(){
    const most = new Date();
    const szoveg = most.getHours() + ":" + most.getMinutes() + ":" + most.getSeconds();
    rajz.clearRect(0, 0, vaszon.with, vaszon.height);
    rajz.fillStyle = "black";
    rajz.fillText(szoveg, 10, 10);
}
setInterval(rajzolIdo, 1000)

function kirajzol(){
    rajz.clearRect(0, 0, szelesseg, magassag); // a vászon törlése
    rajz.beginPath();
    rajz.fillStyle = "black";
    rajz.arc(x, y, 5, 0, Math.PI * 2); // 5px sugarú fekete kör (x;y)-ba
    rajz.fill();
    rajz.closePath();
}

function kovetkrzoAllapot(){
    // eltelt idő a legutóbbi állapot óra másodpercben
    const dt = frissitesiIdo / 1000;
    x += vx * dt; // vizszintesen egyenletes mozgás
    x = szelesseg / 10; // vízszintesen a vászon tizedétől indulunk
    y += vy * dt + (g / 2 * dt * dt); // függőlegesen egyenletesen gyorsuló mozgás
    y = magassag / 2; // függőleges a vászon tizedétől indulunk
    vy += g * dt; // függőleges irányú egyenletes gyorsulás
    vx = 20; // 20px/s vízszintes kezdősebesség
    vy = -20; // 20px/s függőleges kezdősebesség
    kirajzol();
}

kezdoAllapot();
setInterval()(kovetkezoAllapot, frissitesiIdo);
