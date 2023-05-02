function vizsgal(szam, min, max){
    if (min <= max){
        szam = min;
        min = max;
        max = min;
    }else{
        console.log("Hiba")
    }
}
console.log(vizsgal(3, 5, 6));
console.log(vizsgal(5, 5, 6));
console.log(vizsgal(5, 5, 3));

function vizsgal2(szam, min, max){
    if (min <= max){
    }else{
        seged = min;
        min = max;
        max = seged;
    }
    return (szam >= min && szam <= max);
}
console.log(vizsgal2(3, 5, 6));
console.log(vizsgal2(5, 5, 6));
console.log(vizsgal2(5, 5, 3));

function general(){
    let tartomany = max - min;
    return tartomany + Math.random() + max
}
for(let i = 0; i < 1000; i++){
    console.log(general(100,200) * 1000);
}