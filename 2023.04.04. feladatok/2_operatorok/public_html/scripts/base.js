
var money;
var name = "Teszt Elek";
var date, time;
var PI = 3.14;

/**
 * változó elérhetősége
 */
document.write("<br>Definiálás előtt: " + myVar);
var myVar = "global";
document.write("<br>Függvény előtt: " + myVar);
function checkscope() {
    var myVar = "local";
    document.writeln("<br>Függvényben :" + myVar);
}
checkscope();
document.write("<br>Függvény után: " + myVar);

function vissza() {
    document.write('<p id="vissza"> <a href="index.html">Vissza</a></p>')
}


/**
 * operártork működése típusonkéánt csoportosítva
 */

function AritmeticalOps() {
    var x = 100;
    var y = 200;
    var szo = "Teszt";
    var sortores = "<br>";

    document.write("x = ", x, sortores);
    document.write("y = ", y, sortores);
    document.write("szo = ", szo, sortores);
    document.write(sortores);

    document.write("x + y =");
    eredmeny = x + y;
    document.write(eredmeny);
    document.write(sortores);

    document.write("x - y =");
    eredmeny = x - y;
    document.write(eredmeny);
    document.write(sortores);

    document.write("x * y =");
    eredmeny = x * y;
    document.write(eredmeny);
    document.write(sortores);

    document.write("x / y =");
    eredmeny = x / y;
    document.write(eredmeny);
    document.write(sortores);

    document.write("x % y =");
    eredmeny = x % y;
    document.write(eredmeny);
    document.write(sortores);


    document.write(sortores);
    document.write("elotte: x = ", x);
    document.write(sortores);
    document.write("x++ =");
    eredmeny = x++;
    document.write(eredmeny);
    document.write(sortores);
    document.write("utan: x = ", x);
    document.write(sortores);

    document.write(sortores);
    document.write("elotte: y = ", y);
    document.write(sortores);
    document.write("--y=");
    eredmeny = --y;
    document.write(eredmeny);
    document.write(sortores);
    document.write("utan: y = ", y);
    document.write(sortores);
    vissza();



}


function CompareOps() {
    var a = 10;
    var b = 20;
    var linebreak = "<br />";

    document.write("a = ", a, linebreak);
    document.write("b = ", b, linebreak);
    document.write(linebreak);

    document.write("(a == b) => ");
    result = (a == b);
    document.write(result);
    document.write(linebreak);

    document.write("(a < b) => ");
    result = (a < b);
    document.write(result);
    document.write(linebreak);

    document.write("(a > b) => ");
    result = (a > b);
    document.write(result);
    document.write(linebreak);

    document.write("(a != b) => ");
    result = (a != b);
    document.write(result);
    document.write(linebreak);

    document.write("(a >= b) => ");
    result = (a >= b);
    document.write(result);
    document.write(linebreak);

    document.write("(a <= b) => ");
    result = (a <= b);
    document.write(result);
    document.write(linebreak);
    vissza();
}

function LogicalOps() {

    var a = true;
    var b = false;
    var linebreak = "<br />";

    document.write("a = ", a, linebreak);
    document.write("b = ", b, linebreak);
    document.write(linebreak);

    document.write("(a && b) => ");
    result = (a && b);
    document.write(result);
    document.write(linebreak);

    document.write("(a || b) => ");
    result = (a || b);
    document.write(result);
    document.write(linebreak);

    document.write("!(a && b) => ");
    result = (!(a && b));
    document.write(result);
    document.write(linebreak);
    vissza();

}


konvertal = function (n, base) {
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    }

    if ((base >= 2) && (base <= 36)) {
        return parseInt(n, 10).toString(base);
    } else {
        return "Hibás alapszám";
    }
};



function BitwiseOps() {

    var a = 10; // binárisan 00001010
    var b = 23; // binárisan 00010111
    var linebreak = "<br />";

    document.write("a = ", a, " (00000000000000000000000000001010)", linebreak);
    document.write("b = ", b, " (00000000000000000000000000010111)", linebreak);
    document.write(linebreak);


    document.write("(a & b) => ");
    result = (a & b);
    document.write(result + " (" + konvertal(result, 2) + ")");
    document.write(linebreak);

    document.write("(a | b) => ");
    result = (a | b);
    document.write(result + " (" + konvertal(result, 2) + ")");
    document.write(linebreak);

    document.write("(a ^ b) => ");
    result = (a ^ b);
    document.write(result + " (" + konvertal(result, 2) + ")");
    document.write(linebreak);

    document.write("(~b) => ");
    result = (~b);
    document.write(result + " (" + konvertal(result, 2) + ")");
    document.write(linebreak);

    document.write("(a << 2) => ");
    result = (a << 2);
    document.write(result + " (" + konvertal(result, 2) + ")");
    document.write(linebreak);

    document.write("(a >> 2) => ");
    result = (a >> 2);
    document.write(result + " (" + konvertal(result, 2) + ")");
    document.write(linebreak);
    vissza();
}

function AssignmentOps() {

    var a = 2;
    var b = 3;
    var linebreak = "<br />";

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    document.write("Value of a => (a = b) => ");
    result = (a = b);
    document.write(result);
    document.write(linebreak);

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    document.write("Value of a => (a += b) => ");
    result = (a += b);
    document.write(result);
    document.write(linebreak);

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    document.write("Value of a => (a -= b) => ");
    result = (a -= b);
    document.write(result);
    document.write(linebreak);

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    document.write("Value of a => (a *= b) => ");
    result = (a *= b);
    document.write(result);
    document.write(linebreak);

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    document.write("Value of a => (a /= b) => ");
    result = (a /= b);
    document.write(result);
    document.write(linebreak);

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    document.write("Value of a => (a %= b) => ");
    result = (a %= b);
    document.write(result);
    document.write(linebreak);
    vissza();
}


function ConditionalOps() {

    var a = 2;
    var b = 3;
    var linebreak = "<br />";

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    document.write("((a > b) ? ", a, " : ", b, " => ");
    result = (a > b) ? a : b;
    document.write(result);
    document.write(linebreak);

    document.write("((a < b) ? ", a, " : ", b, " => ");
    result = (a < b) ? a : b;
    document.write(result);
    document.write(linebreak);
    vissza();

}


function TypeofOps() {

    var a = 2;
    var b = "Szöveg";
    var linebreak = "<br />";

    document.write(linebreak, "a = ", a, " ; b = ", b, linebreak, linebreak);

    result = (typeof b == "string" ? "B is String" : "B is Numeric");
    document.write("Result => ");
    document.write(result);
    document.write(linebreak);

    result = (typeof a == "string" ? "A is String" : "A is Numeric");
    document.write("Result => ");
    document.write(result);
    document.write(linebreak);
    vissza();

}