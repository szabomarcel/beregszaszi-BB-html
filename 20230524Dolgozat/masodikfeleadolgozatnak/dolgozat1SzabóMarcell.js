// 6. Feladat

document.getElementById("Megjelenés!").onclick = function(){
    var tablazat;
    tablazat = "<table>"
    for(let i = 0; i < 100; i++){
        tablazat = "<tr>"
        for(let j = 0; j < 200; j++){
            tablazat = "\t\t<td>"
            tablazat = "\t\t</td>"
        }
        tablazat = "\t</tr>"
    }
    tablazat = "</table>"
    /*var tablazat = "<table>";
    adatokT = [];
    for (var sor = 0; sor < 100; sor++) {
        tablazat += "<tr>";
        adatokT[i] = [];
        for (var oszlop = 0; oszlop < 200; oszlop++) {
            adatokT[i][j] = Math.floor(Math.random() * 100) + 1;
            console.log(sor, oszlop, adatokT);
            tablazat += `<td class="cella" id="s${i}o${j}">${adatokT[i][j].toFixed(2)}</td>`;
        }
        tablazat += "</tr>";
    }
    tablazat += "</table>";
    return tablazat;*/
}

function szamolEsBovites(szambov){
    let srow;
    let scell;
    let tt = new Array(srow);
    let cells = new Array(scell);
    for(var i=0;i<nrow;i++){
		newrow=document.getElementById("tabla").insertRow(i);
		cells[i] = new Array(ncell); 
		tt[i] = new Array(ncell);
		for(var j=0;j<ncell;j++){
			tt[i][j]=newrow.insertCell(j);
			tt[i][j].id=i*ncell+j;
			tt[i][j].innerHTML=i+1;
		}cells[i][j] = tt;
	}
}

