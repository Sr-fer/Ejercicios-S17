function cambio_color_heroe() {
    preload_color();

    var color = document.getElementsByClassName("colHeroe");
    for (var i = 0; i < color.length; i++) {
    color[i].addEventListener("click", (event) => {
    cambiaColor(event);
    });
    }
    }

    function cambiaColor(event) {

    var heroe_style = document.getElementById("heroe");
    heroe_style.style.color = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("colHeroe", event.currentTarget.value);

    }

    function preload_color() {

    var heroe_style = document.getElementById("heroe");
    var colorHeroe = localStorage.getItem("colHeroe");
    heroe_style.style.color = colorHeroe;
    var color = document.getElementsByClassName("colHeroe");
    for (var i = 0; i < color.length; i++) {
    if (color[i].value == colorHeroe) {
        color[i].checked = true;
    } 
    else {
        color[i].checked = false;
    }
    }
    }