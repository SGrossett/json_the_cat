const request = require('request');
let catType = process.argv.slice(2)[0];

const fetchBreed = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    if (error) {
      return callback(new Error('Something went wrong'));
    }
    
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(new Error(`${breedName} not found.`))
    }

    const info = data[0].description;

    callback(null, info);
  });
}

let callback = (error, result) => {
  if (error !== null) {
    console.log(String(error));
    return;
  }
  console.log(result);
}

console.log(fetchBreed(catType, callback));