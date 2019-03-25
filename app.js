const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {
        //getLugarLatLng devuelve una promesa
        const coords = await lugar.getLugarLatLng(direccion);

        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);