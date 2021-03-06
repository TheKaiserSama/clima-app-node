const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;

const getInfo = async(direccion) => {

    try {
        const cords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);
        return `El clima de ${ direccion } es de ${ temp }.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

//lugar.getLugarLatLng(argv.direccion)
//    .then(resp => console.log(resp));

//clima.getClima(35.669998, 139.770004)
//    .then(console.log)
//    .catch(console.log);