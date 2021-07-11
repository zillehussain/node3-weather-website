const request = require('request')

const forecast = ( latitude, longitude, callback) => {

     const url = 'http://api.weatherstack.com/current?access_key=9bf28cc73cf514b0d6f47cbbbbda33cc&query=' + latitude + ',' + longitude + ''
    //const url = 'http://api.weatherstack.com/current?access_key=9bf28cc73cf514b0d6f47cbbbbda33cc&query=Patna';

    request({ url, json: true}, (error, { body }) => {
        if (error) { 
            console.log(error)
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {

            callback('unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, body.weather_descriptions + ' it is currently ' + body.current.temperature + ' degrees out. there is a ' + body.current.precip + '%chance of rain.')
        }
    })
}

module.exports = forecast