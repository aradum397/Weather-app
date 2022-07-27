const request = require('postman-request')

const forecast = (latitude, longitude) => {
	const url = `http://api.weatherstack.com/current?access_key=d0f52eb74a3b530fca293a67fb14b952&query=${longitude},${latitude}`
	request({ url, json: true }, (err, { body }) => {
		if (err) {
			return console.log('Unable to retreive weather data!')
		}
		if (body.error) {
			return console.log(body.error.info)
		}
		else {
			const location = body.location.name
			const description = body.current.weather_descriptions[0]
			const temperature = body.current.temperature
			const feelsLike = body.current.feelslike
			console.log(`In ${location} it is currently ${description}. It is ${temperature} degrees out and it feels like ${feelsLike} degrees!`)
		}
	})
}

module.exports = forecast