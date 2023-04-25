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
        if (tablazat > 5 || tablazat != 5){
            this.style.borderColor = 'red'; 
            var cella = cellak
            console.log(cella + tablazat);
        }
        alert("Már kiválatotta az 5 számot! Ha akar választani akkor az egyiket törölje ki! És válassza újra ki az adott számot!")
        document.getElementById("tablazat").innerHTML += tablazat(6) + "<br>" + "<hr>";    
    });

    cellak[i].addEventListener('dblclick', function () {
        console.log(this);
        this.style.borderColor = 'gray';      
    });
}


    
// táblázat generalasa

szovegsor = "Az ön által kiválasztott számok: "
    
    document.write(szovegsor);

document.getElementById("generalas").innerHTML = getRndInteger(tablazat);
(generale) => {
    let a = 1;
    console.log(`Szam ${tablazat}`);
    return a + generale 
   
}

/*  var highestNumber = 0;
	for(var m = 0; m < numbers.length; m++) {
		for(var n = m + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}
  
	document.getElementById("numbers").innerHTML = numbers.join(" - ");
}*/

/*
var k,n;
k=1;
n=20;
while(i<=n) {
    writeln(i+". szám: "+k);
    k=k*2;
    i=i+1;
    }
   
   writeln();
   writeln("__________")
*/

/*
function tables(tablazat){

document.write("<table>");
    var counter = 0;
    for(i = 1; i < 50; i++) {
            counter++;
        if(counter == 11) {
            counter = 0;
            document.write("<tr>");
        }
        document.write("<td>" + tablazat + "</td>");
        if(counter == 10) {
            counter = 0;
            document.write("</tr>");   
        }
    }
document.write("</table>");
}
*/

/*
let x, y, z;
document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

function* generatorFunc() {
    yield 100;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.throw(new Error('Hiba történt!')));
console.log(generator.next());
*/

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
