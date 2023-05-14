// Globális változókkal
let kitalalandoSzam = veletlenEgesz(1,100);
let vege = false;
const tippek = []

// Állapottér
function tipp(tippeltSzam){
    tippek.push(tippeltSzam);
    vege = tippeltSzam === kitalalandoSzam;
}

// Objektumba foglalva
const allapot = {
    kitalalandoSzam: 42,
    vege: false,
    tippek: []
}

// Tipp
function tipp(tippeltSzam){
    tippek.push(tippeltSzam)
    vege = (tippeltSzam === kitalalandoSzam)
}

// Math.random min és a max
function veletlenEgesz(min, max){
    const veletlen = Math.random();
    const tartomany = max - min + 1;
    return Math.trunc(veletlen * tartomany) + min;
}

function hasonlit(szam, kitalalandoSzam){
    if(szam < kitalalandoSzam) return "nagyobb";
    if(szam > kitalalandoSzam) return "kisebb";
    return "egyenlő";
}

//Html Generálók
function genLista(tippek, kitalalandoSzam){
    return tippek.map(szam => `<li>${szam} (${hasonlit(szam, kitalalandoSzam)})
    </li>`
    ).join("");
}

$("#tippGomb").addEventListener("click", tippeles);
function tippeles(e){
    // beolvasás
    const tippeltSzam = parseInt($("#tipp").value);
    if(isNaN(tippeltSzam)){
        $("tipp").style.borderColor = "red"
        return;
    }
    // feldolgozás
    tipp(tippeltSzam);

    // kiírás
    $("#tippek").innerHTML = genLista(tippek, kitalalandoSzam);
    $("tippGomb").disabled = vege;
    $("tipp").disabled = vege;
    $("tipp").value = "";
    $("tipp").disabled();
    $("tipp").style.borderColor = "";
}

function $(szelektor){
    return document.querySelector(szelektor)
}