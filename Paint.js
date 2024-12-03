let cvs = document.getElementById("canvas")
let ctx = cvs.getContext("2d")

cvs.width = window.innerWidth
cvs.height = window.innerHeight

let lw = 1
let myColor = 'black'
let isMouseDown = false
ctx.lineWidth = lw

let colorPicker = document.getElementById('color')
let slider = document.getElementById("myRange")
let lineWeightValue = document.getElementById("lineWeightValue")

colorPicker.addEventListener("change", function() {
    myColor = colorPicker.value
})

setInterval(() => lineWeightValue.innerHTML = slider.value, 0)

slider.addEventListener("change", function() {
    lw = slider.value
    ctx.lineWidth = lw
})

cvs.addEventListener('mousedown', ()=>{
    isMouseDown = true
})

cvs.addEventListener('mouseup', ()=>{
    isMouseDown = false
    ctx.beginPath()
})

cvs.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
        ctx.fillStyle = myColor
        ctx.strokeStyle = myColor
        ctx.lineTo(event.clientX, event.clientY)
        ctx.stroke()
    
        ctx.beginPath()
        ctx.arc(event.clientX, event.clientY, lw/2, 0, Math.PI * 2)
        ctx.fill()
    
        ctx.beginPath()
        ctx.moveTo(event.clientX, event.clientY)
    }
})

function clearAll() {
    ctx.clearRect(0, 0, cvs.width, cvs.height)
}

function fillIn() {
    ctx.fillStyle = myColor
    ctx.fillRect(0, 0, cvs.width, cvs.height)
}

