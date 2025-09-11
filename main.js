// const cambiarImagen = nombreLista => {
//   const imagen = document.getElementById("imagenDePlaylist");

  
//   const rutasImg = {
//     tormenta: "src/tormenta",
//     soleado: "src/soleado.jpg",
//     ventoso: "src/ventoso.jpg",
//     nieveFrio: "src/nieve.jpg"
//   };
  
//   imagen.src = rutasImg[nombreLista] || "img/default.jpg";
// };

// const valorbtn = document.getElementById("btnPLaylist").value;

let btnPLaylist = document.getElementById("btnPlaylist").addEventListener("click" , ()=> {
        switch(btnPLaylist){
          //corregir como se agarra el valor
          case  btnPLaylist.value("lluvioso"): console.log("cargando lista lluvia")
          break;

        }
            // btn.value === lluvioso => lleve a la playlist y muestre la imagen correspondiente
        }) 

/* funcion para elegir la imagen 
let imagenReproducor = document.getElementById("imagen") =()=>{

} */