function main(nombre_heroe_) {

//cambia el tamanio de fuente entre 12-26px
tamnio_fuente()
//cambia el color del heroe entre Marron, Azul y Morado
cambio_color_heroe()
//cambia el color de fondo del heroe Verde, Rosa, Negro o Blanco
cambio_color_fondo_heroe()
//cambia el color de fondo del enemigo entre Naranja, Amarillo, Negro o Blanco
cambio_color_fondo_enemigo()
//cambia el texto a letras en cursivas
letras_cursiva()
//cambia el texto a letras en negrita
letras_negrita()
//cuadro de texto para anotaciones
textArea_save()
//borra la cache
borrado_general()
//conservado de nombre
preload_nombre()
    
var enemigo1 = new Enemigo(100,4,"Ruperto",2,2)
$("#nombre_enemigo").html(enemigo1.nombre)
$("#salude").html(enemigo1.vida + "/100")
$("lvl").html(enemigo1.nivel)
$(".enemigo").css({
    "color": "red",
    "text-align":"center",
    "position":"absolute",
    "left": "60%",
    "top": "10%",
    "border-with":"3px",
    "border-style":"solid",
    "border-color":"black"
})
var heroe1 = new Heroe(100, 10, nombre_heroe_main, 2, 3, false)
var nombre_heroe_main = localStorage.getItem("nombre__heroe")
heroe1.setNombre(nombre_heroe_main)
console.log(heroe1)
heroe1.setExperiencia(12)
$("#nombre_heroe").html(heroe1.nombre)
$("#saludh").html(heroe1.vida + "/100")
$("#experiencia").html(heroe1.experiencia)
$("#nivel").html(heroe1.nivel)
$("#armadura").html(heroe1.defensa)
$(".heroe").css({
    "text-align":"center",
    "position":"absolute",
    "left": "30%",
    "top": "8%",
    "border-with":"3px",
    "border-style":"solid",
    "border-color":"black"
})


 //Boton ataque
document.getElementById("boton_ataque").addEventListener("click",() => { 
heroe1.isDefendiendo = false
//ataque
enemigo1.recibirDanio(enemigo1.vida, heroe1.hacerDanio())
$("#salude").html(enemigo1.vida + "/100")

//comprobar estado heroe
if(comprobarEstado(heroe1, enemigo1) == 1) {
    var nueva_partida = prompt("Quieres jugar una nueva partida? 1:Si 2:No")

if(nueva_partida == 1) {
    heroe1 = new Heroe
    heroe1.setVida(100)
    heroe1.setExperiencia(12)
    heroe1.setNivel(2)
    heroe1.setAtaque(10) 
    heroe1.setNombre(prompt("Elige el nombre de tu heroe"))
    heroe1.setDefensa(3)
    enemigo1.setVida(100)
}
if(nueva_partida == 2) {
    document.getElementById("boton_ataque").disabled = true
    document.getElementById("boton_defensa").disabled = true
}
}
//ataque
heroe1.recibirDanio(heroe1.vida, enemigo1.hacerDanio())
$("#saludh").html(heroe1.vida + "/100")

//comprobar estado enemigo
if(comprobarEstado(heroe1, enemigo1) == 0) {

var nuevo_enemigo = prompt("Quieres generar un nuevo enemigo? 1:Si 2:No")

heroe1.recibirExperiencia(enemigo1.recibirExperiencia(1))
$("#experiencia").html(heroe1.experiencia)
$("#nivel").html(heroe1.nivel)


if(nuevo_enemigo == 1) {
enemigo1 = new Enemigo 
enemigo1.setVida(100)
enemigo1.setNivel(2) 
enemigo1.setAtaque(4) 
enemigo1.setNombre("Ruperto")
enemigo1.setDefensa(2)
heroe1.setVida(100)
}

if(nuevo_enemigo == 2) {
document.getElementById("boton_ataque").disabled = true
document.getElementById("boton_defensa").disabled = true
}
}
})

//boton defensa
document.getElementById("boton_defensa").addEventListener("click",() => { 
heroe1.isDefendiendo = true
if(isDefendiendo_comprobacion(heroe1) == 1) {
heroe1.recibirDanio(heroe1.vida, enemigo1.hacerDanio() - heroe1.defensa)
$("#saludh").html(heroe1.vida + "/100")

//estado heroe
    if(comprobarEstado(heroe1, enemigo1) == 1) {
        var nueva_partida = prompt("Quieres jugar una nueva partida? 1:Si 2:No")
    
    if(nueva_partida == 1) {
        heroe1 = new Heroe
        heroe1.setVida(100)
        heroe1.setExperiencia(12)
        heroe1.setNivel(2)
        heroe1.setAtaque(10) 
        heroe1.setNombre(prompt("Elige el nombre de tu heroe"))
        heroe1.setDefensa(3)
        enemigo1.setVida(100)
    }
    if(nueva_partida == 2) {
        document.getElementById("boton_ataque").disabled = true
        document.getElementById("boton_defensa").disabled = true
    }
}
}

//comprobacion defensa
else if(isDefendiendo_comprobacion(heroe1) == -1) {
heroe1.recibirDanio(heroe1.vida, enemigo1.hacerDanio()) 
$("#saludh").html(heroe1.vida + "/100")

//estado enemigo
if(comprobarEstado(heroe1, enemigo1) == 0) {
    var nuevo_enemigo = prompt("Quieres generar un nuevo enemigo? 1:Si 2:No")

    heroe1.recibirExperiencia(enemigo1.recibirExperiencia(1))
    $("#experiencia").html(heroe1.experiencia)
    $("#nivel").html(heroe1.nivel) 

    if(nuevo_enemigo == 1) {
    enemigo1 = new Enemigo 
    enemigo1.setVida(100)
    enemigo1.setNivel(2) 
    enemigo1.setAtaque(4) 
    enemigo1.setNombre("Ruperto")
    enemigo1.setDefensa(2)
    heroe1.setVida(100)
}
if(nueva_partida == 2) {
    document.getElementById("boton_ataque").disabled = true
    document.getElementById("boton_defensa").disabled = true
}
} 
}
})
}

main()