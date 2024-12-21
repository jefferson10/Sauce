describe('Teste de Login', () => {
    const baseUrl = 'https://www.saucedemo.com/v1/';
  
    beforeEach(() => {
      cy.visit(baseUrl); // Acessa a página de login antes de cada teste
    });
  
    it('Deve fazer login com credenciais válidas', () => {
        cy.get('[data-test="username"]').type('standard_user'); //Captura dos seletores para os elementos da página
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
  
    });
  
    it('Deve exibir erro ao usar credenciais inválidas', () => {
        cy.get('[data-test="username"]').type('teste'); //Captura dos seletores para os elementos da página
        cy.get('[data-test="password"]').type('teste');
        cy.get('#login-button').click();
  
    });
  });
  