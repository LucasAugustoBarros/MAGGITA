/**
 * File: loteEmbarcadorPage.js
 * Autor: Lucas Barros
 * Data: 07/10/2020
 */
var numerolote;

class LoteEmbarcadorPage {
    // Define os elementos da tela
    get icoLoteEmbarcador() { return $('[id="side-bar-item-fa fa-cube"]') }
    get inputOv() {return $('div#app-root div.float-left > div > div > input[type="text"]')}
    get lblRiLoteEmbarcador() {return $('div#car-row-0 h2')}
    get lblNumberLoteEmbarcador() {return $('div#car-row-0 h1')}
    get lblRiLoteEmbarcadorClick() {return $('div#car-row-0 h2')}
    get lblStatusLoteEmbarcador() {return $('div#car-row-0 div:nth-child(1) > div > span')}
    get conjuntoTransportadorLote() {return $('div#app-root div:nth-child(1) > div:nth-child(1) > div.buttonMarcaTodos___-oD4g > a')}
    get carroceriaTransportadorLote() {return $('div#app-root div:nth-child(1) > div:nth-child(1) > div.buttonMarcaTodos___-oD4g > a')}
    get lblCadenciaEmbarcador() {return $('div#car-row-0 div:nth-child(2) > div.ant-col-sm-6 > div > div')}
    get quantidadeProdTransportadora() {return $('div:nth-child(3) > div > div > input#quantidade')}
    get inputTransLoteEmbarcador() {return $('form > div:nth-child(2) > div > div > input')}
    get inputValorFrete() {return $('input#valorFreteTrechoFiscal')}
    get aplicarBtn() {return $('div.form-buttons-align-right-content > button[type="submit"].ui.green.icon.right.labeled.button')}
    get msgSalvo() {return $('div > div.ant-notification-notice-message')}
    get inputValorCadencia() {return $('div#app-root div.ant-tabs-tabpane.ant-tabs-tabpane-active > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1) > div > div > input')}
    get icoLoteTransportador() {return $('[id="side-bar-item-fa fa-cubes"]')}
    get inputLoteEmbarcadorTransportador() {return $('[id="id-1602338291523"]')}
    
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
        let numerolote = this.lblNumberLoteEmbarcador.getText();
    }
    validarStatusOv(){
        this.lblStatusLoteEmbarcador.waitForDisplayed();
        return this.lblStatusLoteEmbarcador.getText();
    }
    validarCadenciaOv(){
        this.lblCadenciaEmbarcador.waitForDisplayed();
        return this.lblCadenciaEmbarcador.getText();
    }
    selecionarOv(){
        const loteClick = $('div#car-row-0 h2');
        loteClick.click();
        browser.pause(1000);
    }
    selecionarConjTransp(){
        this.conjuntoTransportadorLote.waitForDisplayed();
        browser.pause(1000);
        let conjunto = this.conjuntoTransportadorLote.getText();
        console.log(conjunto);
            if (conjunto == 'Marcar todos'){
                browser.pause(1000);
                const conjuntoTransportadorLotelick = $('div#app-root div:nth-child(1) > div:nth-child(1) > div.buttonMarcaTodos___-oD4g > a');
                conjuntoTransportadorLotelick.click();
                browser.pause(1000);
            }

    }
    selecionarCarroTransp(){
        this.carroceriaTransportadorLote.waitForDisplayed();
        browser.pause(1000);
        let carroceria = this.carroceriaTransportadorLote.getText();
        if (carroceria == 'Marcar todos'){
            const tipoCarroceriaLotelick = $('div#app-root div:nth-child(2) > div:nth-child(1) > div.buttonMarcaTodos___-oD4g > a');
            tipoCarroceriaLotelick.click();
            browser.pause(1000);
        }

    }
    inserirTransp(transp,valor){
        const transportadoraBtnNova = $('div#app-root div:nth-child(1) > div:nth-child(1) > button[type="button"]');
        transportadoraBtnNova.click();
        this.inputTransLoteEmbarcador.waitForDisplayed();
        this.inputTransLoteEmbarcador.setValue(transp);
        browser.pause(1000);
        const transpSelecionadaClick = $('div.ant-modal-body > form > div:nth-child(2) > div > div > div > div')
        transpSelecionadaClick.click();
        browser.keys('Enter');
        this.quantidadeProdTransportadora.waitForDisplayed();
        this.quantidadeProdTransportadora.setValue("0");
        browser.pause(1000);
        const modalidadePagRadio = $('div:nth-child(5) > div > div > div:nth-child(1) > label');
        modalidadePagRadio.click();
        this.inputValorFrete.waitForDisplayed();
        this.inputValorFrete.setValue(valor);
        this.aplicarBtn.waitForDisplayed();
        const freteClick = $('div:nth-child(10) > div > textarea#observacoes');
        freteClick.click();
        browser.keys('Tab');
        browser.keys('Tab');
        browser.keys('Enter');
        browser.pause(2500);
    }
    editarLoteEmbarcador(){
        const editarLote = $('div#app-root button[type="button"]');
        editarLote.click();
        browser.pause(1000);
    }   
    inserirCadencia(cadencia){
        const cadenciaClick = $('div#app-root div:nth-child(3) > h3');
        cadenciaClick.click();
        browser.pause(1000);
        this.inputValorCadencia.setValue(cadencia);
        browser.pause(1000);
        const aplicarClick = $('[class="ui button button"]');
        aplicarClick.click();
    }
    liberarTransportadora(){
        const liberarTransp = $('div#car-row-0 label');
        liberarTransp.click();
        browser.pause(1000);
    }   
    salvarOv(){
        browser.pause(2500);
        const salvarBtn = $('div#app-root button[type="submit"].ui.orange.small.compact.icon.right.labeled.button');
        salvarBtn.click();
        browser.pause(3000);
    }
    loteTransportador(){
        browser.pause(2500);
        this.icoLoteTransportador.waitForDisplayed();
        const ico2Click = $('[id="side-bar-item-fa fa-cubes"]');
        ico2Click.click();
    }
    loteTransportador(numerolote){
        browser.pause(2500);
        this.inputLoteEmbarcadorTransportador(numerolote);
        browser.keys('Enter');
        const ico2Click = $('[id="side-bar-item-fa fa-cubes"]');
        ico2Click.click();
    }
}
module.exports = LoteEmbarcadorPage;