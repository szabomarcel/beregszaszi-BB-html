let number = [19, 65, 9, 17];
function sumArray(values){
    let sum = 0;
    let i;

    for(i = 0;i < values.length; i++){
        sum += values[i];
    }

    // while (index <values.length){
    //     sum = sum + alues[index];
    //     index = index + 1;
    // }
    console.log('A ciklus törzse ${index} alkalommal futott');
    return sum;
}
console.log(sumArray(numbers));

// Array<Number>
var szamok = [2, 4, 13, 4, 6, 42]
var parosakSzama = 0;

parosakSzama += szamok[0] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[1] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[2] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[3] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[4] % 2 === 0 ? 1 : 0;
parosakSzama += szamok[5] % 2 === 0 ? 1 : 0;

/*
*ciklusok (loop)

*/
// while
var index = 0
var paratlanokSzama = 0;
while(index < szamok.length){
    parosakSzama += szamok[index] % 2 === 0 ? 1 : 0;
    index++;
}

// for loop
var paratlanokSzama2 = 0;
for(var i = 0; i < szamok.length; i++){
    console.log(i);
    console.log(szamok[i]);
    console.log('-------')
    paratlanokSzama2 += szamok[i] % 2 === 1 ? 1 : 0;
}
// for - of
var paratlanokSzama3 = 0;
for(var szam of szamok){
    paratlanokSzama3 += szam % 2 === 1 ? 1 : 0;
}
console.log(paratlanokSzama3)

console.log(parosakSzama);

// 2023.04.15: Új rész for ciklus
for(var i = 1; i <= 10; i++){
    console.log(1);
}
var tomb = ['Gnd', 38, 'vezér', true, 1990 ]
for(var i = 0; i < tomb.length; i++){
    console.log(tmob[i])
} 

// while ciklus
var i = 0;
while(i < tomb.length){
    console.log(tomb[1]);
    i++;
}

// break    
for(var i = 0; i < tomb.length; i++){
if(typeof(tomb[i]) === 'boolean'){
    break;
    }
    console.log(tomb[1]);
}

// continue
for(var i = 0; i < tomb.length; i++){
    if(typeof(tomb[i]) === 'boolean'){
    continue;đ
    }
    console.log(tomb[1]);
}