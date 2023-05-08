// mousedown
button.addEventListener("click", myFunction);
/*
function mouseClick(){
    var tombnev = [];
    var tombNev = new Array(ELEM1, ELEM2, ELEM3)
    const cb = document.getElementsByClassName("checkbox");

    let evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
    });
    cb.dispatchEvent(evt)
    tombnev[0] = ELEM1;
    tombnev[1] = ELEM2;
    tombnev[2] = ELEM2;

}*/

// buttons
document.getElementById("demo").addEventListener("mousedown", mouseDown);
document.getElementById("demo").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("demo").innerHTML = "The mouse button is held down.";
}

function mouseUp() {
  document.getElementById("demo").innerHTML = "You released the mouse button.";
}

// contextmenu
// Assign an "contextmenu" event to div01:
document.getElementById("div01").addEventListener("contextmenu", myFunction);

// Prevent default context menu:
const div = document.getElementById("div01");
div.addEventListener("contextmenu", (e) => {e.preventDefault()});

// Show hidden content:
function myFunction() {
  const div = document.getElementById("myDiv");
  div.style.visibility = "visible";
}
