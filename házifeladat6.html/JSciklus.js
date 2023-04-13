function eldondendo(){
    
    var kiir = "";
    var i = 0;
    while (i <10){
        kiir += "A ciklusváltozó értéke: " + i + "<br>"; i++;
    }
    document.getElementById("szoveg").innerHTML = kiir;
    const foo = 1;
    let output = "Output: ";
    switch (foo) {
      case 0:
        output += "So ";
      case 1:
        output += "What ";
        output += "Is ";
      case 2:
        output += "Your ";
      case 3:
        output += "Name";
      case 4:
        output += "?";
        console.log(output);
        break;
      case 5:
        output += "!";
        console.log(output);
        break;
      default:
        console.log("Please pick a number from 0 to 5!");
    }
    let szoveg = prompt("Hibás megoldás pontosíts!!!")
    if(szoveg != output){
        let szoveg = prompt("Hibás megoldás pontosíts!!!")
    }
}