import { error } from 'console';
import fs from 'fs';
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    try{
        return fs.readFileSync(ruta, 'utf-8');
    }
    catch(error){
        console.log('La ruta ingresada es inválida');
    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
   
    if(!fs.existsSync(ruta) && !shouldCreateIfNotExists){
        throw new Error('El archivo no existe');
    }
    fs.writeFileSync(ruta,texto)
    
}

// exportar ambas funciones
export default {
    leerArchivoComoString,
    escribirTextoEnArchivo
}