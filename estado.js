function comprobarEstado(heroe1, enemigo1) {
    var estado = -1;
    if (!heroe1.vidaomuerte()) {
        estado = 1; //Heroe muere
    } else if (!enemigo1.vidaomuerte()) {
        estado = 0; //Enemigo muere
    }

    return estado;
}

function isDefendiendo_comprobacion(heroe1) {
    var estado_d = -1 //!Defensa
    if(heroe1.isDefendiendo) {
        estado_d = 1 //Defensa
    }
    return estado_d
}