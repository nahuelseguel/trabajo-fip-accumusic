let botones = document.querySelectorAll(".btn-playlist");
const reproductor = document.getElementById('audioplayer');

// La lista de música debe estar fuera del bucle para que se pueda usar.
const musicaFrio = ['src/frio/Ed Sheeran - Perfect (Official Music Video).mp3'];
const musicaTormenta = ['src/lluvia/Guns N Roses - November Rain.mp3']


let listaActualDeCanciones = [];
let indiceCancionActual = 0;

function cargarMusica(listaDeCanciones) {
    listaActualDeCanciones = listaDeCanciones;
    indiceCancionActual = 0;

    if (listaActualDeCanciones.length > 0) {
        reproductor.src = listaActualDeCanciones[indiceCancionActual];
        reproductor.play();
        console.log(`Reproduciendo: ${listaActualDeCanciones[indiceCancionActual]}`);
    } else {
        console.log("La lista de canciones está vacía.");
    }
}


function playPrev() {
           if (listaActualDeCanciones.length === 0) {
        console.log("No hay canciones en la lista actual.");
        return; 
    }
    // Decrementamos el índice para ir a la canción anterior
    indiceCancionActual--;
    // Si llegamos al princpio del arreglo lo volvemos al final de la lista 
    if (indiceCancionActual < 0) {
        indiceCancionActual = listaActualDeCanciones.length - 1;
    }
    // Cargamos y reproducimos la cancion
    reproductor.src = listaActualDeCanciones[indiceCancionActual];
    reproductor.play();
    console.log(`Reproduciendo canción anterior: ${listaActualDeCanciones[indiceCancionActual]}`);
    console.log("Reproduciendo canción anterior...");
}

function playNext() {
      // Verificamos si hay canciones
    if (listaActualDeCanciones.length === 0) {
        console.log("No hay canciones en la lista actual.");
        return; 
    }
    indiceCancionActual++;

    // Si el indice llega al final, lo igualamos a 0 para volver a mepezar la lista
    if (indiceCancionActual >= listaActualDeCanciones.length) {
        indiceCancionActual = 0;
    }

    // asignamos la nueva cancion y la  reproducimos
    reproductor.src = listaActualDeCanciones[indiceCancionActual];
    reproductor.play();
    console.log(`Reproduciendo siguiente canción: ${listaActualDeCanciones[indiceCancionActual]}`);
    console.log("Reproduciendo siguiente canción...");
}


botones.forEach(boton => {
    // el listener escucha por clicks en cada boton.
    boton.addEventListener("click", (evento) => {
        // obtenemos el valor con el current  del atributo 'data-playlist', esto es lo q fallaba por que estabamos trayendo el valor de la imagen
        let playlist = evento.currentTarget.dataset.playlist;

       
        switch (playlist) {
            case "Lluvioso":
                console.log("Cargando lista sugerida para días de lluvia...");
                cargarMusica(musicaTormenta);
                break;
            case "Soleado":
                console.log("Cargando lista sugerida para días Soleados...");
                break;
            case "Ventoso":
                console.log("Cargando lista sugerida para días Ventosos...");
                break;
            case "Frio/Nieve":
                console.log("Cargando lista sugerida para días de Frío / Nieve...");
                cargarMusica(musicaFrio);
                break; 
            default:
                console.log("No se encontró una playlist para el botón.");
                break;
        }
    });
});

/*
// Obtiene una lista de todos los botones
const botones = document.querySelectorAll('.btn-playslit');   -----------------------

// Recorre cada botón y le añade un evento de clic
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Lee la ruta de la carpeta desde el atributo 'data-carpeta' del botón
        const rutaCarpeta = boton.dataset.carpeta;
        
        // Llama a la función que cargará la música
        cargarMusica(rutaCarpeta);
    });
});

// Función de ejemplo para cargar la música (tendrías que implementarla)
function cargarMusica(ruta) {
    console.log(`Cargando música desde: ${ruta}`);
    // Aquí iría el código para leer y cargar los archivos en el reproductor
} */
