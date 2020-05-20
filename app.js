const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }

}).argv;


const getInfo = async(dire) => {

    try {
        const sitio = await lugar.getLugarLatLng(dire);
        const weather = await clima.getClima(sitio.lat, sitio.lng);
        return `El clima de ${sitio.direccion} es de ${weather}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${dire}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);