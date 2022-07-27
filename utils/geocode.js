const request = require('postman-request')

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic295YmVpbmciLCJhIjoiY2w1dDZsNzc4MDJtdTNkbGFoN3BjeWdpdyJ9.XmD6o607KhcV34SKFHkrAQ&limit=1`
	request({ url, json: true }, (err, { body }) => {
		if (err) {
			return console.log('Unable to retreive geodata!')
		}
		if (body.features.length === 0) {
			return console.log('Please provide a valid location!')
		}
		else {
			callback(body.features[0].center)
		}
	})
}

module.exports = geocode