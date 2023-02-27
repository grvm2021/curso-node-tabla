

const { crearArchivo } = require('./helpers/multiplicar.js');

const argv = require('./config/yargs.js');
let numtabla = argv.b;
let lista_tabla = argv.l
let mhasta = argv.h
console.clear();
console.log( argv );
console.log('base: yargs ultima ', argv.base, mhasta );
crearArchivo( numtabla, lista_tabla, mhasta )
       .then( nombreArchivo => console.log( nombreArchivo, ' Fue Creado'))
       .catch( err => console.log( err ));
