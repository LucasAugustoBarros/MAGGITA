/**
 * File: homePage.js
 * Autor: Lucas Barros
 * Data: 06/10/2020
 */


class HomePage {
    // Define os elementos da tela
    get btnAmaggi() { return $('a.btn.btn-external.btn-amaggi') }

    //Metodos dos elementos de ação
    autenticar(){
        this.btnAmaggi.waitForDisplayed();
        browser.btnAmaggi.click;
    }

    open(){
        browser.url('/')
    }
}
module.exports = HomePage;