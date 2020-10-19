/**
 * File: criarViagem.js
 * Autor: Lucas Barros
 * Data: 17/10/2020
 */
const { Given, When, Then } = require('cucumber');
const fs = require('fs');
let path = require('path');

const CriarViagemPage = require('../pages/CriarViagemPage');
const GravarGenerico = require('../../util/gravarGenerico');
const ReplaceGeral = require ('../../util/replace')

const gravarGenerico = new GravarGenerico();
const criarViagem  = new CriarViagemPage();
const replacegeral = new ReplaceGeral();

When(/^eu seleciono o lote para criar a viagem$/, () => {
    criarViagem.clicarViagem();
    const {amgLtG} = require('../../tmp/amglt.json');
    var amgLtGG = replacegeral.replaceAmigavel(amgLtG);
    console.log(amgLtGG);
    criarViagem.buscarLoteViagem(amgLtGG);
    criarViagem.selecionarLote();
});

Then(/^eu crio a viagem com motorista e peso "([^"]*)" "([^"]*)"$/, (cpf,estimado) => {
    criarViagem.criandoViagem(cpf,estimado)
    criarViagem.salvarViagem();
    let codigoViagem = criarViagem.numeroViagem();
    gravarGenerico.gravaViagem(codigoViagem);
});