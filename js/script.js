//Timer fields
const hourElement = document.querySelector(".hour")
const minElement = document.querySelector(".min")
const secElement = document.querySelector(".sec")
const msElement = document.querySelector(".ms")


//Button
const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
const pausaButton = document.querySelector(".pausa")
const newButton = document.querySelector(".new")
//Listeners
startButton .addEventListener('click',()=>{
clearInterval(interval)
interval = setInterval(startTimer,10)
})

stopButton.addEventListener('click',()=>{
    clearInterval(interval)
    clearFil()
})
//Variebls
let hour = 00,
min = 00,
sec = 00,
ms = 00,
interval,
caunter = 0

function startTimer (){
    ms++
    if(ms<9){
        msElement.innerText = "0" + ms
    }
    if(ms>9){
        msElement.innerText = ms
    }
    if(ms>99){
        sec++;
        secElement.innerText ="0" + sec
        ms = 0;
        msElement.innerText = "0" + ms
    }
    //Minutes
    if(sec > 9){
        secElement.innerText = sec
    }
    if(sec > 60){
        min++
        minElement.innerText =  min
        sec =0
        secElement.innerText="0"+ sec
    }
}
function clearFil (){
    hour = 00
    min = 00
    sec = 00
    ms = 00
    hourElement.textContent ="00"
    minElement.textContent = "00"
    secElement.textContent ="00"
    msElement.textContent ="00"

}

pausaButton.addEventListener('click',()=>{
    clearInterval(interval)
})

newButton.addEventListener('click',()=>{
    clearInterval(interval)
    caunter++
    const resalts = document.querySelector('.resolts')
    const block = document.createElement('div')
    block.innerText = `Resolt ${caunter}: ${hour}:${min}:${sec}:${ms} `
resalts.append(block)
})