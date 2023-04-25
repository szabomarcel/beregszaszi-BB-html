// Adatszerkezetek
var hallgato = [
    {nev: 'Mosolygó Napsugár',
    naptun: 'kod123',
    szak: 'Informatika BSC',
    targyak: [
        'Programozás',
        'Webfejlesztés 2.',
        'Számitépes alapismeretek'
    ]
},
{   
    nev: 'Kék Ibolya',
    naptun: 'kod456',
    szak: 'Informatika BSC',
    targyak: [
        'Programozás',
        'Webfejlesztés 2.',
        'Diszkrét matematika',
        'Testnevelés'
    ]
},
];

//Függvények(Eljárások)

// Függvény általános formája
function fvnev(par1,par2){
    utasítások;
    return visszatérésiérték;
}

// Példa
function negyzet(x){
    return x * x;
}
negyzet(3); // => 9

function  factorialis(n){
    if (n == 0 || n == 1) return 1;
    else{
        var eredmeny = ( n * factorialis(n - 1)); return eredmeny;
    }
}

document.getElementById("objektum").innerHTML += factorialis(6) + "<br>" + "<hr>";

// Függvénydeklaráció
function ketszerez(a){
    return a * 2;
}

// Függvényreferencia átadása
var dublaz = ketszerez;
// Függvény meghívása 
dublaz(21); //42

// Függvénydeklaráció
function osszead(a, b){
    return a + b;
}

// Függvénykifejezéssel
var osszead = function (a, b){
    return a + b;
};

// Hívásuk
osszead(10, 32); // 42

// Függvény definiálása
var szoroz = function(a, b){
    return a * b;
}

// Függvény meghívása
szoroz(6, 7); // 42
// bagy hangsúlyozandó, hogy itt függvényreferencia van
(szoroz)(6, 7); // 42

// Függvényhivatkozást függvényliterállal helyeesítve
(function(a, b){
    return a * b;
})(6, 7); // 42

szia();
function szia (){
    alert("Szia !")
}
szia2();
szia2 = function(){
    alert('Szia2 !')
}

function cerel_valtozo(f, x, y){
    return f(y, x);
}

function kisebb(a, b){
    return a < b;
}
BkisebbA = cserel_valtozo(kisebb, 20, 10); 
document.getElementById("objectum").innerHTML += BkisebbA + "<br>";

// Formális paraméterek
function proba(a, b){
    console.log('a =', a);
    console.log('b =', b);
    console.log('arguments =', arfuments);
}

// Aktuális és formális pararméterek száma megegyezik
proba(1, 2);
// => a = 1
// => b = 2
// => arguments = [1, 2]