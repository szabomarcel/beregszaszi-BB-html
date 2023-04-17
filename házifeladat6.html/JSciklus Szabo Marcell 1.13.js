function valasz(){
  alert(document.c.d.options[document.c.d.selectedIndex].text)
}

function szoveg(){
  var szoveg = document.getElementById('szoveg')
  szoveg.innerHTML = '<div id="szoveg"><p class = "szoveg1> i = 0; while (i <= 10){document.getElementById("szoveg").innerHTML += i + "<br>"; i = i + 1}<!p>">';
  szoveg.innerHTML = '<div id="szoveg"><p class = "szoveg2> i = 0; while (i >= 10){document.getElementById("szoveg").innerHTML -= i - "<br>"; i = i - 1}<!p>">';
  szoveg.innerHTML = '<div id="szoveg"><p class = "szoveg2> i = 0; while (i == 10){document.getElementById("szoveg").innerHTML += i + "<br>"; i = i + 1}<!p>">';
  szoveg.innerHTML = '<div id="szoveg"><p class = "szoveg2> i = 0; while (i != 10){document.getElementById("szoveg").innerHTML -= i - "<br>"; i = i - 1}<!p>">';
}

function szamolas(){
  let = 0;
  for( i = 0; i < 10; i++){
    document.getElementById("eredmeny").innerHTML += i + "<br>";
    i++;
  }
}

/*
function szambe(){
  var x = Math.random() * 100 + 1;
  do{
    var tipp = 0;
    if(tipp >= x){
      document.write('Kisebb! <br />')
    }else if(tipp < x){
      document.write('Nagyobb! <br />')
    }
  }while(tipp != x)
  document.write(x);
}
*/

/*
function eredmeny(){
  var While ciklus = parseInt(document.getElementById('While ciklus').value);
  var Do...While ciklus = parseInt(document.getElementById('kamatmin').value);
  var For ciklus = parseInt(document.getElementById('For ciklus').value);
  
  console.log(While ciklus, Do...While ciklus, kamatmax);

  eredmeny = "<table><tr><th></th>";
    for(var k = Do...While ciklus; k < For ciklus + 1; k++){
        eredmeny += '<th>' + k + '</th>'
    }
    eredmeny = "<tr>"
    for(i = 0; i < evek + 1; i++){
        eredmeny += '<tr><td>'+ i +'.</td>';
        for(var j = Do...While ciklus; j < kamatmax; j++){
            var q = 1 + j / 100;
            token = While ciklus * Math.pow(q, i);
            eredmeny += token.toFixed(2) + '<br>';            
            //console.log(token);
        }
        eredmeny += '</tr>';
    }

    eredmeny += '</table>';
    document.getElementById('eredmeny').innerHTML += eredmeny;
}
*/

function eldondendo(){   
    const foo = 1;
    let output = "Output: ";

    switch (foo) {
      case 0:
        output <= " ";
        console.log(output);
        break;
      case 1:
        output >= "";
        console.log(output);
        break;
      case 2:
        output === "";
        console.log(output);
        break;
      case 3:
        output != "";
        console.log(output);
        break;
      case 4:
        output += "";
        console.log(output);
        break;
      case 5:
        output -= "";
        console.log(output);
        break;
    }  
}
function kiiratas() {
  let szoveg = prompt("Hibás megoldás pontosíts!!!")
  if(szoveg != output){
    document.getElementById(szoveg).innerHTML += eldondendo;
  }
}