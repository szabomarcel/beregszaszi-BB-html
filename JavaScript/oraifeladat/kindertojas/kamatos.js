function szamol(){
    var toke = parseInt(document.getElementById('toke').value);
    var kamatmin = parseInt(document.getElementById('kamatmin').value);
    var kamatmax = parseInt(document.getElementById('kamatmax').value);
    var evek = parseInt(document.getElementById('evek').value);
    console.log(toke, kamatmin, kamatmax, evek);
    
    //eredmeny = "<table>";
    //for(var j = kamatmin; j < kamatmax; j++){
    //    eredmeny += '<tr>';
    //    var q = 1 + j / 100;
    //    for(i = 0; i < evek + 1; i++){
    //        token = toke * Math.pow(q, i);
    //        //console.log(token);
    //        eredmeny += token.toFixed(2) + '<br>';
    //    }
    //    eredmeny += '</tr>';
    //}
    //eredmeny += '</table>';

    eredmeny = "<table><tr><th></th>";
    for(var k = kamatmin; k < kamatmax + 1; k++){
        eredmeny += '<th>' + k + '</th>'
    }
    eredmeny = "<tr>"
    for(i = 0; i < evek + 1; i++){
        eredmeny += '<tr><td>'+ i +'.</td>';
        for(var j = kamatmin; j < kamatmax; j++){
            var q = 1 + j / 100;
            token = toke * Math.pow(q, i);
            eredmeny += token.toFixed(2) + '<br>';            
            //console.log(token);
        }
        eredmeny += '</tr>';
    }

    eredmeny += '</table>';
    document.getElementById('eredmeny').innerHTML += eredmeny;
    //console.log(eredmeny)
    // var token = toke * Math.pow(q, 2);
    // console.log(token.toFixed(2));
}