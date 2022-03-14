function cambio_color_fondo_enemigo() {
    preload_color_fondo_enemigo();
    var color_fondo = document.getElementsByClassName("colFondoE");
    for (var i = 0; i < color_fondo.length; i++) {
    color_fondo[i].addEventListener("click", (event) => {
    cambiaColorFondoE(event);
    });
    }
    }

    function cambiaColorFondoE(event) {

    var enemigo_style_fondo = document.getElementById("enemigo");
    enemigo_style_fondo.style.backgroundColor = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("colFondoE", event.currentTarget.value);

    }

    function preload_color_fondo_enemigo() {

    var enemigo_style_fondo = document.getElementById("enemigo");
    var colorEnemigoFondo = localStorage.getItem("colFondoE");
    enemigo_style_fondo.style.backgroundColor = colorEnemigoFondo;
    var color_fondo = document.getElementsByClassName("colFondoE");
    for (var i = 0; i < color_fondo.length; i++) {
    if (color_fondo[i].value == colorEnemigoFondo) {
        color_fondo[i].checked = true;
    } 
    else {
        color_fondo[i].checked = false;
    }
    }
    }