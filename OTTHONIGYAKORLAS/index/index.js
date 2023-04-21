// Komment(line comment)

/* 
Block komment
fetch("https://jsonplaceholfrt.typicode.com/posts")
.then(res => res.json)
.then(res => console.log(res))
*/

/*
* Adattípusok
*/

// string(karakterfűzér)
console.log("Szia"); // Szint taktika
console.log("Szia");

// együk nagy betűssé
// Nézzük meg hány larakterből áll
// fordítsunk (reverse)
// fűzzünk hozzá egy másik stirnget

// Number (szám)
console.log(500);

// Adjun hozzá egy másik számot
// Vonjunk ki belőle
//osztás utáni maradék

// boolean(igaz hamos értékekreprezentáló típus)
console.log(true);
console.log(false);

// Logikai és
// (boolean, boolean) -> boolean

// negálás 
// ...

// undefind (egy értéké nincs a rendszerünkbe definiálva)
console.log(undefined);

// null
console.log(null);

/*
*Array(tömb)
*/

// Array<_> 
// Array of ?
// Array<string>

console.log("elso","második", "harmadik");

// Array<number>
console.log([2, 12, 3]);

// szűrés
// sorba rendezés
// új elem hozzáadás
// aggregálás

console.log([2, 12, 3][1]);

// nem javasolt tömb
console.log([true, 2, "string..."])

// több dimenziós tömb
// Array<Array<number>>
console.log([[2,3], [32, 10], [6, 4]][1][1])

/*
*Object(objektum)
*/

// kulcs érték párok sorozata
console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        age: 32
    }.lastName
);

console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        age: 32
    }['lastName']
);

// lookup, kulcs alapú kikérés
console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        age: 32
    }.lastName
);

console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        phoneNumbers: ['01023143', '1231132'],
        age: 32,address: {
            street: "Király u",
            city: "Debrecen"
        }
    }.phoneNumbers[0]
);

// 1. Az első telefon neve
console.log(
    [
        {
            brand: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider:{
                country: 'HU',
                name:"Vodafone"
            }
        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider:{
                country: 'HU',
                name:"T-Mobile"
            }
        },
        {
            brand: 'Samsung',
            name: 'A53',
            price: 300000,
            provider:{
                country: 'HU',
                name:"Yettel"
            }
        }
    ][0].name
)

// 2. A második telefon ára
console.log(
    [
        {
            brand: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider:{
                country: 'HU',
                name:"Vodafone"
            }
        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider:{
                country: 'HU',
                name:"T-Mobile"
            }
        },
        {
            brand: 'Samsung',
            name: 'A53',
            price: 300000,
            provider:{
                country: 'HU',
                name:"Yettel"
            }
        }
    ][1].price
)

// 3. A harmadik telefon szolgáltatójának országa
console.log(
    [
        {
            brand: 'Apple',
            name: 'iPhone X',
            price: 250000,
            provider:{
                country: 'HU',
                name:"Vodafone"
            }
        },
        {
            brand: 'Huawei',
            name: '10',
            price: 180000,
            provider:{
                country: 'HU',
                name:"T-Mobile"
            }
        },
        {
            brand: 'Samsung',
            name: 'A53',
            price: 300000,
            provider:{
                country: 'HU',
                name:"Yettel"
            }
        }
    ][2].provider.country
)

/*
* opreátorok
*/

// (number, number) -> number
console.log(2 + 3);

/*
    operátorok csoportosítása
        - operandusok száma szerint:
            1: unary
            2: binary
            3: ternary
        - operátor lexikális elhelyezkedése
            előtte: prefix
            közötte: infix
            utána: postfix
        - hajt -e végre mellékhatást? (side effect)
            igen
            nem         
*/

/*
* Aritmetika
* (number, number) -y number
*/

// +, -, *, /, %
console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(2 / 4);
console.log(7 % 3);

/*
* Összehasonlító
* (any, any) -> boolean
*/

// ==
console.log(2 == "2");

// !=
console.log(2 != 1);

// === (identity)
console.log(2 === true);
console.log(2 !== true);
console.log('János' == 'József');

// >, <, >=, <=
console.log(3 > 5);

/*
* (boolean, boolean) -> boolean
* (boolean) -> boolean
*/

// logikai ÉS
console.log(true && true);

// logikai VAGY
console.log(true || false);

//negálás
console.log(!true);

console.log(2 === 2 && 1 > 5);
console.log(2 === 2 && (1 > 5 || true));

console.log((2 + 3) * 5);

/*
* Conditional
* (bool, any, any) -> any
*/
 
console.log(true ? 'elso' : 'második');

// Operatorok 2
/*
* Assigment
* (var, any) -> any 
*/

var valtozo;
console.log(valtozo);

console.log(valtozo = 'szia');
console.log(valtozo);

valtizo = 3;
console.log(valtozo);

// increment, decrement
valtozo++;
valtozo--;
valtozo--;
console.log(valtozo);

// +=, -=
var szam = 5;
// szam = szam + 10;
szam += 10;
szam -= 10;
szam *= 10;
szam /= 10;
console.log(szam);

// Elágazások if / else statement
var age = prompt('Add emg az életkorod')
if(age < 20){
    alert('Fiatalabb, mint 20')
}else if(age > 20 && age < 30 ){
    alert('Fiatalabb, mint 20 és fiatalabb mint 30')
}else{
    alert('Idősebb, mint 20')
}

// switch

switch(age){
    case 18:
        console.log('Felhasználó 18 éves');
    case 18:
        console.log('Felhasználó 19 éves');
    default:
        console.log('FElhazsnáló életkora ismeretlen');
}

switch(true){
    case age < 20:
        alert('Fiatalabb, mint 20');
        break;
    case age > 20 && age < 30:
        alert('Fiatalabb, mint 20 és fiatalabb mint 30');
        break;
    default: 
    alert('Idősebb, mint 30');
}

// Feladat
var quantity = prompt("Add meg a databszámot");
var type =prompt("Add meg a típust")

var type = {
    student: 300,
    adult: 350,
    retired: 280
};

var price = types[type];

console.log(price)
if (price === undefined){
    alert('Érvénytelen típus')
}else{
    var discount = quantity >10 ? 0.9 : 1;
    var total = quantity * price * discount;
    alert(total);    
}
