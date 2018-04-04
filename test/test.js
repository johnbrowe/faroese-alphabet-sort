/* global it, describe */
const assert = require('assert');
const farSort = require('../index');

const letters = [
  'Arnaldur',
  'Ruben',
  'Bartal',
  'Díðrikur',
  'Jatmundur',
  'Arndór',
  'Kristmundur',
  'Lukas',
  'Tjóðolvur',
  'Ásgeir',
  'Jøkil',
];

describe('farSort', () => {
  it('Should return sorted list by faroese alphabet', () => {
    const sortedList = farSort(letters);
    assert.equal('Arnaldur', sortedList[0]);
    assert.equal('Ásgeir', sortedList[2]);
    assert.equal('Tjóðolvur', sortedList[10]);
  });
});
