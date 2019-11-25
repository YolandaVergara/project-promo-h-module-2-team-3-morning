"use strict";
const eventoNavidad = document.querySelector('.js-un-sitio-wapo');

const infoRestaurante = function () {
    const personaInfo = 'Miguel';
    console.log('Pizzería Mayor abre la semana del 9 de Diciembre a mediodía;')

}
const recopilarPersonas = function () {
    const personaAcumula = 'Sara';
    const totalPersonas = ['Ale', 'Ana', 'Azahara', 'Bea', 'Cris', 'Elena', 'Elva', 'Isa', 'Mama Pollito', 'Marina', 'Miguel', 'MJ', 'Noe', 'Sandra Martín', 'Sandra Romero', 'Sari', 'Sara', 'Yol'];

}
const reservarRestaurante = function () {
    const personaReserva = 'YolYol';
    personaReserva.parseRaReserva = '14.30';
}

function comidaDeNavidad() {
    infoRestaurante(miraVéAlgoConLas3B);
    recopilarPersonas(infoRestaurante);
    reservarRestaurante(recopilarPersonas);

    console.log('¡¡¡¡¡Habemus reserva para la comida de Navidad!!!!!')
}
 eventoNavidad.addEventListener('click', comidaDeNavidad);