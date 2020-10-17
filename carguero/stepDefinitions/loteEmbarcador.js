/**
 * File: login.js
 * Autor: Lucas Barros
 * Data: 07/10/2020
 */
const { Given, When, Then } = require('cucumber');
const fs = require('fs');
let path = require('path');

const HomePage = require('../pages/homePage');
const TelaInicial = require('../pages/telaIncial');
const LoteEmbarcadorPage = require('../pages/loteEmbarcadorPage');
const GravarGenerico = require('../../util/gravarGenerico');

const homePage = new HomePage();
const telaIncial = new TelaInicial();
const loteEmbarcadorPage = new LoteEmbarcadorPage();
const gravarGenerico = new GravarGenerico();

Given(/^eu logo no sistema$/, () => {
    homePage.open();
    homePage.autenticar();
    let result = telaIncial.validarAutenticado();
    console.log(result);
});

When(/^eu vou a tela de lote embarcador$/, () => {
    loteEmbarcadorPage.clicarLoteEmbarcador();
});

When(/^eu digito a ov para pesquisa e valido se a mesma existe "([^"]*)"$/, (ov) => {
    let result = loteEmbarcadorPage.validarOv(ov);
    console.log(ov);
});
Then(/^eu preencho os campos da ov para liberar "([^"]*)" "([^"]*)" "([^"]*)"$/, (transp,valor,cadencia) => {
    let statusOv = loteEmbarcadorPage.validarStatusOv();
    let semCadencia = loteEmbarcadorPage.validarCadenciaOv();
    let amigavelLE = loteEmbarcadorPage.validarAmigaelOv();
    if (statusOv == 'Incompleto')
    {
        console.log(statusOv);
        gravarGenerico.gravaAmigavelEmbarcador(amigavelLE);
        loteEmbarcadorPage.selecionarOv();
        loteEmbarcadorPage.selecionarConjTransp();
        loteEmbarcadorPage.selecionarCarroTransp();
        loteEmbarcadorPage.inserirTransp(transp,valor);
        loteEmbarcadorPage.salvarOv();
    }
    if (statusOv == 'Aguardando liberação')
    {
        console.log(statusOv);
        loteEmbarcadorPage.selecionarOv();
        loteEmbarcadorPage.editarLoteEmbarcador();
        loteEmbarcadorPage.liberarTransportadora();
        loteEmbarcadorPage.inserirCadencia(cadencia);
        loteEmbarcadorPage.salvarOv();
    }
    if (statusOv == 'Liberado', semCadencia == 'SEM CADÊNCIA')
    {
        console.log(statusOv);
        console.log(semCadencia);
        loteEmbarcadorPage.selecionarOv();
        loteEmbarcadorPage.editarLoteEmbarcador();
        loteEmbarcadorPage.inserirCadencia(cadencia);
        loteEmbarcadorPage.salvarOv();
    }

});