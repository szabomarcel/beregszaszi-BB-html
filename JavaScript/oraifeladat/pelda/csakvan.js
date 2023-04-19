var sor_max;
var oszlop_max;
//Megjelenítés betöltődéskor
function futtatas()
{
  var oszlop = parseInt(document.getElementById("oszlopid").value);
  var sor = parseInt(document.getElementById("sorid").value);
  sor_max = sor;
  oszlop_max = oszlop;
  if(oszlop_max >= 2 && sor_max >= 1)
  { letrehoz_table(sor_max, oszlop_max, '', 0); }
}
//Egy táblázat létrehozása
function letrehoz_table(sor, oszlop, melyik)
{
 if(oszlop_max < 11 && sor_max < 16)
 {
  if(document.getElementById("dinamic_table"))
  {
    var objekt = document.getElementById("dinamic_table");
    for(i=0; i<objekt.childNodes.length; i++)
    {
      objekt.removeChild(objekt.childNodes[0]);
    }
    document.body.removeChild(objekt);
  }
  try
  {
    if(isNaN(parseInt(document.getElementById("oszlopid").value)) || isNaN(parseInt(document.getElementById("sorid").value)))
    { throw "nullerr"; }
    sor_max = sor;
    oszlop_max = oszlop;
    var table = document.createElement("table");
    table.setAttribute("border", "1");
    table.setAttribute("id", "dinamic_table");
    var tr = new Array();
    var td = new Array();
    var button_e = new Array();
    var button_u = new Array();
    var button_e = new Array();
    var button_t = new Array();
    var th = new Array();
    var button_b = new Array();
    var button_j = new Array();
    fejlec = document.createElement("tr");
    for(var k = 0; k < oszlop_max; k++)
    {
      if(k == 0)
      {
        th[k] = document.createElement("th");
        th[k].style.width = "90px";
        th[k].style.backgroundColor = "lightgray";
        th[k].setAttribute("id", "th_"+(k));
        th[k].setAttribute("title", "th_"+(k));
        th[k].appendChild(document.createTextNode("Vezérlők"));
        fejlec.appendChild(th[k]);
      }
      else
      {
        th[k] = document.createElement("th");
        th[k].style.backgroundColor = "lightgray";
        th[k].setAttribute("id", "th_"+(k));
        th[k].setAttribute("title", "th_"+(k));
        button_b[k] = document.createElement("button");
        button_b[k].setAttribute("title", "bal_"+k);
        button_b[k].setAttribute("class", "bal");
        button_b[k].onclick = function() { balra_novel(this.title) };
        th[k].appendChild(button_b[k]);
        button_b[k] = document.createElement("button");
        button_b[k].setAttribute( "title", "torol_"+(k+1) );
        button_b[k].setAttribute("class", "torles_oszlop");
        button_b[k].onclick = function() { oszlop_torol(this.title) };
        th[k].appendChild(button_b[k]);
        button_b[k] = document.createElement("button");
        button_b[k].setAttribute("title", "jobb_"+k);
        button_b[k].setAttribute("class", "jobb");
        button_b[k].onclick = function() { jobbra_novel(this.title) };
        th[k].appendChild(button_b[k]);
        fejlec.appendChild(th[k]);
        th[k].appendChild(document.createTextNode("Oszlop-"+(k+1)));
      }
    }
    table.appendChild(fejlec);
    //sorok
    for(var i = 0; i < sor; i++)
    {
      tr[i] = document.createElement("tr");
      tr[i].setAttribute("id", "vez"+i);
      for(var j = 0; j < oszlop_max; j++)
      {
        if(j == 0)
        {
          td[j] = document.createElement("td");
          td[j].style.width = "90px";
          td[j].style.border = "none";
          td[j].style.color = "red";
          td[j].style.marginLeft = "1px";
          td[j].setAttribute("id", "td_"+(i+1)+'_'+(j+1));
          td[j].setAttribute("title", "td_"+(i+1)+'_'+(j+1));
          button_e[i] = document.createElement("button");
          button_e[i].appendChild(document.createTextNode('E'));
          button_e[i].setAttribute("title", "vez"+i);
          button_e[i].setAttribute("class", "eleje");
          button_e[i].onclick = function() { elore_novel(this.title, melyik) };
          td[j].appendChild(button_e[i]);
          button_u[i] = document.createElement("button");
          button_u[i].appendChild(document.createTextNode('U'));
          button_u[i].setAttribute("title", "vez"+i);
          button_u[i].setAttribute("class", "utana");
          button_u[i].onclick = function() { utana_novel(this.title, melyik) };
          td[j].appendChild(button_u[i]);
          button_t[i] = document.createElement("button");
          button_t[i].appendChild(document.createTextNode('T'));
          button_t[i].setAttribute("title", "vez"+i);
          button_t[i].setAttribute("class", "torles_sor");
          button_t[i].onclick = function() { sor_torol(this.title) };
          td[j].appendChild(button_t[i]);
          tr[i].appendChild(td[j]);
        }
        else
        {
          td[j] = document.createElement("td");
          td[j].setAttribute("id", "td_"+(i+1)+'_'+(j+1));
          td[j].setAttribute("title", "td_"+(i+1)+'_'+(j+1));
          td[j].appendChild(document.createTextNode((i+1)+""+(j+1)));
          tr[i].appendChild(td[j]);
        }
      }
      table.appendChild(tr[i]);
    }
    document.body.appendChild(table);
  }
  catch(err)
  { if (err == "nullerr") { alert("VALAMIT NEM TÖLTÖTTÉL KI!"); } }
 }
}
//Létrehozás aktuális elé egy sort
function elore_novel(IDszam, melyik)
{
  table = document.getElementById("dinamic_table");
  var oszl_sorrend = get_oszl_sorrend();
  var sor_sorrend = get_sor_sorrend();
  var akt_sor_max = sor_sorrend.length;
  if(akt_sor_max < 16)
  {
    var akt_sor = sor_max+1;
    var td = new Array();
    uj_tr = document.createElement("tr");
    uj_tr.setAttribute("id", "vez"+akt_sor);
    uj_tr.setAttribute("title", "vez"+akt_sor);
    for(var j=0;j<oszl_sorrend.length;j++)
    {
      if(j == 0)
      {
        td[j] = document.createElement("td");
        td[j].style.width = "90px";
        td[j].style.border = "none";
        td[j].style.color = "red";
        td[j].style.backgroundColor = "lightblue";
        td[j].style.marginLeft = "1px";
        td[j].setAttribute("id", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        td[j].setAttribute("title", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        button_ele = document.createElement("button");
        button_ele.setAttribute("title", "vez"+akt_sor);
        button_ele.setAttribute("class", "eleje");
        button_ele.onclick=function() { elore_novel(this.title, melyik) };
        td[j].appendChild(button_ele);
        button_utan = document.createElement("button");
        button_utan.setAttribute("title", "vez"+akt_sor);
        button_utan.setAttribute("class", "utana");
        button_utan.onclick=function() { utana_novel(this.title, melyik) };
        td[j].appendChild(button_utan);
        button_torol = document.createElement("button");
        button_torol.setAttribute("title", "vez"+akt_sor);
        button_torol.setAttribute("class", "torles_sor");
        button_torol.onclick=function() { sor_torol(this.title) };
        td[j].appendChild(button_torol);
        uj_tr.appendChild(td[j]);
      }
      else
      {
        td[j] = document.createElement("td");
        td[j].setAttribute("id", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        td[j].setAttribute("title", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        td[j].appendChild(document.createTextNode((akt_sor)+""+( oszl_sorrend[j] +1)));
        uj_tr.appendChild(td[j]);
        table.appendChild(uj_tr);
      }
    }
    sor_max++;
    //referencia elem
    var refNode = document.getElementById(IDszam);
    //létrehoz aktuális elé
    refNode.parentNode.insertBefore(uj_tr, refNode);
  }
}
//Létrehozás aktuális után  egy sort
function utana_novel(IDszam, melyik)
{
  table = document.getElementById("dinamic_table");
  var oszl_sorrend = get_oszl_sorrend();
  var akt_oszlop_max = oszl_sorrend.length;
  var sor_sorrend = get_sor_sorrend();
  var akt_sor_max = sor_sorrend.length;
  if(akt_sor_max < 16)
  {
    var akt_sor = sor_max+1;
    var td = new Array();
    uj_tr = document.createElement("tr");
    uj_tr.setAttribute("id", "vez"+akt_sor);
    for(var j=0;j<akt_oszlop_max;j++)
    {
      if(j == 0)
      {
        td[j] = document.createElement("td");
        td[j].style.width = "90px";
        td[j].style.border = "none";
        td[j].style.color = "red";
        td[j].style.backgroundColor = "orange";
        td[j].style.marginLeft = "1px";
        td[j].setAttribute("id", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        td[j].setAttribute("title", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        button_ele = document.createElement("button");
        button_ele.setAttribute("title", "vez"+akt_sor);
        button_ele.setAttribute("class", "eleje");
        button_ele.onclick=function() { elore_novel(this.title, melyik) };
        td[j].appendChild(button_ele);
        button_utan = document.createElement("button");
        button_utan.setAttribute("title", "vez"+akt_sor);
        button_utan.setAttribute("class", "utana");
        button_utan.onclick=function() { utana_novel(this.title, melyik) };
        td[j].appendChild(button_utan);
        button_torol = document.createElement("button");
        button_torol.setAttribute("title", "vez"+akt_sor);
        button_torol.setAttribute("class", "torles_sor");
        button_torol.onclick=function() { sor_torol(this.title) };
        td[j].appendChild(button_torol);
        uj_tr.appendChild(td[j]);
      }
      else
      {
        td[j] = document.createElement("td");
        td[j].setAttribute("id", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        td[j].setAttribute("title", "td_"+(akt_sor)+'_'+( oszl_sorrend[j] +1));
        td[j].appendChild(document.createTextNode((akt_sor)+""+( oszl_sorrend[j] +1)));
        uj_tr.appendChild(td[j]);
        table.appendChild(uj_tr);
      }
    }
    sor_max++;
    //referencia elem
    var refNode = document.getElementById(IDszam);
    //létrehoz aktuális után
    refNode.parentNode.insertBefore(uj_tr, refNode.nextSibling);
  }
}
//Aktuális sor törlése
function sor_torol(IDszam)
{
  table = document.getElementById("dinamic_table");
  var sor_sorrend = get_sor_sorrend();
  var akt_sor_max = sor_sorrend.length;
  if(akt_sor_max > 2)
  {
    var torlendo = document.getElementById(IDszam);
    table.removeChild(torlendo);
  }
}
//Beszúr oszlopot balra
function balra_novel(IDszam)
{
  //table/tr/TD elemek lekérdezése
  var sor_sorrend = get_sor_sorrend();
  var akt_sor_max = sor_sorrend.length;
  //table/tr/TH elemek lekérdezése
  var oszl_sorrend = get_oszl_sorrend();
  var akt_oszlop_max = oszl_sorrend.length;
  //MaxOszlop korlát
  if(akt_oszlop_max < 10)
  { //oszlopID-ből szám (th_x)
    var res = IDszam.split("_");
    oldal = res[0];
    melyik = parseInt(res[1]);
    //oszlop hozzáadás TH-sorhoz
    for(var j = 0; j < akt_oszlop_max; j++)
    {
      if(melyik == oszl_sorrend[j])
      {
        var refNode = document.getElementById('th_'+(oszl_sorrend[j]));
        uj_th = document.createElement("th");
        uj_th.style.backgroundColor = "lightblue";
        uj_th.setAttribute("id", "th_"+(oszlop_max));
        uj_th.setAttribute("title", "th_"+(oszlop_max));
        button_b = document.createElement("button");
        button_b.setAttribute("title", "bal_"+(oszlop_max) );
        button_b.setAttribute("class", "bal");
        button_b.onclick = function() { balra_novel(this.title) };
        uj_th.appendChild(button_b);
        button_b = document.createElement("button");
        button_b.setAttribute("title", "torol_"+(oszlop_max+1));
        button_b.setAttribute("class", "torles_oszlop");
        button_b.onclick = function() { oszlop_torol(this.title) };
        uj_th.appendChild(button_b);
        button_b = document.createElement("button");
        button_b.setAttribute("title", "jobb_"+(oszlop_max));
        button_b.setAttribute("class", "jobb");
        button_b.onclick = function() { jobbra_novel(this.title) };
        uj_th.appendChild(button_b);
        uj_th.appendChild(document.createTextNode("Oszlop-"+(oszlop_max+1)));
        //létrehoz aktuális elé
        refNode.parentNode.insertBefore(uj_th, refNode);
      }
    }
    //oszlop hozzáadás TD-sorokhoz    
    for(var i=0; i<(akt_sor_max); i++)
    {
        for(var k = 0; k < (akt_oszlop_max); k++)
        {
          if(melyik == (oszl_sorrend[k]))
          {
            var refNode = document.getElementById('td_'+(sor_sorrend[(i)])+'_'+(oszl_sorrend[k]+1));
            uj_td = document.createElement("td");
            uj_td.setAttribute("id", "td_"+(sor_sorrend[(i)])+'_'+(oszlop_max+1));
            uj_td.setAttribute("title", "td_"+(sor_sorrend[(i)])+'_'+(oszlop_max+1));
            uj_td.appendChild(document.createTextNode( (sor_sorrend[(i)])+''+(oszlop_max+1)) );
            //létrehoz aktuális elé
            refNode.parentNode.insertBefore(uj_td, refNode);
          }
        }
    }
    oszlop_max++;
  }
}
//Beszúr oszlopot jobbra
function jobbra_novel(IDszam)
{
  //table/tr/TD elemek lekérdezése
  var sor_sorrend = get_sor_sorrend();
  var akt_sor_max = sor_sorrend.length;
  //table/tr/TH elemek lekérdezése
  var oszl_sorrend = get_oszl_sorrend();
  var akt_oszlop_max = oszl_sorrend.length;
  //MaxOszlop korlát
  if(akt_oszlop_max < 10)
  { //oszlopID-ből szám (th_x)
    var res = IDszam.split("_");
    oldal = res[0];
    melyik = parseInt(res[1]);
    //oszlop hozzáadás TH-sorhoz
    for(var j = 0; j < akt_oszlop_max; j++)
    {
      if(melyik == oszl_sorrend[j])
      {
        var refNode = document.getElementById('th_'+(oszl_sorrend[j]));
        uj_th = document.createElement("th");
        uj_th.style.backgroundColor = "orange";
        uj_th.setAttribute("id", "th_"+(oszlop_max));
        uj_th.setAttribute("title", "th_"+(oszlop_max));
        button_b = document.createElement("button");
        button_b.setAttribute("title", "bal_"+(oszlop_max) );
        button_b.setAttribute("class", "bal");
        button_b.onclick = function() { balra_novel(this.title) };
        uj_th.appendChild(button_b);
        button_b = document.createElement("button");
        button_b.setAttribute("title", "torol_"+(oszlop_max+1));
        button_b.setAttribute("class", "torles_oszlop");
        button_b.onclick = function() { oszlop_torol(this.title) };
        uj_th.appendChild(button_b);
        button_b = document.createElement("button");
        button_b.setAttribute("title", "jobb_"+(oszlop_max));
        button_b.setAttribute("class", "jobb");
        button_b.onclick = function() { jobbra_novel(this.title) };
        uj_th.appendChild(button_b);
        uj_th.appendChild(document.createTextNode("Oszlop-"+(oszlop_max+1)));
        //létrehoz aktuális elé
        refNode.parentNode.insertBefore(uj_th, refNode.nextSibling);
      }
    }
    //oszlop hozzáadás TD-sorokhoz    
    for(var i=0; i<(akt_sor_max); i++)
    {
        for(var k = 0; k < (akt_oszlop_max); k++)
        {
          if(melyik == (oszl_sorrend[k]))
          {
            var refNode = document.getElementById('td_'+(sor_sorrend[(i)])+'_'+(oszl_sorrend[k]+1));
            uj_td = document.createElement("td");
            uj_td.setAttribute("id", "td_"+(sor_sorrend[(i)])+'_'+(oszlop_max+1));
            uj_td.setAttribute("title", "td_"+(sor_sorrend[(i)])+'_'+(oszlop_max+1));
            uj_td.appendChild(document.createTextNode( (sor_sorrend[(i)])+''+(oszlop_max+1)) );
            //létrehoz aktuális elé
            refNode.parentNode.insertBefore(uj_td, refNode.nextSibling);
          }
        }
    }
    oszlop_max++;
  }
}
//Aktuális oszlop törlése
function oszlop_torol(IDszam)
{
  var oszl_sorrend = get_oszl_sorrend();
  var akt_oszlop_max = oszl_sorrend.length;
  if(akt_oszlop_max > 3)
  {
    var res = IDszam.split("_");
    var oldal = res[0];
    var melyik = parseInt(res[1]);
    var table = document.getElementById("dinamic_table"); 
    var th_k = table.getElementsByTagName("th"); 
    var td_k = table.getElementsByTagName("td"); 
    for(var i = 0; i < th_k.length; i++)
    { 
      var aktId = th_k[i].id;
      var res = aktId.split("_");
      Id_veg = parseInt(res[1]);
      if( Id_veg == (melyik-1) )
      {
        var torlendo = document.getElementById(aktId);
        torlendo.parentNode.removeChild(torlendo);
      }
    }
    for(var i = 0; i < td_k.length; i++)
    { 
      var aktId = td_k[i].id;
      var res = aktId.split("_");
      Id_veg = parseInt(res[2]);
      if(Id_veg == melyik)
      {
        var torlendo = document.getElementById(aktId);
        torlendo.parentNode.removeChild(torlendo);
      }
    }
  }
}
//Oszlop-sorrend lekérdezés
function get_oszl_sorrend()
{
  var oszl_sorrend = new Array();
  var table = document.getElementById("dinamic_table"); 
  var th_k = table.getElementsByTagName("th"); 
  for(var i = 0; i < th_k.length; i++)
  { 
    var aktId = th_k[i].id;
    var res = aktId.split("_");
    melyik = parseInt(res[1]);
    oszl_sorrend[i] = melyik;
  }
  return oszl_sorrend;
}
//Sor-sorrend lekérdezés
function get_sor_sorrend()
{
  var sor_sorrend = new Array();
  var table = document.getElementById("dinamic_table"); 
  var td_k = table.getElementsByTagName("td"); 
  var index = 0;
  for(var i = 0; i < td_k.length; i++)
  { 
    var aktId = td_k[i].id;
    var res = aktId.split("_");
    oszlop_szam = parseInt(res[2]);
    if(oszlop_szam == 1)
    {
      sor_sorrend[index] = res[1];
      index++;
    }
  }
  return sor_sorrend;
}
//szinező és linkelés figyelésa
function korrig_bg()
{
  if(window.name == 'keret')
  { document.body.style.backgroundColor = "transparent"; }
  else
  {
    document.body.style.background = "#CDEDB8 url('../../f_t_logo.png') 10px 10px no-repeat";
    document.body.style.backgroundSize = "227px 184px";
  }
}