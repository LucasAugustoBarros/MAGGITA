Feature: Criar viagem no Carguero

Scenario: Criar viagem no Carguero
    Given eu logo no sistema
    When eu valido a ov "4500951306" "500000" 
    When eu vou a tela de lote transportador
    When eu preencho os campos do lote para liberar "80,00"
    When eu seleciono o lote para criar a viagem
    Then eu crio a viagem com motorista e peso "03148097912" "32000"