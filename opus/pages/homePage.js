/**
 * File: homePage.js
 * Autor: Gabriel Costa
 * Data: 14/10/2020
 */


class HomePage {
    // Define os elementos da tela
    get dropDominio() { return $('select#IdDominio') }
    get inputUser() { return $('input#Login')}
    get inputPassword() { return $('input#Password')}
    get btnAcessar() { return $('[id="BtnAcessar"]')}
    get error() {return $('hgroup > h2')}

    //Metodos dos elementos de ação
    autenticar(dominio){
        let erro = this.error.getText();
        console.log(erro);
        this.dropDominio.waitForDisplayed();
        this.btnAcessar.waitForDisplayed();
        console.log(dominio);
        if (dominio == 'AROEIRA')
        {
            this.dropDominio.setValue('7');
            this.inputUser.setValue('gabriel.costa');
            this.inputPassword.setValue('gabriel.costa');
            browser.keys('Enter')
        }

    }

    open(){
        browser.url('/recebimento-c/')
    }
}
module.exports = HomePage;