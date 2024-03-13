// Array de objetos con los datos
const datos = [
        {
                nombreKit: 'PACK DE ESTIMULACIÓN DE LENGUAJE',
                enlace: 'https://estimulacion-de-lenguaje.web.app/',
                img: 'img/kit1.png'
        },
        {
                nombreKit: 'KIT DE 1000 ACTIVIDADES',
                enlace: 'https://mil-actividades.web.app/',
                img: 'img/kit2.png'
        },

];

// Obtener el contenedor donde se agregarán las tarjetas
const contenedor = document.getElementById('contenedor');

// Función para crear una tarjeta con los datos proporcionados
function crearTarjeta(nombreKit, enlace, imgSrc) {
        // Crear elementos HTML para la tarjeta
        const divCard = document.createElement('div');
        divCard.classList.add('card', 'card-kits', 'col-md-4');

        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('card-img-top');
        img.alt = '...';

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        const titulo = document.createElement('h5');
        titulo.classList.add('card-title', 'text_card');
        titulo.textContent = nombreKit;

        const enlaceVerContenido = document.createElement('a');
        enlaceVerContenido.href = enlace;
        enlaceVerContenido.classList.add('btn');
        enlaceVerContenido.textContent = 'Ver Contenido ';
        // agREGAR ICONO
        const icono = document.createElement('i');
        icono.classList.add('fas', 'fa-eye');
        enlaceVerContenido.appendChild(icono);


        // Agregar elementos a la tarjeta
        divCardBody.appendChild(titulo);
        divCardBody.appendChild(enlaceVerContenido);

        divCard.appendChild(img);
        divCard.appendChild(divCardBody);

        // Agregar la tarjeta al contenedor
        contenedor.appendChild(divCard);
}

// Recorrer el array de datos y crear una tarjeta para cada objeto
datos.forEach(dato => {
        crearTarjeta(dato.nombreKit, dato.enlace, dato.img);
});


