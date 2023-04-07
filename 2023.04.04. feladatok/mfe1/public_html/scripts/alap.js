function szamolas() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    var eredmeny = "";
    document.getElementById('eredmeny').innerHTML = eredmeny;

    var D = Math.pow(b, 2) - 4 * a * c;
    var x1 = (-b + Math.sqrt(D)) / (2 * a);
    var x2 = (-b - Math.sqrt(D)) / (2 * a);

    eredmeny = "<p id = 'fej'>Az egyenlet megoldása: <br></p>";
    eredmeny += "<p>A diszkrimináns D = " + D.toFixed(6) + "<br></p>";

    if (D > 0) {
        eredmeny += "<p>Két megoldás van!<br></p><p> x1 = " + x1.toFixed(3) + "<br> x2 = " + x2.toFixed(3) + "<br></p>";
    } else if (D == 0) {
        eredmeny += "<p>Egy megoldás van! <br></p><p> x1 = x2 = " + x1.toFixed(3) + "<br></p>";
    } else
    {
        eredmeny += "<p>Nincs Megoldás!<br></p>";
    }
    document.getElementById('eredmeny').innerHTML += eredmeny;
}