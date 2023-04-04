function sayHelloExt() {
    valasz = confirm("Externbal file: Szeretnél Nevet megadni");
    if (valasz) {
        nev = prompt("Mi a neved?");
        alert("Szia " + nev + "!");
    } else {
        alert(" Szia Névtelen!");
    }



}

