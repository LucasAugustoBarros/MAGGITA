/**
 * File: login.js
 * Autor: Lucas Barros
 * Data: 07/10/2020
 */
const { Given, When, Then } = require('cucumber');


const HomePage = require('../pages/homePage');
const TelaInicial = require('../pages/telaIncial');
const LoteEmbarcadorPage = require('../pages/loteEmbarcadorPage');

const homePage = new HomePage();
const telaIncial = new TelaInicial();
const loteEmbarcadorPage = new LoteEmbarcadorPage();
Given(/^eu logo no sistema$/, () => {
    homePage.open();
    homePage.autenticar();
    let result = telaIncial.validarAutenticado();
    console.log(result);
});

When(/^eu vou a tela de lote embarcador$/, () => {
    loteEmbarcadorPage.clicarLoteEmbarcador();
});

Then(/^eu digito a ov para pesquisa e valido se a mesma existe "([^"]*)"$/, (ov) => {
    let result = loteEmbarcadorPage.validarOv();
    console.log(result);
});