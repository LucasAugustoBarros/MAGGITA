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
    get lblRiLoteEmbarcadorClick() {return $('div#car-row-0 h2')}
    get lblStatusLoteEmbarcador() {return $('div#car-row-0 div:nth-child(1) > div > span')}
    get inputTransLoteEmbarcador() {return $('form > div:nth-child(2) > div > div > input')}
    get inputValorFrete() {return $('input#valorFreteTrechoFiscal')}
    get aplicarBtn() {return $('div.form-buttons-align-right-content > button[type="submit"].ui.green.icon.right.labeled.button')}
    get msgSalvo() {return $('div > div.ant-notification-notice-message')}
    
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
        setTimeout(() => {  console.log("Validar Ov!"); }, 2000);
        this.lblRiLoteEmbarcador.waitForDisplayed();
        return this.lblRiLoteEmbarcador.getText();
    }
    validarStatusOv(){
        this.lblStatusLoteEmbarcador.waitForDisplayed();
        return this.lblStatusLoteEmbarcador.getText();
    }
    selecionarOv(){
        const loteClick = $('div#car-row-0 h2');
        loteClick.click();
    }
    selecionarConjTransp(){
            const conjuntoTransportadorLotelick = $('div#app-root div:nth-child(1) > div:nth-child(1) > div.buttonMarcaTodos___-oD4g > a');
            conjuntoTransportadorLotelick.click();
            const tipoCarroceriaLotelick = $('div#app-root div:nth-child(2) > div:nth-child(1) > div.buttonMarcaTodos___-oD4g > a');
            tipoCarroceriaLotelick.click();
    }
    inserirTransp(transp,valor){
        const transportadoraBtnNova = $('div#app-root div:nth-child(1) > div:nth-child(1) > button[type="button"]');
        transportadoraBtnNova.click();
        this.inputTransLoteEmbarcador.waitForDisplayed();
        this.inputTransLoteEmbarcador.setValue(transp);
        browser.keys('Enter');
        const modalidadePagRadio = $('div:nth-child(5) > div > div > div:nth-child(1) > label');
        modalidadePagRadio.click();
        this.inputValorFrete.waitForDisplayed();
        const freteClick = $('input#valorFreteTrechoFiscal');
        freteClick.click();
        this.inputValorFrete.setValue(valor);
        browser.keys('Tab');
        setTimeout(() => { }, 1000);
        browser.keys('Tab');
        setTimeout(() => { }, 1000);
        browser.keys('Tab');
        browser.keys('Enter');
        let result2 = this.inputTransLoteEmbarcador.getValue();
        console.log(result2);
        let result3 = this.inputValorFrete.getValue();
        console.log(result3);
    }
    salvarOv(){
        const salvarBtn = $('div#app-root button[type="submit"].ui.orange.small.compact.icon.right.labeled.button');
        salvarBtn.click();
        this.msgSalvo.waitForDisplayed();
        expect(msgSalvo.getText()).to.eql ('SALVO COM SUCESSO!');
    }

}
module.exports = LoteEmbarcadorPage;