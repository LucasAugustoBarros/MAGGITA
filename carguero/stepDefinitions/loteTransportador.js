/**
 * File: loteTransportador.js
 * Autor: Lucas Barros
 * Data: 17/10/2020
 */
const { Given, When, Then } = require('cucumber');
const fs = require('fs');
let path = require('path');

const HomePage = require('../pages/homePage');
const TelaInicial = require('../pages/telaIncial');
const LoteTransportadorPage = require('../pages/loteTransportadorPage');
const LoteEmbarcadorPage = require('../pages/loteEmbarcadorPage');
const GravarGenerico = require('../../util/gravarGenerico');
const {amigoLEG} = require('../../tmp/amgLE.json')


const homePage = new HomePage();
const telaIncial = new TelaInicial();
const loteEmbarcador = new LoteEmbarcadorPage();
const gravarGenerico = new GravarGenerico();
const loteTransportador  = new LoteTransportadorPage();

When(/^eu valido a ov "([^"]*)" "([^"]*)"$/, (ov,cadencia) => {
    loteEmbarcador.clicarLoteEmbarcador();
    loteEmbarcador.validarOv(ov);
    let statusOv = loteEmbarcador.validarStatusOv();
    let semCadencia = loteEmbarcador.validarCadenciaOv();
    let amigavelLE = loteEmbarcador.validarAmigaelOv();
    if (statusOv == 'Incompleto')
    {
        console.log('Ordem de venda, ainda não preenchida');
    }
    if (statusOv == 'Aguardando liberação')
    {
        console.log('Ordem de venda, ainda não liberada');
    }
    if (statusOv == 'Liberado', semCadencia == 'SEM CADÊNCIA')
    {
        console.log(statusOv);
        console.log(semCadencia);
        loteEmbarcador.selecionarOv();
        loteEmbarcador.editarLoteEmbarcador();
        loteEmbarcador.inserirCadencia(cadencia);
        loteEmbarcador.salvarOv();
    }
    if (statusOv == 'Liberado', semCadencia != 'SEM CADÊNCIA')
    {
        console.log(statusOv);
        console.log(semCadencia);
        gravarGenerico.gravaAmigavelEmbarcador(amigavelLE);
        loteTransportador.clicarLoteTransportador();
    }
});
When(/^eu vou a tela de lote transportador$/, () => {
    var amigoLEGG = amigoLEG.replace(/#/i,'');
    console.log(amigoLEGG);
    loteTransportador.buscarLote(amigoLEGG);
    let amigavelLT = loteTransportador.buscarLote();
    gravarGenerico.gravaAmigavelTransportador(amigavelLT);
});

Then(/^eu preencho os campos do lote para liberar "([^"]*)"$/, (valor) => {
    let statusLote = loteTransportador.statusLT();
    if (statusLote == 'Pendente') {
        loteTransportador.selecionarLote();
        loteTransportador.preencherLote(valor);
        loteTransportador.salvarLoteTransportador();
    }

});