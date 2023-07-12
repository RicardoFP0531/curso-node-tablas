const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 10) => {

//     console.log('=====================');
//     console.log('Tabla del:', base);
//     console.log('=====================');


   
//     let resultado = '';

//     for (let i = 1; i <= 10; i++) {
//         resultado += `${ base } X ${ i } = ${ base * i }\n`;
//     }

//     console.log(resultado);

//     fs.writeFileSync(`tabla-del-${base}.txt`, resultado);

//     console.log(`tabla-del-${base}.txt creada`);

// }

// module.exports = {
//     crearArchivo
// }


//TAREA CONVERTIR EL CODIGO DE ARRIBA USANDO !NEW PROMISE

// const crearArchivo = (base = 11) => {

//     return new Promise((resolve, reject) => {

//         console.log('=====================');
//         console.log('Tabla del:', base);
//         console.log('=====================');


    
//         let resultado = '';

//         for (let i = 1; i <= 10; i++) {
//             resultado += `${ base } X ${ i } = ${ base * i }\n`;
//         }

//         console.log(resultado);

//         fs.writeFileSync(`tabla-del-${base}.txt`, resultado);

//         resolve(`tabla-del-${base}.txt `);

//     });


// }

// module.exports = {
//     crearArchivo
// }

//CONVERTIR EL CODIGO DE ARRIBA CON ASYNC - AWAIT

const crearArchivo = async(base = 10, listar = false, hasta = 10) => {

    try {
          
        let resultado = '';

        for (let i = 1; i <= hasta; i++) {
            resultado += `${ base } X ${ i } = ${ base * i }\n`;
        }

           
        if(listar) {
            console.log('====================='.america);
            console.log('Tabla del:', base);
            console.log('====================='.america);  
            
            console.log(resultado.rainbow);
        }
        
//COMANDO DE NODE CON FILE SYNC
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, resultado);

        return `tabla-del-${base}.txt creada`;
        
    } catch (error) {
        
        throw error
    }


}

module.exports = {
    crearArchivo
}