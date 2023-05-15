// const frissitesiIdo = {/*...*/};
const g = 9.82; // a gravitációs gyorsulás
const frissitesiIdo = 1000 / 60;
let x, y, // A test x és y koordinátákja a vászon 
    vx, vy;  // A test x és y irányú sebessége
let utolsoFrissites = Date.now();
let allapot;

function kezdoAllapot(){/*...*/};
function kovetkezoAllapot(){
    /*...*/
    // Minden lépésben ellenőrizni kell, hogy vége van-e a játékbak
    vegeEllenoriz();
};

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
    y += vy * dt + (g / 2 * dt * dt); // függőlegesen egyenletesen gyorsuló mozgás
    vy += g * dt; // függőleges irányú egyenletes gyorsulás
    y = magassag / 2; // függőleges a vászon tizedétől indulunk
    
    // Visszapattanás
    if(x <= 0 || x >= szelesseg){
        vx *= -1;
    }
    if(x <= 0 || x >= magassag){
        vy *= -1;
    }
    // x = szelesseg / 10; // vízszintesen a vászon tizedétől indulunk
    // vx = 20; // 20px/s vízszintes kezdősebesség
    // vy = -20; // 20px/s függőleges kezdősebesség
    kirajzol();
}

kezdoAllapot();
setInterval()(kovetkezoAllapot, frissitesiIdo);

const urhajoY = magassag / 8 * 7; // az űrhajó fix y kooedinátája
const urhajoSugar = 10; // Az űrajó kör sugara
const aszteroidaSebesseg = 4; // Az aszteroidák sebessége (px/lépés)

let aszteroidak; // Aszterodiákat tároló tömb 
// egy aszteroidát egy {x, y} koordináta ír le és a sugara(r) ír le

let urhajoX; // Az űrajó x koordinátája

function kirajzol1(){
    rajz.clearRect(0, 0, szelesseg, magassag); // a vászon törlése
    rajz.fillStyle = "gray";
    for(let aszteroida of aszteroidak){
        rajz.beginPath();
        rajz.arc(aszteroida.x, aszteroida.y, aszteroida.sugar, 0, Math.PI * 2)
        rajz.fill();
        rajz.closePath();    
    }
    // Az űrhajó kirajzoéűsa
    rajz.fillStyle = "red";
    rajz.beginPath(); 
    // `urhajoSugar` sugarú kör (x;y)-ba
    rajz.arc(urhajoX,urhajoY, urhajoSugar, 0, Math.PI * 2);
    rajz.fill();
    rajz.closePath();
}

function utazik(aszteroida){
    // akkor ütközik, ha a két közzéppon távolsága kisebb, mint a sugarak összege
    const tavolsag = Math.sqrt(
        Math.pow(urhajoX - aszteroida.x, 2) + Math.pow(urhajoY - aszteroida.y, 2)
    );
    return tavolsag < (urhajoSugar + aszteroida.sugar);
}

function vegeEllenoriz(){
    // akkor van vége, ha létezik olyan azteroida, amivel ütközünk
    let vege = aszteroidak.some(aszteroida => utazik(aszteroida));
    if(vege){
        // a játék vége itt most annyit jelent, hogy kapunk egy felugró ablakot és utána azonnal újraindul
        alert("Vége a játéknak");
        kezdoAllapot();
    }
}

let idozito;

function vegeEllenoriz(){
    /* ... */
    if("/* végfelvétel */") {
        clearInterval(idozito);
        /* ... */
    }
}

function start(){
    kezdoAllapot();
    idozito = setInterval(/* ... */);
}
// valamilyen esemény(pl. egy gomb megnyomása) hatására indul el/űjra a játék
/* ... */addEventListemer(/* valamilyen esemény */start);