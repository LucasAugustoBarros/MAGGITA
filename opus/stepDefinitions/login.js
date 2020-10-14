
/**
 * File: login.js
 * Autor: Gabriel Costa
 * Data: 14/10/2020
 */
const { Given, When, Then } = require('cucumber');


const HomePage = require('../pages/homePage');

const homePage = new HomePage();

Given(/^eu estou na tela de home page do Opus$/, () => {
    homePage.open();
});

When(/^eu faço login no domínio "([^"]*)"$/, (dominio) => {
    homePage.autenticar(dominio);
});