function rajzolTabla(sor, oszlop){
    var tablazat = '<table>'
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
var cellak = document.getElementsByClassName('cella');
let cellak2 = document.getElementsByTagName('td');
var cellak3 = document.querySelector('body');
console.log(cellak);
// console.log(cellak.length)
console.log(cellak2)

rajzolTabla(4,5);