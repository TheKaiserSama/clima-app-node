const axios = require('axios');

let getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2ad71ad28378f61b45aa5cd5c9e8c5c3&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};