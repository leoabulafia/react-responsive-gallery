const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const axios = require('axios');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

/*
	Make a request to the flickr api to fetch the first 20 images,
	and send an array with objects that contain image data.
	When user press load more images, make another request to fetch 10 images a time
*/
app.post('/api/images', (req, res) => {
	console.log(req.body);
	const { perPage, page } = req.body;
	axios
		.get(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
				keys.apiFlickrKey
			}&tags=aegiali&per_page=${perPage}&page=${page}&extras=owner_name&format=json&nojsoncallback=1`
		)
		.then(response => {
			let imgAttributesArray = response.data.photos.photo.map(img => {
				let imgAttributes = {
					farm: img.farm,
					server: img.server,
					id: img.id,
					secret: img.secret,
					ownername: img.ownername
				};
				return imgAttributes;
			});
			res.send(imgAttributesArray);
		});
});

// fetches selected image from gallery by url
app.post('/api/currentimage', (req, res) => {
	console.log(req.body);
	const { id, secret } = req.body;
	axios
		.get(
			`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${
				keys.apiFlickrKey
			}&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1`
		)
		.then(response => res.send(response.data.photo));
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
