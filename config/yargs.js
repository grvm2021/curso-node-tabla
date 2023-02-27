//

const argv = require('yargs') 
              .option('b', {
                     alias: 'base',
                     describe: 'Es la base de la tabla de multiplicar',
                     type: 'number'
              })
              .option('l', {
                     alias: 'listar',
                     describe: 'Muestra la tabla en consola',
                     type: 'boolean'
              })
              .option('h', {
                     alias: 'hasta',
                     describe: 'Indica hasta que numero se multiplica',
                     type: 'number'
              })
              .check( (argv, options) => {
                     if( isNaN( argv.b )) {
                            throw 'Labase tiene que ser un número'
                     }
                     //console.log('Yargs gab', argv)
                     return true;
              })
              .argv;
module.exports = argv;
