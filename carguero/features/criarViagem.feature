Feature: Criar viagem no Carguero

Scenario: Criar viagem no Carguero
    Given eu logo no sistema
    When eu vou a tela de lote embarcador
    When eu digito a ov para pesquisa e valido se a mesma existe "0011223349"
    When eu preencho os campos da ov para liberar "AMAGGI EXPORTACAO E IMPORTACAO LTDA" "80,00" "500000" 
    Then eu crio a viagem com motorista e peso "03148097912" "32000"