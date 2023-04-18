document.getElementById("tablazat").innerHTML = tablazaKeszit [5,6]
function rajzolTabla(sor, oszlop){
    var tablazat = '<table>'
    adatok = []
    for(let i = 0; i < sor; i++){
        tablazat += '<tr>'
        for(let j = 0; j < oszlop; j++){
            tablazat += `<td class="cella">${i}:${j}</td>`
        }
        tablazat += '</tr>'
    }
    tablazat += '</table>'
    document.getElementById('tabla').innerHTML = tablazat
    console.log(tablazat)
}
rajzolTabla(4,5);