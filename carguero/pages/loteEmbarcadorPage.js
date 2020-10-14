/**
 * File: loteEmbarcadorPage.js
 * Autor: Lucas Barros
 * Data: 07/10/2020
 */


class LoteEmbarcadorPage {
    // Define os elementos da tela
    get icoLoteEmbarcador() { return $('[id="side-bar-item-fa fa-cube"]') }
    get inputOv() {return $('div#app-root div.float-left > div > div > input[type="text"]')}
    get lblRiLoteEmbarcador() {return $('div#car-row-0 h2')}
    //Metodos dos elementos de ação
    clicarLoteEmbarcador(){
        this.icoLoteEmbarcador.waitForDisplayed();
        const icoClick = $('[id="side-bar-item-fa fa-cube"]');
        icoClick.click();
    }
    validarOv(ov){
        this.inputOv.waitForDisplayed();
        this.inputOv.setValue(ov);
        browser.keys('Enter');
        setTimeout(() => {  console.log("5seg!"); }, 5000);
        this.lblRiLoteEmbarcador.waitForDisplayed();
        return this.lblRiLoteEmbarcador.getText();
    }
}
module.exports = LoteEmbarcadorPage;