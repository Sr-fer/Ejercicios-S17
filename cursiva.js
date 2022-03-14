function letras_cursiva(){

preload_cursiva()
    
var cursiva = document.getElementById("cursiva")
cursiva.addEventListener("change",(event)=> {
if (cursiva.checked) {
cambiaCursiva(event) 
}
else if(!cursiva.checked) {
cambioNormal_cursiva()
}
})
}
    
function cambiaCursiva(event){
   var cuerpo = document.getElementById("cuerpo")
   cuerpo.style.fontStyle = event.currentTarget.value;
   console.log(event.currentTarget.value);
   localStorage.setItem("cursiva_fuente", event.currentTarget.value);
}
    
function cambioNormal_cursiva() {
    var cuerpo = document.getElementById("cuerpo")
    cuerpo.style.fontStyle = "normal"
    localStorage.setItem("normal_fuente", cuerpo.style.fontStyle)
}
    
function preload_cursiva() {
    var cursiva = document.getElementById("cursiva")
    var SetCursiva = localStorage.getItem("cursiva_fuente")
        
    cursiva.checked = SetCursiva
    cuerpo.style.fontStyle = SetCursiva
}