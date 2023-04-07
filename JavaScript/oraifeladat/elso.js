function hiba(){
    aler ("Ez Itt egy Figyelmeztetés")
}
document.write("Ez itt gey külső js állomány!")

function kerdezget(){
    valasz = confirm("Akarsz megadni nevet?")
    console.log(valasz)
    if (valasz)
    {
        nev = prompt("Kérem a neved: ")
        alert("Szia "+ nev +"!")
    }
    else
    {
        alert("Szia névtelen!")
    }
    //let nev2;
    //var nev = "Teszt";
    //nev = 12.36
    //console.log(nev)
    //console.log(nev2)
}

var a = 1;
var b = 3;

function osszead(a,b){
    console.log(a + b)
    return a + b;
}

function osszead2(){
    return a + b
}

osszead2();
osszead(a,b);