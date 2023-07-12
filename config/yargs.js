const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {//SOUCION DE LA TAREA VIDEO 35
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla que se creo en la consola'
    })
    .option('h', {//TAREA VIDEO 38
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Delimita el numero de iteraciones que tendra la tabla de multiplicar'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw '---> the base must be a number <---'
        }

        // if(isNaN(argv.h) => {
        //     throw '---> hasta debe ser un numero <---'
        // })

        return true;
    })
    .argv; 
    
//manera de exportar todo el codigo de la constante argv del archivo yargs
module.exports = argv;

