Feature: Pesquisar Lote Transporrador no Carguero

Scenario: Pesquisar Lote Transporrador no Carguero
    Given eu logo no sistema
    When eu valido a ov "4500951309" "500000" 
    When eu vou a tela de lote transportador
    Then eu preencho os campos do lote para liberar "80,00"
