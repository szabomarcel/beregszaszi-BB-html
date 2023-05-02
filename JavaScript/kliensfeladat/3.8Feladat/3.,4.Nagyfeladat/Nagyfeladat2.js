// 3.Nagyfeladat
function vizsgal(szam, min, max){
    return(szam >= min && szam <= max);
}
function make_mx(szam = 5, N = 10, M = 10){
    let mx = []
    for(let i = 0; i < N; i++){
        mx[i] = []
        for(let j = 0; j < M; i++){
            mx[i,j] = szam
        }
        return mx;
    }
}

// 4. Nagy feladat
function inc_mx(mx, N, M){
    let db = 0;
    for(let elem of N){
        
            for(let M of M){
                mx[ertek] += 1;
            }
        
        return db;
    }
}
function db(tomb,x){
    return tomb.filter(elem => elem === x).length;
}

inc_mx(make_mx(1,10,10), 5, 6)