
/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
var data = require('../../fixtures/fixture1.json')
import HomePage from '../pageObjects/HomePage'

describe('Change the currency to AED and validate the same in the price of the product', () => {
    const lp = new LoginPage();
    const hp = new HomePage();

    beforeEach(function () {
        cy.visit(Cypress.env('url'));
        lp.getsignin().click();
        cy.login(data.username, data.pwd);


    })
    it('login and change the language to AED and save it ', () => {

        const hp = new HomePage();
        cy.wait(2000);
        hp.gethover().trigger('mouseover')
        cy.wait(2000);
        hp.getchange().click();
        cy.wait(4000);
        hp.getchange().click({ force: true })
        cy.wait(2000);
        hp.getchangecurrency().click();
        cy.wait(2000);
        hp.getupdate().click();

    })

    it('login then search any product and hence find the price of it,validate the currency of it ', () => {

        cy.wait(2000);
        hp.getsearch().type(data.product);
        cy.wait(2000);
        hp.getsearchbutton().click();
        cy.wait(3000);

        cy.get('span.a-price-symbol').each(($e1, index, $list) => {

            const status = $e1.text();
            console.log("status " + status);
            expect(status).to.contains("AED");



        })


    })
})
