const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`.italic.bold.yellow
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);




/* 
    Para ejecutar lugar.js
    
lugar.getLugarLatLng(argv.dir)
.then(console.log);
 */