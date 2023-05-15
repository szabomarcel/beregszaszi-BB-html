// felület

function matrix(){
    let sor = 0;
    let oszlop = 0;

    for(let i; i < sor; i++){
        for(let j; j < oszlop; j++){
            matrix[i, j] = rnd.Next(1, 20);
        }
    }
    return matrix;
}

// Állapottér
function tipp(tippeltSzam){
    tippek.push(tippeltSzam);
    vege = tippeltSzam === kitalalandoSzam;
}

//Html Generálók
function genLista(tippek, kitalalandoSzam){
    return tippek.map(szam => `<li>${szam} (${hasonlit(szam, kitalalandoSzam)})
    </li>`
    ).join("");
}

// Állapot-átmenetek

// Eseménykezelők
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
document.querySelector(".btn-roll").addEventListener("click", tippeles);

// Math.random min és a max
function veletlenEgesz(min, max){
    const veletlen = Math.random();
    const tartomany = max - min + 1;
    return Math.trunc(veletlen * tartomany) + min;
}

//Segédfüggvények