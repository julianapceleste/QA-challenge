Feature: Realizar login

  Scenario: Criar uma nova conta
    Given que eu acesse a home da aplicação
    When eu clicar no botão "Sign In"
    And preencher o "Email Adreess"
    And clicar no botão "Create an Account"
    Then estarei apta a continuar o meu cadastro