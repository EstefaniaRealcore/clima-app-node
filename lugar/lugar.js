//Para peticiones http podemos usar paquete 'request' o paquete 'axios'.
//usaremos axios ya que usa promesas. Request usa callbacks.
const axios = require('axios');

const getLugarLatLng = async(direc) => {
    const encodeUrl = encodeURI(direc);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '949be86cfdmsh49e3ec2c2aa1f8fp131fe1jsn323ffffc953d' }
    });

    //axios maneja promesas, para recibir dentro el await la función getLugarLatLng le debemos indicar que es async
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        //direccion: direccion
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}