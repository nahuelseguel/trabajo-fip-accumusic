

let botones = document.querySelectorAll(".btn-playlist"); // Manoteamos todos los botones


botones.forEach(boton => {  /*recorremos todos los botones y les ponemos el listener*/
    boton.addEventListener("click", (evento) => {
        // Obtenemos el valor del atributo 'data-playlist' del botón clickeado
        let playlist = evento.currentTarget.dataset.playlist;

        switch (playlist) {
            case "Lluvioso":
                console.log("Cargando lista sugerida para dias de lluvia...");
                
                break;
            case "Soleado":
                console.log("Cargando lista sugerida para dias Soleados...");
                
                break;
            case "Ventoso":
                console.log("CCargando lista sugerida para dias Ventosos...");
                
                break;
            case "Frio/Nieve":
                console.log("Cargando lista sugerida para dias de Frio / Nieve......");
                
                break;
            default:
                console.log("No se encontró una playlist para el botón.");
                break;
        }
    });
});