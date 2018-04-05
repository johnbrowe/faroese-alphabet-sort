/* global it, describe */
const assert = require('assert');
const faroese = require('../index');

const names = [
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

describe('Faroese sort array of strings', () => {
  it('Should return sorted list by faroese alphabet', () => {
    const sortedList = faroese.sortArrayOfStrings(names);
    assert.equal('Arnaldur', sortedList[0]);
    assert.equal('Ásgeir', sortedList[2]);
    assert.equal('Tjóðolvur', sortedList[10]);
  });
});
