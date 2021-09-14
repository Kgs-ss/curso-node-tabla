//como antes importamos el filesystem
const fs = require('fs');
var colors = require('colors');
//preparamos la funcion que se ejecutara y la transformamos en una promesa con el async
//le metemos el try return para el then y el catch throw para el catch que lo recibira
const crearArchivo = async( base = 5, listar, hasta) => {
    
    baseConsola = '';
    try{
        do{
            baseConsola = base;
            let salida = `===========\nTABLA DEL ${base}\n===========\n`;

            for (let i = 1; i <= 10; i++){
                salida += `${(i)} * ${base} = ${(i) * base}\n`;
            }
    //usamos el fs para generar el archivo 
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            if (listar){
            console.log(salida.rainbow);
            }
            base++;
        }while(base <= hasta);

        return `tabla${baseConsola}`;

    } catch (error){
        throw error;
    }

}

//y de esta forma podemos exportarlo como un objeto
//crearArchivo: crearArchivo
module.exports = {
    crearArchivo
}
