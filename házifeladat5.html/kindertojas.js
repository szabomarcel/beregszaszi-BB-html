function $(id) {
	return document.getElementById(id);
}

//FeldolgozĂł fĂźggvĂŠnyek
function kamatSzamitas(alap, kamat) {
	return alap * (1 + kamat / 100);
}
function kamatosKamatok(alap, kamat, ev) {
	var osszegek = [alap];
	for (var i = 0; i < ev; i++) {
		var alap = kamatSzamitas(alap, kamat);
		osszegek.push(alap);
	}
	return osszegek;
};

//KiĂ­rĂĄs
function osszegekbolSorok(osszegek) {
	var s = '';
	for (var i = 0; i < osszegek.length; i++) {
		s += 
			'<tr>'+
				'<td>'+i+'</td>'+
				'<td>'+Math.round(osszegek[i])+'</td>'+
			'</tr>';
	};
	return s;
}

//EsemĂŠnykezelĹk, beolvasĂĄs
function szamol() {
	//BeolvasĂĄs
	var alap 	= $('alap').value;
	var kamat 	= $('kamat').value;
	var ev 		= $('ev').value;

	//FeldolgozĂĄs
	var osszegek = kamatosKamatok(alap, kamat, ev);
	
	//KiĂ­rĂĄs
	$('tablazat').innerHTML = osszegekbolSorok(osszegek);
}
function init() {
	//EsemĂŠnykezelĹk regisztrĂĄlĂĄsa
	$('gomb').addEventListener('click', szamol, false);
};
window.addEventListener('load', init, false);