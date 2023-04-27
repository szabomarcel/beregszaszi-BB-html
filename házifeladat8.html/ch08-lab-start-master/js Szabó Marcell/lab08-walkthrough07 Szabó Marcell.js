/* add code here */
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.push("Sun");
document.write(daysOfWeek + "<br/>");
document.write("<table border=1>");
document.write("<tr>");
for(var i = 0; i < daysOfWeek; i++){
    document.write("<th>" + daysOfWeek[i] + "</th>");
}
document.write("</tr>");
document.write("</table>");
for(var i = 0; i < daysOfWeek; i++){
    if (daysOfWeek[i].length < 4)
    day = daysOfWeek[i];
    else
    day = "<em>" + daysOfWeek[i] + "</em>"
    document.write("<th>" + day + "</th>");
}