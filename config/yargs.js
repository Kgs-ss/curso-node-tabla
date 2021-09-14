//configurando yargs
//le establecemos unas opciones lo primero el nombre corto que sera el -b en este caso despues abrimos {}
//despues el alias sera la opcion --base
//tipo de dato
//demandOption: Obligatorio
//default valor que tomara si no se introduce
//.check haremos las comprobaciones con el objeto montado
//si todo sale bien retorna true
const colors = require('colors');
const argv = require('yargs')

.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'sera la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'muestra la tabla en consola'

})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false,
    default: '',
    describe: 'muestra varias tablas, la primera sera la base indicada hasta la ultima que sera la indicada en h'

})

.check( (argv, options) => {
    if ( isNaN( argv.b )){
        throw 'la base debe ser un numero'.red
    }
    return true;
})

.check( (argv, options) => {
    if ( isNaN( argv.h )){
        throw 'la h debe ser un numero'.red
    }
    return true;
})

.argv

module.exports = argv;