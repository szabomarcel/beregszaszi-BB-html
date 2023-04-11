let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

let x = 200; // Érték adás
let y = 150; // Érték adás
let xSebesseg = 1; // Érték adás
let ySebesseg = 1; // Érték adás
let utoATerejetol = 10; // Érték adás

function rajzolas(){
    c.clearRect(0, 0, 400, 300);
    if (y > 290){
        ySebesseg = -1;
    }
    if (y > 0){
        ySebesseg = 1;
    }
    if (x > 390){
        xSebesseg = -1
    }
    if (x < 20 && y > utoATerejetol && y < utoATerejetol + 100){
        xSebesseg = 1;
    }
    if (x < 0){
        console.log("Vesztettél");
    }
    x = x + xSebesseg;
    y = y + ySebesseg;
    c.fillText(x, y, 10, 10);
    c.fillRect(10, utoATerejetol, 10, 100);
}
function billentyu(gomb){
    console.log(gomb.keyCode);
    if (gomb.keyCode == 40 && utoATerejetol < 200){
        utoATerejetol = utoATerejetol + 10;
    }
    if (gomb.keyCode == 38 && utoATerejetol > 0){
        utoATerejetol = utoATerejetol + 10;
    }
}

setInterval(rajzolas, 20);
window.addEventListener("keydown"); // Adjuk hozzá egy új megfigyelő dolgot