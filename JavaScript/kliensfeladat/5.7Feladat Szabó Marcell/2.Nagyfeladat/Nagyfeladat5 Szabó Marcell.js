// cellIndex
function myFunction() {
  var x = document.getElementsByTagName("td");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + "The index of Cell " + (i + 1) + " is: " + x[i].cellIndex + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
/*
function myFunction(){
    var x = document.getElementsByTagName("td");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + "The index of Cell " + (i + 1) + " is: " + x[i].cellIndex + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}
*/
// sectionRowIndex
function myFunction() {
    var x = document.getElementsByTagName("tr");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + "The index of Row "+(i+1)+" is: " + x[i].sectionRowIndex + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
  }
  
// parentNode
function delegal(szulo, tipus, szelektor, fuggveny){
  if(e.target.matches(`${szelektor}, ${szelektor} * `)){
    let celpont = e.target;
    while (!celpont.matches(szelektor)){
      celpont = celpont.parentNode;
    }
    e.valodiCelpont = celpont;
    return fuggveny.call(celpont, e);
  }
  szulo.addEventListener(tipus, delegaltFuggveny);
}
delegal($("ul.lista"), "click", "li", listaKattintas);
function listaKattintas(e){
  const li = this;
  li.classList.toggle("kesz");
}
if(Node.parentElement){
    Node.parentElement.style.color = "red";
}