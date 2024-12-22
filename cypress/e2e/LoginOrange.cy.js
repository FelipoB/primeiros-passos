describe('site Orange', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']") .type('Admin') /// USUARIO CORRETO   
    cy.wait(1000)
    cy.get("[name='password']") .type('admin123') /// SENHA CORRETA
    cy.wait(1000)
    cy.get("[type='submit']").click() /// CLICAR EM LOGIN
    cy.wait(1000)
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')/// SISTEMA RETORNA PAGINA DO DASHBOARD
    cy.wait(1000)
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')/// SISTEMA RETORNA TITULO DA PAGINA = DASHBOARD
  })

  it('login sem sucesso',() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[name='username']") .type('Admin') /// USUARIO CORRETO
  cy.get("[name='password']") .type('test') /// SENHA ERRADA 
  cy.get("[type='submit']").click() /// CLICAR EM LOGIN
  cy.get("[role='alert']").contains('Invalid credentials') /// RETORNAR MENSAGEM DE ERRO 'INVALID CREDENTIALS'

  
  })

})