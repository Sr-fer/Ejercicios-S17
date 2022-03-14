function textArea_save() {
guardado()
var textArea = document.getElementById("textArea")

textArea.addEventListener("keyup", (event) => {
guardarArea(event)
})

} 

function guardarArea(event){
    var area = event.currentTarget
    localStorage.setItem("texto", area.value)
}

function guardado() {
    var area = localStorage.getItem("texto")
    var textArea = document.getElementById("textArea")
    textArea.value = area
}