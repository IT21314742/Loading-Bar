const counterEL = document.querySelector(".counter")

const barEL = document.querySelector(".loading-bar-front")

let idx = 0;

updateNum()

function updateNum(){
    counterEL.innerHTML = idx + "%"
    barEL.style.width = idx + "%"
    idx++
    if(idx < 101){
        setTimeout(updateNum, 20)
    }
}