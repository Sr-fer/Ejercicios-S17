class Heroe extends Personaje{
    constructor(vida, ataque, nombre, nivel, experiencia, defensa, isDefendiendo){
    super(vida, ataque, nombre, nivel, defensa, isDefendiendo)
    this.experiencia = experiencia
}
getExperiencia() {
    let mensaje_experiencia_heroe;
    mensaje_experiencia_heroe = "Experiencia restante para el siguiente nivcel es " + this.experiencia
    return mensaje_experiencia_heroe
    }
    
setExperiencia(experiencia) {
    this.experiencia = experiencia
    }
       
recibirExperiencia(puntos_experiencia) {
if(puntos_experiencia-this.experiencia <= 0) {
console.log("Has subido de nivel")
this.nivel = this.nivel+1
this.experiencia = 50
}
else{
console.log(puntos_experiencia-this.experiencia)
}
}
}