/**
 * Arquivo: gravarGenerico.ts
 * Data: 17/10/2020
 * Author: Lucas Barros
 */

let amigavelEditado, oceditado;

 class ReplaceGeral {
     replaceAmigavel(amigavel){
        amigavelEditado = amigavel.replace(/#/i,'');
        return amigavelEditado;
     }
     replaceOc(ocnumero){
        oceditado = ocnumero.replace(/2020-/i,'');
        return oceditado;
     }

 }
 module.exports = ReplaceGeral;