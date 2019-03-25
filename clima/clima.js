const axios = require('axios');

const getClima = async(lat, lon) => {

    //para usar un await debe estar dentro de función async, getClima es async
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=c7918e7664d33cef9af8e839d6092565`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}