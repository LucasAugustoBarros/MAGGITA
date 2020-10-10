Feature: Pesquisar Ov no Carguero

Scenario: Pesquisar Ov no Carguero
    Given eu logo no sistema
    When eu vou a tela de lote embarcador
    When eu digito a ov para pesquisa e valido se a mesma existe "4500951309"
    Then eu preencho os campos da ov para liberar "AMAGGI EXPORTACAO E IMPORTACAO LTDA" "80,00" 