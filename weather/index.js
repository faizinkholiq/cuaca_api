const fs = require("fs");

module.exports.index = async (req, res, next) => {
    const rawcity = req.query.kota || req.query.provinsi;

    fs.readFile('cache/weather.json', (err, data) => {
        let weather = JSON.parse(data.toString());
        let weatherData = [];

        if(rawcity){
            let param = Object.keys(req.query)[0];
            let city = rawcity.toLowerCase()
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ');
            weatherData = weather.filter((element) => element[param].includes(city));
        }else{
            weatherData = weather;
        }

        if(weatherData.length > 0){
            res.send(weatherData);
        }else{
            res.send('kota tidak di temukan');
        }
    });
};