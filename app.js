const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv.slice(2).join()

geocode(city, (data) => {
	const latitude = data[0]
	const longitude = data[1]
	forecast(latitude, longitude)
})