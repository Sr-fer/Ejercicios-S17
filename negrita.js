function letras_negrita(){

preload_negrita()

var negrita = document.getElementById("negrita")
negrita.addEventListener("change",(event)=> {
if (negrita.checked) {
cambiaNegrita(event) 
}
else if(!negrita.checked) {
cambioNormal_negrita()
}
})
}

function cambiaNegrita(event){
    var cuerpo = document.getElementById("cuerpo")
    cuerpo.style.fontWeight = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("negrita_fuente", event.currentTarget.value);
}

function cambioNormal_negrita() {
    var cuerpo = document.getElementById("cuerpo")
    cuerpo.style.fontWeight = "normal"
    localStorage.setItem("normal_fuente", cuerpo.style.fontWeight)
}

function preload_negrita() {
    var negrita = document.getElementById("negrita")
    var SetNegrita = localStorage.getItem("negrita_fuente")

    
    negrita.checked = SetNegrita
    cuerpo.style.fontWeight = SetNegrita

}