let nev = prompt("Írd be a neved!")
let eletkor = prompt("Írd be az életkorod!");

if (eletkor > 18){
    console.log("Te már nem vagy gyerek")
    console.log("Tehát idősebb vagy, mint 18")
    console.log("Szabad mintent, csak óvatosan!")
}
if (eletkor < 18){
    console.log("Fiaatal vagy az italozáshoz")
}
let irany = prompt("Merre mennél?")
if (irany == "bal"){
    console.log("Arra a pokol van!")
}
if (irany == "jobb"){
    console.log("Arra a menny van!")
}
console.log("Vége")
console.log(nev)