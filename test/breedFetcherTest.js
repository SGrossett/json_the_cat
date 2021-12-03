const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns "notSiberian not found.", when an invaid breed name is put in', (done) => {
    fetchBreedDescription('notSiberian', (err, desc) => {
      assert.equal(err, 'notSiberian not found.');
      assert.equal(undefined, desc);
      done();
    });
  });
});