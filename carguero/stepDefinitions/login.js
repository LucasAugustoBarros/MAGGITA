
/**
 * File: login.js
 * Autor: Lucas Barros
 * Data: 06/10/2020
 */
const { Given, When, Then } = require('cucumber');


const HomePage = require('../pages/homePage');
const TelaInicial = require('../pages/telaIncial');

const homePage = new HomePage();
const telaIncial = new TelaInicial();

Given(/^eu estou na tela de home page do Carguero$/, () => {
    homePage.open();
});

When(/^eu clico em Entrar com Conta Amaggi$/, () => {
    homePage.autenticar();
});

Then(/^eu visualizo a tela do sistema$/, () => {
    let result = telaIncial.validarAutenticado();
    console.log(result);
});