// Array de objetos con los datos
const datos = [
        {
                nombreKit: 'PACK DE ESTIMULACIÓN DE LENGUAJE',
                enlace: 'https://estimulacion-de-lenguaje.web.app/',
                img: 'img/kit1.png'
        },
        {
                nombreKit: 'KIT DE 1000 ACTIVIDADES PARA LOS PEQUES',
                enlace: 'https://mil-actividades.web.app/',
                img: 'img/kit2.png'
        },
        {
                nombreKit: 'KIT DE ALFABETIZACIÓN INFANTIL',
                enlace: 'https://kit-de-alfabetizacion.web.app/',
                img: 'img/kit3.png'
        },
        {
                nombreKit: 'KIT DE ESTIMULACIÓN TEMPRANA',
                enlace: 'https://hotm.art/oferta-estimulacion-temprana',
                img: 'img/kit5.png'
        },
        {
                nombreKit: 'PACK DE ACTIVIDADES PARA NIÑOS CON AUTISMO',
                enlace: 'https://go.hotmart.com/X92471869M',
                img: 'img/kit6.jpg'
        },
        // cursos---------------------------
        {
                nombreKit: 'CURSO ONLINE: Estimulación temprana en casa, Aprende a estimular a tu bebé',
                enlace: 'https://go.hotmart.com/E93029423R?ap=0203',
                img: 'img/curso1.png'
        },
        {
                nombreKit: 'CURSO ONLINE: ABORDAJE DE NIÑOS CON AUTISMO',
                enlace: 'https://go.hotmart.com/W93328607J?ap=5e37',
                img: 'img/curso2.png'
        },
        // ----------------------------------
        {
                nombreKit: 'CUADERNILLOS GRATIS',
                enlace: 'https://whatsapp.com/channel/0029VaGqxiJ42DcnbrcARF0B',
                img: 'img/kit4.png'
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


