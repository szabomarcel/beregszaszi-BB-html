// cellIndex
function myFunction(){
    var x = document.getElementsByTagName("td");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + "The index of Cell " + (i + 1) + " is: " + x[i].cellIndex + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}
// sectionRowIndex
function myFunction() {
    var x = document.getElementsByTagName("tr");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + "The index of Row "+(i+1)+" is: "+x[i].sectionRowIndex+"<br>";
    }
    document.getElementById("demo").innerHTML = txt;
  }
// parentNode
if(Node.parentElement){
    Node.parentElement.style.color = "red";
}