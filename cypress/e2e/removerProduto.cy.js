/// <reference types="cypress" />

describe('Teste da remoção do produto', () => {
    it('Deve remover um produto ao carrinho com sucesso', () => {
      
        // Acessa a página de produtos
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('[data-test="username').type('standard_user'); 
      cy.get('[data-test="password"]').type('secret_sauce'); 
      cy.get('#login-button').click();

      // Verifica se a lista de produtos está visível
      cy.get('.inventory_list').should('be.visible');
  
      // Seleciona o primeiro produto da lista
      cy.get('.inventory_item').first().as('produtoSelecionado');
      
      // Clica no botão de adicionar ao carrinho
      cy.get('@produtoSelecionado').find('.btn_primary').click();

      // Verificar o carrinho
      cy.visit('https://www.saucedemo.com/v1/cart.html'); 

      // Remover o produto do carrinho
      cy.get('.cart_item').find('.btn_secondary').click();

      // Verifica se o carrinho está vazio
      cy.visit('https://www.saucedemo.com/v1/cart.html'); 
  
    });
  });
  


  