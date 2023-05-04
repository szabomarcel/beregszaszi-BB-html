function nTraversal(tablazat){
    let bag = "";
    let n = tablazat.length
    for(let i = n - 1; i >= 0; i--){
        bag += tablazat[i][0] + " ";
    }
    for(let i = 1; i < n; i--){
        bag += tablazat[i][i] + " ";
    }
    for(let i = n - 2; i >= 0; i--){
        bag += tablazat[i][n - 1] + "";
    }
    console.log(bag);
}