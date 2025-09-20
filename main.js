let botones = document.querySelectorAll(".btn-playlist");
const reproductor = document.getElementById('audioplayer');

// La lista de música debe estar fuera del bucle para que se pueda usar.

const musicaTormenta = [
  'src/lluvia/Guns N Roses - November Rain.mp3',
  'src/lluvia/Adele - Rolling in the Deep (Official Music Video).mp3',
  'src/lluvia/Amy Winehouse - Back To Black.mp3',
  'src/lluvia/Billie Eilish - Happier Than Ever (Official Music Video).mp3',
  'src/lluvia/Héroes del Silencio - Entre dos tierras (videoclip oficial).mp3',
  'src/lluvia/Metallica_ Nothing Else Matters (Official Music Video).mp3',
  'src/lluvia/Mujer Amante.mp3',
];

const musicaSoleado = [
  "src/soleado/Guns N' Roses - Paradise City (Official Music Video).mp3",
  'src/soleado/INXS - Suicide Blonde (Official Music Video).mp3',
  'src/soleado/La Renga - La razón que te demora, Detonador de sueños.mp3',
  'src/soleado/Michael Jackson - Smooth Criminal (Official Video).mp3',
  'src/soleado/Mike Tyson - Till I Collapse (Eminem)  BoxinLegends.mp3',
  'src/soleado/NSYNC - Bye Bye Bye (Official Video).mp3',
  'src/soleado/The White Stripes - Seven Nation Army (Official Music Video).mp3',
];

const musicaVentoso = [
  `src/viento/Airbag - Y si te vas.mp3`,
  `src/viento/Alanis Morissette - Ironic (Official 4K Music Video).mp3`,
  `src/viento/Arctic Monkeys - Do I Wanna Know_ (Official Video).mp3`,
  `src/viento/Avril Lavigne - Complicated (Official Video).mp3`,
  `src/viento/Gotye - Somebody That I Used To Know (feat. Kimbra) [Official Music Video].mp3`,
  `src/viento/Hoobastank - The Reason (Official Music Video).mp3`,
  `src/viento/Nelly Furtado - I'm Like A Bird (Official Music Video).mp3`,
];

const musicaFrio = [
  'src/frio/Ed Sheeran - Perfect (Official Music Video).mp3',
  'src/frio/David Kushner - Daylight (Official Music Video).mp3',
  'src/frio/Johnny Cash - Hurt.mp3',
  'src/frio/Sia - Chandelier (Official Video).mp3',
  'src/frio/Teddy Swims - Lose Control (The Village Sessions).mp3',
  'src/frio/The Cranberries - Linger (Official Music Video).mp3',
  'src/frio/twenty one pilots_ Stressed Out [OFFICIAL VIDEO].mp3',

];

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
        cargarMusica(musicaSoleado);0
        break;
      case "Ventoso":
        console.log("Cargando lista sugerida para días Ventosos...");
        cargarMusica(musicaVentoso);
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


let lista = document.getElementById("listaAdd");
let arrLista = [];
let maxCanciones = 10;
let temas = document.getElementById("temas");

let agregar = document.getElementById("agregarLista").addEventListener("click", () => {
  let valorInput = document.getElementById("inputAdd").value;
  if (arrLista.length < maxCanciones && valorInput != ``) {
    arrLista.push(valorInput);
    mostrarLista();
  }
}
);

function mostrarLista() {
  temas.innerHTML = "";
  let cleanInput = document.getElementById("inputAdd");
  cleanInput.value = ``;

  for (let i = 0; i < arrLista.length; i++) {
    let li = document.createElement("li");
    li.textContent = arrLista[i];

    let btnModificar = document.createElement("button");
    btnModificar.textContent = "Modificar";

    btnModificar.addEventListener("click", () => {
      let nuevoValor = prompt("Introduce el nuevo valor:", arrLista[i]);
      if (nuevoValor !== null && nuevoValor !== "") {
        arrLista[i] = nuevoValor;
        mostrarLista();
      }
    });

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      arrLista.splice(i, 1);
      mostrarLista();
    });
    
    temas.appendChild(li);
    li.appendChild(btnModificar);
    li.appendChild(btnEliminar);
  }
}
function borrarLista(){
    document.getElementById("btncleanli").addEventListener("click", () => {    //aca quedo la funcion echa, tomamos el click, llevamos el arreglo a 0 items y mostramos la lista del arreglo (ya con 0 items) 
        arrLista.length = 0;
        mostrarLista();
        alert("La lista ha sido eliminada: ", arrLista);
    });
}
borrarLista();
//---------------------------------------------------------
