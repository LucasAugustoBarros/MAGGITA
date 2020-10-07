/**
 * File: homePage.js
 * Autor: Lucas Barros
 * Data: 06/10/2020
 */


class HomePage {
    // Define os elementos da tela
    get btnAmaggi() { return $('a.btn.btn-external.btn-amaggi') }
    get txtUser () { return $('input#Username')}
    get txtPassword () { return $('input#Password')}

    //Metodos dos elementos de ação
    autenticar(){
        this.btnAmaggi.waitForDisplayed();
        // const btnLogin = $('a.btn.btn-external.btn-amaggi')
        // btnLogin.click();
        this.txtUser.setValue('lucas.barros@amaggi.com.br');
        this.txtPassword.setValue('123456');
        browser.keys('Enter')
    }

    open(){
        browser.url('/')
    }
}
module.exports = HomePage;