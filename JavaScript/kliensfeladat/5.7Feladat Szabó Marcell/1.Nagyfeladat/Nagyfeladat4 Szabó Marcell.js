// mousedown
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

}
// buttons
let log = document.createTextNode("?");
function logButtons(e){
    log.data = `${e.buttons} (${e.type})`;
}
document.addEventListener("mouseup", logButtons);
document.addEventListener("mousedown", logButtons);
document.querySelector("#log").appendCgild(log);

// contextmenu
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
const contextMenu = document.querySelector(".context");
contextMenu.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    contextMenu.textContent= "GeeksforGeeks";
    contextMenu.style = "color:green"
});