const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  try {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
      if (err || response.statusCode !== 200) {
        throw err || 'ERROR';
      } else {
        const data = JSON.parse(body);
        if (data.length < 1) {
          throw 'Breed not found.';
        } else {
          callback(null, data[0].description);
        }
      }
    });
  } catch (error) {
    callback(error, null);
  }
};

module.exports = {
  fetchBreedDescription
};
