/*function generateTable(tablazat){
    let bag = "";
    let n = tablazat.length
    for(let i = n - 1; i >= 0; i--){
        bag += tablazat[i][0] + " ";
    }
    for(let i = 1; i < n; i--){
        bag += tablazat[i][i] + " ";
    }
    for(let i = n - 2; i >= 0; i--){
        bag += tablazat[i][n - 1] + "";
    }
    console.log(bag);
}

function generateTable(sor, oszlop){
    var tablazat = '<table>'
    for(let i = 0; i < sor; i++){
        tablazat += '<tr>'
        for(let j = 0; j < oszlop; j++){
            tablazat += `<td class="tabla">${i}:${j}</td>`
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

rajzolTabla(4,4);

var tabla = document.getElementById('myTable');
var output = "";
for(let i = 1; i <= 10; i++){
    output += "<tr>";
    for(let j = 1; j <= 20; j++){
        output += "<td>" + i * j + "</td>";
    }
    output += "</tr>";
}
tabla.innerHTML = output;
*/

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }