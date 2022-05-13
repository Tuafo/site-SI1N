var dvTempo
var btStart
var btPause
var btReset
var tempo = 0 
var id

init()


function init() {
    dvTempo = document.getElementById("tempo")
    
    btStart = document.getElementById("start")
    btStart.onclick = start

    btPause = document.getElementById("pause")
    btPause.onclick = pause

    btReset = document.getElementById("reset")
    btReset.onclick = reset

    btPause.disabled = true
    btReset.disabled = true
}

function update() {
    tempo = tempo + 0.1
    dvTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start() {
    id = setInterval(update, 100)
    btPause.disabled = false
    btReset.disabled = false
    btStart.disabled = true
}

function pause() {
    btStart.disabled = false
    btPause.disabled = true

    clearInterval(id)
}

function reset() {
    btPause.disabled = true
    btReset.disabled = true
    btStart.disabled = false

    clearInterval(id)

    tempo = 0

    dvTempo.innerHTML = "0.0s"
}
