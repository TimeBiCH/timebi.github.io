// Selecciona el elemento HTML con la clase "slider-contenedor" y lo guarda en la variable "slider".
let slider = document.querySelector(".slider-contenedor")

// Selecciona todos los elementos HTML con la clase "contenido-slider" y los guarda en la variable "sliderIndividual".
let sliderIndividual = document.querySelectorAll(".contenido-slider")

// Inicializa un contador en 1 que se usará para realizar un seguimiento de la posición actual del slider.
let contador = 1;

// Obtiene el ancho del primer elemento dentro de "sliderIndividual" y lo guarda en la variable "width".
let width = sliderIndividual[0].clientWidth;

// Establece un intervalo de tiempo (en milisegundos) para cambiar automáticamente los slides del slider.
let intervalo = 3000;

// Agrega un evento que se dispara cuando la ventana cambia de tamaño. Actualiza el valor de "width" en función del ancho del primer elemento.
window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

// Establece un intervalo que llama a la función "slides" cada "intervalo" milisegundos.
setInterval(function(){
    slides();
}, intervalo);

// Función "slides" que se encarga de cambiar la posición del slider y realizar la animación.
function slides(){
    // Modifica la propiedad "transform" del estilo del elemento "slider" para desplazarlo horizontalmente.
    slider.style.transform = "translate("+(-width*contador)+"px)";

    // Aplica una transición de 0.8 segundos para lograr una animación suave al cambiar de slide.
    slider.style.transition = "transform .8s";

    // Incrementa el contador para avanzar al siguiente slide.
    contador++;

    // Si el contador alcanza el número total de elementos en "sliderIndividual", se reinicia el slider.
    if(contador == sliderIndividual.length){
        setTimeout(function(){
            // Vuelve a la posición inicial (primer slide).
            slider.style.transform = "translate(0px)";

            // Elimina la transición para evitar que el retorno al primer slide sea animado.
            slider.style.transition = "transform 0s";

            // Restablece el contador a 1 para comenzar de nuevo.
            contador = 1;
        }, 1500) // Espera 1.5 segundos antes de restablecer el slider.
    }
}