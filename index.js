const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error !== null) console.log(String(error));
  else console.log(desc);
});