const { crearArchivo} = require('./helpers/multiplicar');
//yargs en config/yargs
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => {
        console.log(nombreArchivo.brightRed.bgWhite, 'creado'.black.bgGreen)
    })
    .catch( err => console.log(err)); 