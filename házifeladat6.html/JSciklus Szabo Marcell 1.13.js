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

function eredmeny(){
  var kiir = "";
  var i = 0;
  while (i < 10){
      kiir += "A ciklusváltozó értéke: " + i + "<br>"; i++;
  }
  document.getElementById("szoveg").innerHTML = kiir;
}

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