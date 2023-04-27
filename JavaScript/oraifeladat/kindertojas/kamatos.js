function szamol(){
    var toke = parseInt(document.getElementById('toke').value);
    var kamatmin = parseInt(document.getElementById('kamatmin').value);
    var kamatmax = parseInt(document.getElementById('kamatmax').value);
    var evek = parseInt(document.getElementById('evek').value);
    console.log(toke, kamatmin, kamatmax, evek);
    
    //eredmeny = "<table>";
    //for(var j = kamatmin; j < kamatmax; j++){
    //    eredmeny += '<tr>';
    //    var q = 1 + j / 100;
    //    for(i = 0; i < evek + 1; i++){
    //        token = toke * Math.pow(q, i);
    //        //console.log(token);
    //        eredmeny += token.toFixed(2) + '<br>';
    //    }
    //    eredmeny += '</tr>';
    //}
    //eredmeny += '</table>';

    eredmeny = "<table><tr><th></th>";
    for(var k = kamatmin; k < kamatmax + 1; k++){
        eredmeny += '<th>' + k + '</th>'
    }
    eredmeny = "<tr>"

    // evek ciklus - sorok
    for(i = 0; i < evek + 1; i++){
        eredmeny += '<tr><td>'+ i +'.</td>';
        for(var j = kamatmin; j < kamatmax; j++){
            var q = 1 + j / 100;
            token = toke * Math.pow(q, i);
            eredmeny += token.toFixed(2) + '<br>';            
            //console.log(token);
        }
        eredmeny += '</tr>';
    }

    eredmeny += '</table>';
    document.getElementById('eredmeny').innerHTML += eredmeny;
    //console.log(eredmeny)
    // var token = toke * Math.pow(q, 2);
    // console.log(token.toFixed(2));
}

/*
//példa let meg const
let ertek = parseFloat(document.getElementById("toke").value); // ParseInt vagy ParseFloat lehet a documentum.
// let ertek2 = 100000;
// document.getElementById("toke").value = ertek2;
console.log(ertek);
let div1 = document.getElementById('elso').innerHTML;
let div2 = document.getElementById('elso').innerHTML;
console.log(div2);
// document.getElementById('elso').innerHTML = "<a href='#'>link</a>";
document.getElementById('elso').innerHTML = "<a href='#'>link</a>";
*/

/*
// beviteli elérhetőség
let beveteli = document.getElementById("imput");
console.log(beveteli);
// console.log(beveteli[0]);
for(var i = 0; i < beveteli.Length; i++){
    // console.log(beveteli[i]); // elem kiíratása
    beveteli[i].value = i;
}
console.log(beveteli[1].className); // elem kiíratása
// beveteli[0].value = 10000; // például adat átírása

let urlapelemek = document.getElementsByClassName('urlap'); // kiszínezés a táblában és adot sorban
console.log(urlapelemek);
urlapelemek[0].getElementsByClassName.backgroundColor = 'red';
// urlapelemek[2].getElementsByClassName.backgroundColor = 'red';

let elemek = document.getElementsByTagName('tr')
let tdk = document.getElementsByName('td')
for(var sor of elemek){
    sor.style.backgroundColor = 'green';
}
for (var i = 0; i < elemek.Length; i++){
    console.log(i, elemek[i]);
}
*/

let elemek = document.getElementById('elemek')

/*
console.log(elemek);
console.log(elemek.parentNode); // szülő a div-hez
console.log(elemek.parentNode.parentNode); // szülő a body-hoz
console.log(elemek.parentNode.parentNode.parentNode); // szülő a html-hez
*/

// console.log(elemek.childNodes); // Gyerekek mindennek
// console.log(elemek.firstChild); // Első gyerek a texthez/-ben
// console.log(elemek.firstElementChild); // Első gyerek eleme a texthez/-ben
// console.log(elemek.lastElementChild); // Utoldsó gyerek eleme a texthez/-ben
// console.log(elemek.lastChild); // Utoldsó gyerek a texthez/-ben
// console.log(elemek.children); // Gyerekek

let gyereklista = elemek.children;
console.log(gyereklista);
console.log(gyereklista[1]);

gyereklista[0].style.color = "orange";

console.log(gyereklista[0].value);

let newDiv = document.createElement('div');

/*
let newText = document.createTextNode('Ez itt egy új div!');
newDiv.appendChild(newText);
newDiv.setAttribute('id', 'kulso');
newDiv.setAttribute('class', 'uj');
let newDiv2 = document.createElement('div');
newDiv.appendChild(newDiv2);
elemek.appendChild(newDiv);
*/

/*
let felsorolas = document.createElement('ul');
newDiv.appendChild(felsorolas);
*/

// Öt elemű felsorolás
for(var i = 0; i < 6; i++){
    let elem = document.createElement('li');
    // let elemszoveg = document.createTextNode('s' + i);
    // felsorolas.appendChild(elemszoveg);
    elem.innerText = 'elem-' + i;
    felsorolas.appendChild(elem);
}