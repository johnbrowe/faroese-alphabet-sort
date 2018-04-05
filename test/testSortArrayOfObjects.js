/* global it, describe */
const assert = require('assert');
const faroese = require('../index');

const letters = [
  { name: 'Arnaldur' },
  { name: 'Ruben' },
  { name: 'Bartal' },
  { name: 'Díðrikur' },
  { name: 'Jatmundur' },
  { name: 'Arndór' },
  { name: 'Kristmundur' },
  { name: 'Lukas' },
  { name: 'Tjóðolvur' },
  { name: 'Ásgeir' },
  { name: 'Jøkil' },
];

describe('Faroese sort array of objects', () => {
  it('Should return sorted list by faroese alphabet', () => {
    const sortedList = faroese.sortArrayOfObjects(letters);
    assert.equal('Arnaldur', sortedList[0].name);
    assert.equal('Ásgeir', sortedList[2].name);
    assert.equal('Tjóðolvur', sortedList[10].name);
  });
});
