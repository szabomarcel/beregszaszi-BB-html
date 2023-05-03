let userList = document.querySelectorAll('.userBall');
let actualList = document.querySelectorAll('.actualBall');
let button = document.querySelectorAll('.btn');
let index = 0;

function displayActuals(){
    actualList.forEach(ball => {
        ball.innerHTML = random_num_actual()
    })
}
function random_num(){
    return Math.floor(Math.random() * 50) + 1
}
function random_num_actual(){
    return Math.floor(Math.random() * 50) + 1
}
function opacity(min, max){
    return Math.random()*(max-min) + min;
}
function randDeg(min, max){
    return Math.random()*(max-min) + min;
}

buton.addEventListener('click',() =>{
    let rgbColor = `rgba(0,0,0,${opacity(0.4,1)})`;
    let bgColor = `linear-gradien(${randDeg(0,360)}deg, ${rgbColor},${rgbColor})`
    let randomNumber = random_num();
    useList[index].innerHTML = randomNumber;
    userList[index].style.background = `${bgColor}`
    actualList[index].style.background = `${bgColor}`
    index++; 

    if(index == 6){
        displayActuals()
        setTimeout(() => {
            alert('Reloading Page')
            location.reload()
        }, 5000); // 5000 milliseconds == 5 seconds
    }
})