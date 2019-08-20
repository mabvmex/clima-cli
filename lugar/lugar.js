const axios = require('axios');

const getLugarLatLng = async (dir) => {    
    
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': 'a7648becd3mshab9b830d4c53c4dp16ce12jsnc87609641aa4'
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0){ // Si el arreglo es = 0, no hay direcciones.
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    
    // return console.log (`${direccion} ${lat} ${lng}`.bold.yellow);
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
