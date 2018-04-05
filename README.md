# Faroese

A package that sorts an array by the faroese alphabet.

## Usage

First, install the package using npm:

    npm i faroese --save

Then, require the package and use it like so:

    const faroese = require('faroese');

    const names = [
      'Bartal',
      'Díðrikur',
      'Ásgeir',
      'Arnaldur',
    ];
    
    console.log(faroese.sortArrayOfStrings(names)); 
    // ['Arnaldur', 'Ásgeir', 'Bartal' 'Díðrikur',]
    
    const names = [
      { name: 'Bartal' },
      { name: 'Díðrikur }',
      { name: 'Ásgeir' },
      { name: 'Arnaldur }',
    ];

    console.log(faroese.sortArrayOfObjects(names, "name")); 
    // [{ name: 'Arnaldur' }, { name: 'Ásgeir' }, { name: 'Bartal' }, { name: 'Díðrikur' },]
    
## License

Apache 2.0