// Első feladat:
var randomNumber = Math.floor(Math.random() * 120) * 1;
document.write("<h2>A generált szám: "+ randomNumber +"</h2>");

// Második feladat: 1.) számjegyek
if (randomNumber < 10){
    document.write("<p>Az érték egy számjegyből áll</p>")
}
else
if(randomNumber < 100){
    document.write("<p>Az érték kettő számjegyből áll</p>")
}
else{
    document.write("<p>Az érték három számjegyből áll</p>")
}

// 2.) Páros-Páratlan
if(randomNumber % 2 == 0){
    document.write("<p>Az érték páros</p>");
}
else{
    document.write("<p>Az érték páratlan</p>");
}

// Harmadik feladat:
var item = ("Kenyér", "Szalámi", "Tojás", "Tej")
document.write("<ul>")
for(var i = 0; i < item.length; i++){
    document.write("<li>" + items[i] + "</li>");
}
document.write("<ul>");

// Negyedik feladat:
var N = 10;
document.write("<table>")

for(var i = 1; i <= N; i++){
    document.write("<tr>");
    for(var j = 1; i <= N; i++){
        document.write("<td>" + (i * j) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>")

// Ötödik feladat:
function createLink(url, text){
    return '<a href="">' + url + '">' + text + '</a>';
}
document.write(createLink("http://google.com", "Google"));
document.write(createLink("http://hvg", "HVG"));

//for ciklus + while + switch