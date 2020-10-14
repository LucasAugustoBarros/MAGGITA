Feature: Pesquisar Ov no Carguero

Scenario: Pesquisar Ov no Carguero
    Given eu logo no sistema
    When eu vou a tela de lote embarcador
    Then eu digito a ov para pesquisa e valido se a mesma existe "4500951311" 