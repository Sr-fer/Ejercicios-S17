class Enemigo extends Personaje{
    constructor(vida, ataque, nombre, nivel){
    super(vida, ataque, nombre, nivel)
}

recibirExperiencia(nivel) {
    var puntos_experiencia = this.nivel+(nivel*20/2)
    return puntos_experiencia
}
}
