/**
 * File: loteTransportadorPage.js
 * Autor: Lucas Barros
 * Data: 07/10/2020
 */


class LoteTransportadorPage {
    // Define os elementos da tela
    get icoLoteTransportador() { return $('[id="side-bar-item-fa fa-cubes"]') }
    get inputLote() {return $('div#app-root div.float-left > div > div > input[type="text"]')}
    get lblNumberLoteTransportador() {return $('div#car-row-0 h1 > span')}
    get lblNumberLoteTransportadorClick() {return $('div#car-row-0 div.statusContainer___KeQKX')}
    get lblStatusLoteTransportador() {return $('div#car-row-0 div.statusContainer___KeQKX > span')}
    get inputValorFreteMotorista() {return $('input#valorFreteMotorista')}
    get unidadeClick() {return $('div#app-root div > ul > li:nth-child(1) > div > span > div > div > label')}
    get btnSalvarTransportador() {return $('div#app-root button[type="submit"].ui.orange.small.compact.icon.right.labeled.button')}
    get btnSalvarLiberarTransportador() {return $('div.form-buttons-align-left-content > button[type="button"].ui.orange.icon.left.labeled.button')}
    
    //Metodos dos elementos de ação
    clicarLoteTransportador(){
        this.icoLoteTransportador.waitForDisplayed();
        const iconeTransportador = $('[id="side-bar-item-fa fa-cubes"]');
        iconeTransportador.click();
    }
    buscarLote(amigoLEG){
        this.inputLote.waitForDisplayed();
        this.inputLote.setValue(amigoLEG);
        browser.keys('Enter');
        browser.pause(2000);
        this.lblNumberLoteTransportador.waitForDisplayed();
        return this.lblNumberLoteTransportador.getText();
    }
    statusLT(){
        this.lblStatusLoteTransportador.waitForDisplayed();
        return this.lblStatusLoteTransportador.getText();
    } 
    selecionarLote(){
        const loteTransp = $('div#car-row-0 div.statusContainer___KeQKX');
        loteTransp.click();
        browser.pause(3000);
    }
    preencherLote(valor){
        this.inputValorFreteMotorista.waitForDisplayed();
        this.inputValorFreteMotorista.setValue(valor);
        browser.pause(1000);
        browser.keys('Enter');
        browser.keys('Tab');
        browser.pause(1000);
        browser.keys('Tab');
        browser.pause(1000);
        browser.keys('Space');
        browser.pause(2000);
    }
    salvarLoteTransportador(){
        this.btnSalvarTransportador.waitForDisplayed();
        const salvarLote = $('div#app-root button[type="submit"].ui.orange.small.compact.icon.right.labeled.button');
        salvarLote.click();
        browser.pause(3000);
        const salvarLiberarLote = $('div.form-buttons-align-left-content > button[type="button"].ui.orange.icon.left.labeled.button');
        salvarLiberarLote.click();
        browser.pause(3000);
    }
}
module.exports = LoteTransportadorPage;