
/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage'

var data = require('../../fixtures/fixture1.json')

describe('Create an account and Login then validate that the gift cards balance is 0', () => {


  // beforeEach(function () {

  //        cy.visit(Cypress.env('url'));


  // })

//   it('Create an Amazon account', () => {

//     const lp = new LoginPage();

//     cy.wait(4000);
//     lp.getstarthere().click();
//     cy.wait(2000);
//     lp.getname().type(data.name);
//     cy.wait(2000);
//     lp.getemail().type(data.username);
//     cy.wait(2000);
//     lp.getpwd().type(data.pwd);
//     cy.wait(2000);
//     lp.getreenterpwd().type(data.pwd);
//     cy.wait(2000);
//     lp.getcreateaccount().click();

//   })
// })
// it('Login and verify if the gift cards value is $0.00', () => {

//   const lp = new HomePage();

//   lp.getSignin().click();
//   cy.wait(2000);
//   cy.login(data.username, data.pwd);
//   cy.wait(2000);
//   lp.getContinue().click();
//   cy.wait(2000);
//   lp.getcardvalue().click();
//   cy.wait(2000);

//   cy.get('#gc-ui-balance-gc-balance-value').each(($e1, index, $list) => {

//     const status = $e1.text();
//     console.log("status " + status);
//     expect(status).to.contains("0.00");



//   })

 it("visual testing-snapshot",() =>{
 
  cy.visit('https://www.facebook.com/');
  cy.wait(2000);
  cy.percySnapshot();
  // .then(() => {
  //   cy.get('img[src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"]').toMatchImageSnapshot();

 })
})

