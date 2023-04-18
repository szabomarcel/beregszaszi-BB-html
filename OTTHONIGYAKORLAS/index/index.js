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