function cambio_color_fondo_heroe() {
    preload_color_fondo_heroe();

    var color_fondo = document.getElementsByClassName("colFondoH");
    for (var i = 0; i < color_fondo.length; i++) {
    color_fondo[i].addEventListener("click", (event) => {
    cambiaColorFondoH(event);
    });
    }
    }

    function cambiaColorFondoH(event) {

    var heroe_style_fondo = document.getElementById("heroe");
    heroe_style_fondo.style.backgroundColor = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("colFondoH", event.currentTarget.value);

    }

    function preload_color_fondo_heroe() {

    var heroe_style_fondo = document.getElementById("heroe");
    var colorHeroeFondo = localStorage.getItem("colFondoH");
    heroe_style_fondo.style.backgroundColor = colorHeroeFondo;
    var color_fondo = document.getElementsByClassName("colFondoH");
    for (var i = 0; i < color_fondo.length; i++) {
    if (color_fondo[i].value == colorHeroeFondo) {
        color_fondo[i].checked = true;
    } 
    else {
        color_fondo[i].checked = false;
    }
    }
    }