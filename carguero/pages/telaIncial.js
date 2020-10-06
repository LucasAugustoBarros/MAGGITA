/**
 * File: telaInicial.js
 * Autor: Lucas Barros
 * Data: 06/10/2020
 */


class TelaInicial {
    // Define os elementos da tela
    get lblUsuarioLogado() { return $('div#app-root div.userinfo') }

    //Metodos dos elementos de ação
    validarAutenticado(){
        this.lblUsuarioLogado.waitForDisplayed();
    }
}
module.exports = TelaInicial;