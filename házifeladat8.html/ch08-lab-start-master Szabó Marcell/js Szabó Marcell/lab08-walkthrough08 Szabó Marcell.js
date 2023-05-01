// define functions in this file
function outputBox(){
    document.write("<div class = 'movingDiv' id='div1'>");
    document.write("This is div 1");
    document.write("</div>");
}
function outputBox(num){
var box = "<div class = 'movingDiv' id='div1" + num + "'>";
box += "This is div 1" + num;
box += "</div>"
for(count = 1; count < 6; count++){
    document.write(outputBox(count));
}
return box;
}

var boxClass = 'movingDiv';
function outputBox(num){
    var box = "<div class = '" + boxClass + "' id='div1" + num + "'>";}
console.log(box);