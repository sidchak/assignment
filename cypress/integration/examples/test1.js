
/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'

describe('Create an account and Login then validate that the gift cards balance is 0', () => {
  
  
    beforeEach(function(){
    cy.visit(Cypress.env('url'));

    cy.fixture('fixture1').then(function(data)
    {
      this.data=data;
    })
    })
   
    it('Create an Amazon account', () => {
   
        const lp=new LoginPage();

        cy.wait(4000);
        lp.getstarthere().click();
        cy.wait(2000);
        lp.getname().type(this.data.name);
        cy.wait(2000);
        lp.getemail().type(this.data.username);
        cy.wait(2000);
        lp.getpwd().type(this.data.pwd);
        cy.wait(2000);
        lp.getreenterpwd().type(this.data.pwd);
        cy.wait(2000);
        lp.getcreateaccount().click();
        
  })
})
  it('Login and verify if the gift cards value is $0.00', () => { 

    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.wait(2000);
    cy.get('#ap_email').type("siddhart.chakravarty@gmail.com");
    cy.wait(2000);
    cy.get('.a-button-inner > #continue').click();
    cy.wait(2000);
    cy.get('#ap_password').type("Rich13*arab");
    cy.wait(2000);
    cy.get('#signInSubmit').click();
    cy.wait(2000);
    cy.get('.nav-short-width').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none').click();
    cy.wait(2000);
 //   cy.get('#gc-ui-balance-gc-balance-value').contains('have.text', '$0.00');

    cy.get('#gc-ui-balance-gc-balance-value').each(($e1, index, $list) => {
     
        const status=$e1.text();
        console.log("status " +status);
        expect(status).to.contains("$0.00");

       
       
    })
    })

  })