const fs = require('fs');
//manera de requerir argv del documento de config -> yargs
const argv = require('./config/yargs');
const colors = require('colors');




//TAREA VIDEO 35 CREAR OPCION L DEBE LISTAR, DE TIPO BOOLENAO, OPCIONAL, DEFAUL EN FALSE
//SI ESTA PUESTO DEBE DE LISTAR LA TABLA DE MULTIPLICAR QUE SE PIDIO Y EN CASO QUE NO
//SOLO DEBE DECIR TABLA CREADA SIN NECESIDAD DE MOSTRARLA EN LA CONSOLA

const { crearArchivo } = require('./helpers/multiplicar')


console.clear();

// console.log(argv);


//DOCUMENTACION DEL VIDEO 33 
// const [, , arg3 = 'base = 9'] = process.argv
// //separando el arg3 para quedarme solo con la base puesto que arg3 es un stgring
// const [, base = 9 ] = arg3.split('=');


// const base = 33;


//COMANDO DE NODE PARA CREAR ARCHIVOS EN LA COMPUTADORA
// fs.writeFile(`tabla-del-${base}.txt`, resultado, (err) => {
//     if(err) throw err;

//     console.log('Archivo de tabla creado con exito');
// })


//COMANDO PARA LA CREACION DEL ARCHIVO
crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.green, 'Creado'.blue))
.catch(err => console.log(err));
