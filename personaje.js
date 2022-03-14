class Personaje {
    constructor(vida, ataque, nombre, nivel, defensa, isDefendiendo){
        this.vida = vida
        this.ataque = ataque
        this.nombre = nombre
        this.nivel = nivel 
        this.defensa = defensa
        this.isDefendiendo = false
}
getVida() {
    let mensaje_vida;
    mensaje_vida = "La vida de "+ this.nombre + " es " + this.vida
    return mensaje_vida
    }
    
getAtaque() {
    let mensaje_ataque;
    mensaje_ataque = "El ataque de "+ this.nombre + " es " + this.ataque
    return mensaje_ataque
    }
    
getNombre() {
    let mensaje_nombre;
    mensaje_nombre = "El nombre de "+ this.nombre + " es " + this.nombre
    return mensaje_nombre
    }
    
getNivel() {
    let mensaje_nivel;
    mensaje_nivel = "El nivel de "+ this.nombre + " es " + this.nivel
    return mensaje_nivel
    }

getDefensa() {
    let mensaje_defensa;
    mensaje_nivel = "La defensa de "+ this.nombre + " es " + this.nivel
    return mensaje_defensa
    }
    
    
setVida(vida) {
    this.vida = vida
    }
    
setAtaque(ataque) {
    this.ataque = ataque
    }
    
setNombre(nombre) {
    this.nombre = nombre
    }
    
setNivel(nivel) {
    this.nivel = nivel
    }
setDefensa(defensa) {
    this.defensa = defensa
    }

setisDefendiendo(isDefendiendo) {
    this.isDefendiendo = isDefendiendo
    }

recibirDanio(vida, ataque) {
    this.vida = vida - ataque
    }
vidaomuerte() {
    if(this.vida > 0) {
    return true
    }
    if(this.vida <= 0) {
    return false
    }
    }   
    
hacerDanio() {
    var daño_jugador = (this.ataque*this.nivel)
    return daño_jugador
    } 
    
}
