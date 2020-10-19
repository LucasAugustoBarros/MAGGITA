/**
 * File: criarViagemPage.js
 * Autor: Lucas Barros
 * Data: 17/10/2020
 */


class CriarViagemPage {
    // Define os elementos da tela
    get icoViagem() { return $('[id="side-bar-item-fa fa-exchange"]') }
    get btnNovo() {return $('div#app-root button[type="button"].ui.orange.small.compact.icon.left.labeled.button.pull-right > i')}
    get inputLoteTransportador() {return $('div#app-root div.float-left > div > div > input[type="text"]')}
    get lblNumberLoteTransportador1() {return $('[class="title___TFNji"]')}
    get selecionarLoteTransportador() {return $('div#car-row-0')}
    get btnContinuar() {return $('div#app-root button[type="button"].ui.orange.small.compact.icon.right.labeled.button.pull-right')}
    get btnMinhaTransportador() {return $('div#app-root div:nth-child(3) > button[type="button"]')}
    get inputCpfMotorista() {return $('input#cpf')}
    get inputPesoEstimado() {return $('input#pesoEstimado')}
    get btnAgendar() {return $('div#app-root button[type="button"].ui.green.icon.right.labeled.button')}
    get btnAgendarHoje() {return $('div > button[type="button"].ui.orange.button')}
    get lblViagem() {return $('div#app-root div.ui.clearing.segment.panel > div:nth-child(2) > div > div > div > div')} // Aguardando Liberação do Embarcador
    get lblCodigoViagem() {return $('div#app-root div:nth-child(3) > div > div:nth-child(1) > div.titulo___2Rwnk')} // Aguardando Liberação do Embarcador
    get btnContinuarMotora() {return $('div.ant-modal-footer > button[type="button"].ui.green.icon.right.labeled.button')}
    
    //Metodos dos elementos de ação
    clicarViagem(){
        this.icoViagem.waitForDisplayed();
        const iconeViagem = $('[id="side-bar-item-fa fa-exchange"]');
        iconeViagem.click();
        browser.pause(2000);
    }
    buscarLoteViagem(amgLtGG){
        this.btnNovo.waitForDisplayed();
        const btnNovaViagem = $('div#app-root button[type="button"].ui.orange.small.compact.icon.left.labeled.button.pull-right > i');
        btnNovaViagem.click();
        browser.pause(2000);
        this.inputLoteTransportador.setValue(amgLtGG);
        browser.keys('Enter');
        browser.pause(2000);
        this.lblNumberLoteTransportador1.waitForDisplayed();
    }
    selecionarLote(){
        const loteTransp = $('div#car-row-0 div.statusContainer___KeQKX');
        loteTransp.click();
        browser.pause(3000);
        this.btnContinuar.waitForDisplayed();
        browser.pause(2000);
        const btnContinuarViagem = $('div#app-root button[type="button"].ui.orange.small.compact.icon.right.labeled.button.pull-right');
        btnContinuarViagem.click();
    } 
    criandoViagem(cpf,estimado){
        this.btnMinhaTransportador.waitForDisplayed();
        const btnMinhaTransp = $('div#app-root div:nth-child(3) > button[type="button"]');
        btnMinhaTransp.click();
        this.inputCpfMotorista.setValue(cpf);
        browser.keys('Enter');
        browser.pause(3000);
        this.inputPesoEstimado.setValue(estimado);
        browser.keys('Enter');
        browser.pause(2000);
    }
    salvarViagem(){
        const btnSalvar = $('div#app-root button[type="button"].ui.green.icon.right.labeled.button');
        btnSalvar.click();
        browser.pause(2000);
        this.btnAgendarHoje.waitForDisplayed();
        const btnAgHojeViagem = $('div > button[type="button"].ui.orange.button');
        btnAgHojeViagem.click();
        browser.pause(2000);
        let result1 = this.btnContinuarMotora.getText();
        if (result1 == 'Continuar mesmo assim'){
            browser.pause(2000);
            const btncontinuarAssim = $('div.ant-modal-footer > button[type="button"].ui.green.icon.right.labeled.button');
            btncontinuarAssim.click();
            browser.pause(1000);
            const btnOk = $('div.ant-confirm-btns > button[type="button"].ant-btn.ant-btn-primary');
            btnOk.click();
            browser.pause(2000);
        }
    }
    numeroViagem(){
        this.lblCodigoViagem.waitForDisplayed();
        browser.pause(3000);
        return this.lblCodigoViagem.getText();
    }
}
module.exports = CriarViagemPage;