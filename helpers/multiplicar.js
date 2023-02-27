
const fs = require('fs');
const crearArchivo = async ( numtabla = 5 , lt, hasta ) => {
    let salida = '';
    if (lt){
        console.log('===========================');
        console.log( `   tabla del ${ numtabla } `);
        console.log('===========================');
        console.log('\n');}

    for (let i = 1 ; i <= hasta ; i++) {
           salida += ` ${ numtabla } x ${ i } =  ${ numtabla * i }\n`;
    };
    
    if (lt) { console.log(salida)}
    else { console.log(' no se imprime tabla')};
    

    try {
        fs.writeFileSync( `./salida/tabla-${ numtabla }.txt`, salida );
        return ` tabla-${ numtabla }.txt Creada`
    }
    catch ( err ) {
            throw err;
    }
};
module.exports = { crearArchivo };
