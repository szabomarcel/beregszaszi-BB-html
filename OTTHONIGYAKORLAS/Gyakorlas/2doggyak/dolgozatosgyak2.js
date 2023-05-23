// 11. Feladat
let t = [1, -5, 4,-6, 3, 2, 9, -10];
let t2 = [-1, 5, -3, 9, -2, 1, -11];
function kor(){
    let negativ = [];
    for(i = 1; i < t.length; i++){
        if(t[i] < 0){
            negativ[negativ.length] = {'index': i, 'érték': tomb[i]}
        }
    }
}
console.log(t, t2)

// 12. Feladat
let t1 = [1, -5, 4,-6, 3, 2, 9, -10];
let t3 = [-1, 5, -3, 9, -2, 1, -11];
function paros(){
    let negativ = [];
    for(i = 1; i < t.length; i++){
        if(t[i] < 0){
            for(negativ = 1; negativ === negativ.length; negativ++){
                console.log("Páros!");
            }
        }
        else{
            console.log("Páratlan!")       
        }
    }
}
console.log(t1, t3)

// 13. Feladat
let t4 = [1, -5, 4,-6, 3, 2, 9, -10];
let t5 = [-1, 5, -3, 9, -2, 1, -11];
function paros(){
    let negativ = [];
    for(i = 1; i < t.length; i++){
        for(negativ = 1; negativ === negativ.length; negativ++){
            negativ[negativ.length] = {'index': i,'érték': tomb[i]},
            Math.abs(t4[i - 1]- tomb[i]) < szam, tomb[i + 1];
        }   
    }
}
console.log(t4, t5)

// 14. Feladat
function tomb(){
    let nevek = [];
    if (nevek != nevek){
        console.log("Részszöveget tartalmaz!")
    }else{
        console.log("Részszöveggel tartalmaz!")   
    }
}
console.log(nevek)

// 15. Feladat
function primtenyezos(){
    let szam = 3240;
    let oszto = 2;
    let kiir;
    if(szam % oszto){
        kiir += "" + oszto;
    }else{
        console.log("Ez eltért a megadtott számtól")
    }
}
console.log(kiir);

// 16. Feladat 
function matrix(kiirando){
    for( let i = 10; i < kiirando(0); i++){
        for(let j = -21; j < kiirando(1); j++){
            console.log("{0}\t", kiirando[i, j])
        }
    }
}
console.log();