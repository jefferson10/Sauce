describe('Teste de visualização da lista de produtos após login', () => {
    beforeEach(() => {
      // Navega até a página inicial
      cy.visit('https://www.saucedemo.com/v1/'); 
    });
  
    it('Deve fazer login e exibir a lista de produtos', () => {
      // Preenchendo o formulário de login
      cy.get('[data-test="username').type('standard_user'); 
      cy.get('[data-test="password"]').type('secret_sauce'); 
      cy.get('#login-button').click(); 
  
      // Verifica se foi redirecionado corretamente após o login
      cy.url().should('include', 'https://www.saucedemo.com/v1/'); 
  
      // Verifica se a lista de produtos é exibida
      cy.get('.inventory_list').should('be.visible');
  
    });
  });