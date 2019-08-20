const axios = require('axios');
const colors = require('colors');

const apiKey = 'f5487ce22f9d74e689e79051becd494d';
const units = 'metric';

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=${units}`)
    // console.log(`Código de request: ${resp.status}, Temperatura actual: ${resp.data.main.temp}`.bold.yellow);
    return `${resp.data.main.temp} °C`;
}

// getClima(40.75, -74);


module.exports = {
    getClima
}