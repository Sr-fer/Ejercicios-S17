function preload_nombre(){
if(localStorage.getItem("nombre__heroe")) {
    var pregunta_nombre = prompt("Quieres conservar el nombre de la partida anterior? 1:Si 2:No")
    if(pregunta_nombre == "1") {
    localStorage.getItem("nombre__heroe")
    }
else {
    var nombre_heroe_guard = prompt("Nombre del Heroe")
    localStorage.setItem("nombre__heroe", nombre_heroe_guard)
}
}
else{
    var nombre_heroe_guard = prompt("Nombre del Heroe")
    localStorage.setItem("nombre__heroe", nombre_heroe_guard)
}
}


