function borrado_general() {
    var borrado = document.getElementById("borrar")
    borrado.addEventListener("click", () => {
        localStorage.clear()
        sessionStorage.clear()
        //location.reload()
    })      
}