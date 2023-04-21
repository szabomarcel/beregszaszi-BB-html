document.getElementById('tablazat').innerHTML = tablazatKeszit(9, 9);

function tablazatKeszit(sor, oszlop) {
    var tablazat = "<table>";
    adatokT = [];
    for (var i = 0; i < sor; i++) {
        tablazat += "<tr>";
        adatokT[i] = [];
        for (var j = 0; j < oszlop; j++) {
            adatokT[i][j] = Math.floor(Math.random() * 100) + 1;
            console.log(i, j, adatokT);
            tablazat += `<td class="cella" id="s${i}o${j}">${adatokT[i][j].toFixed(2)}</td>`;
        }
        tablazat += "</tr>";
    }
    tablazat += "</table>";
    return tablazat;
}

function sorszinez(sorid, hatter, szin) {
    sor = document.querySelectorAll(`[id^=${sorid}]`);
    for (var i = 0; i < sor.length; i++) {
        sor[i].style.color = szin;
        sor[i].style.backgroundColor = hatter;
    }
}

function oszlopszinez(oszlopid, hatter, szin) {
    oszlop = document.querySelectorAll(`[id$=${oszlopid}]`);
    for (var j = 0; j < oszlop.length; j++) {
        oszlop[j].style.color = szin;
        oszlop[j].style.backgroundColor = hatter;
    }
}

var cellak = document.getElementsByClassName("cella");

for (var i = 0; i < cellak.length; i++) {
    cellak[i].addEventListener('mouseenter', function () {
        sorszinez((this.id).substring(0, 2), 'yellow', 'red');
        oszlopszinez((this.id).substring(2, 4), 'yellow', 'red');
        this.style.fontWeight = 'bold';
        this.style.color = 'blue';
        this.style.backgroundColor = 'white';
    });

    cellak[i].addEventListener('mouseout', function () {
        sorszinez((this.id).substring(0, 2), '#ffcc99', 'black');
        oszlopszinez((this.id).substring(2, 4), '#ffcc99', 'black');
        this.style.color = 'black';
        this.style.backgroundColor = '#ffcc99';
        this.style.fontWeight = 'normal';
    });

    // Alert kiíraással majd
    
    cellak[i].addEventListener('click', function () {
        if(i > 5){
            this.style.borderColor = 'red'; 
            var cella = cellak
            alert(cella);        
        }else if (cella != 5){
            alert("Már kiválatotta az 5 számot! Ha akar választani akkor az egyiket törölje ki! És válassza újra ki az adott számot!")
        }
    });

    cellak[i].addEventListener('dblclick', function () {
        console.log(this);
        this.style.borderColor = 'gray';      
    });
}

szovegsor = "Az ön által kiválasztott számok: "
    
    document.write(szovegsor);
    
// táblázat generalasa

/*
function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);
  // Expected output: 20
*/
