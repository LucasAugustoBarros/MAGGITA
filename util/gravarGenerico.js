/**
 * Arquivo: gravarGenerico.ts
 * Data: 17/10/2020
 * Author: Lucas Barros
 */

const fs = require('fs');
let path = require('path');

let data, toFile, stringFile;
let amigoLEGravado, amgLtGravado, ocGravado, viagemGravado;

class GravarGenerico {

    gravaAmigavelEmbarcador(amig) {

        var amigavel = amig;

        amigoLEGravado = {
            amigoLEG: amigavel
        };

        data = JSON.stringify(amigoLEGravado);
        toFile = path.join(__dirname, '../tmp/amgLE.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
        console.log(amig);
    }
    gravaAmigavelTransportador(amigt) {

        var amigavelt = amigt;

        amgLtGravado = {
            amgLtG: amigavelt
        };

        data = JSON.stringify(amgLtGravado);
        toFile = path.join(__dirname, '../tmp/amglt.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
        console.log(amigt);
    }
    gravaViagem(codigoViagem) {

        var viagemGravada = codigoViagem;

        viagemGravado = {
            viagemG: viagemGravada
        };

        data = JSON.stringify(viagemGravado);
        toFile = path.join(__dirname, '../tmp/codViagem.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
        console.log(codigoViagem);
    }
    gravaOc(oc) {

        var ocGravada = oc;

        ocGravado = {
            ocG: ocGravada
        };

        data = JSON.stringify(ocGravado);
        toFile = path.join(__dirname, '../tmp/ocNumero.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
        console.log(oc);
    }
}
module.exports = GravarGenerico;