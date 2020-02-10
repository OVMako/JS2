var canvasFront = document.getElementById('front-canvas'),
    canvasBack = document.getElementById('back-canvas'),
    ctxf = canvasFront.getContext('2d'),
    ctxb = canvasBack.getContext('2d')

var canvasWidth = document.getElementById('canvas-width'),
var canvasHeight = document.getElementById('canvas-height')

var canvasPosition

var mouseX, mouseY,
    mouseXl = document.getElementById('mouseX'),
    mouseYl = document.getElementById('mouseY')

var tools = [], sizes = []

tools.pensil = document.getElementById('pensil')
tools.eraser = document.getElementById('peraser')

sizes.small = document.getElementById('small')
sizes.middle = document.getElementById('middle')
sizes.big = document.getElementById('big')

var eraserSize = 8
    eraserCursor = "url('https://cdn4.iconfinder.com/data/icons/design-solid-style/24/eraser-512.png'), auto"

var canvasClear = document.getElementById('clear-canvas'),
    fileImg = document.getElementById('file-img'),
    properties = document.getElementById('properties'),
    ingWidth = document.getElementById('img-width'),
    imgHeight = document.getElementById('img-height')

var startX = 100, startY = 100

window.onload = function() {
    canvasPosition = canvasBack.getBoundingClientRect()
}

canvasWidth.onchange = function() {
    canvasFront.width = canvasWidth.nodeValue
    canvasBack.width = canvasWidth.nodeValue
}

canvasHeight.onchange = function() {
    canvasFront.height = canvasHeight.value
    canvasBack.height = canvasHeight.value
}

canvasFront.onmousemove = function(e) {
    mouseX = e.clientX - canvasPosition.left
    mouseY = e.clientY - canvasPosition.top
    mouseXl.innerHTML = mouseX
    mouseYl.innerHTML = mouseY
}

canvasClear.onclick = function() {
    canvasBack.width = canvasBack.width 
    canvasFront.width = canvasFront.width
}

addAllHAndlers(tools, "tool-active")
addAllHAndlers(sizes, "size-active")

function addAllHAndlers(arr, className) {
    for (var item in arr) {
        arr[item].onmousedown = addAllHandler(arr[item], arr, className)
        
    }
}

function addAllHandler(element, arr, className) {
    return function() {
        removeAllClasses(arr)
        element.setAttribute("class", className)
    }
}

function removeAllClasses(arr) {
    for (var item in arr) {
        arr[item].removeAllAttribute("class")
    }
}

sizes.small.onclick = function() {
    ctxb.lineWidth = 1
    eraserSize = 8
    // eraserCursor = "url('https://cdn4.iconfinder.com/data/icons/design-solid-style/24/eraser-512.png'), auto"
}

sizes.miuddle.onclick = function() {
    ctxb.lineWidth = 1
    eraserSize = 16
    // eraserCursor = "url('https://cdn4.iconfinder.com/data/icons/design-solid-style/24/eraser-512.png'), auto"
}

sizes.big.onclick = function() {
    ctxb.lineWidth = 1
    eraserSize = 32
    // eraserCursor = "url('https://cdn4.iconfinder.com/data/icons/design-solid-style/24/eraser-512.png'), auto"
}

var processing = false
var operations = []

operations['mousedown'] = function() {
    processing = true
    ctxb.beginPath()
}

operations['mouseup'] = function() {
    processing = false
}

canvasFront.addEventListener("mousedown", function() {
    operations["mousedown"] ()
})

canvasFront.addEventListener("mouseup", function() {
    operations["mouseup"] ()
})

canvasFront.addEventListener("mousemove", function() {
    operations["mousemuve"] ()
})

tools.pensil.onclick = function() {
    canvasFront.style.cursor = "pointer"
    operations['mousemove'] = function() {
        if (processing) {
            ctxb.lineTo(mouseX, mouseY)
            ctxb.stroke()

        }
    }
}

