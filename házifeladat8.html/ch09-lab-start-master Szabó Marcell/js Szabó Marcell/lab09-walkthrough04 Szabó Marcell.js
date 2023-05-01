/* code goes here */
function simpleHandler(event){
    var content = document.getElementById("Content");
    if(btn.innerHTML == "Hide"){
        // content.style.display = "none";
        btn.innerHTML = "Show";
        setTimeout(function(){
            content.style.display = "none"
        },1000);
    }
    else{
        content.style.display = "block";
        btn.innerHTML = "Hide";
        setTimeout(function(){
            content.className = "makeItNormal";
        },500);
    }
    // alert("button was clicked");
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function(event){
    img.className = "makeItGray";
});
img.addEventListener("mouseout", function(event){
    img.className = "makeItNormal";
});
