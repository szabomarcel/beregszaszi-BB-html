const tarolo = window.localStorage;
tarolo.setItem("nev", "ertek");
tarolo.getItem("nev"); // "ertek"
tarolo.removeItem("nev");
tarolo.getItem("nev"); // null

const osszetetAdat = {
    mezo1: "ertek",
    mezo2: 100,
    mezo3: [true, false]
}
tarolo.setItem("osszetettAdat",osszetetAdat, JSON.stringify("osszetetAdat"));
JSON.parse(tarolo.getItem("osszetettAdat")); // {mezo1; "ertek", mezo2: 100, mezo3: [true, false]}