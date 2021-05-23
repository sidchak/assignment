/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'


describe('My Second Test Suite', function () {

    it('My secondTest case', function () {

        //mouse hover
        //div.mouse-hover-content
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');

        //cross domain
        cy.get('#opentab').then(function (e1) {

            const url = e1.prop('href');
            cy.log(url);
            cy.visit(url);

        })

    })
   it('iframe example',function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded('#courses-iframe');
    cy.wait(2000);
    cy.iframe().find("a[href='#/mentorship']").eq(0).click();

   // cy.iframe('body > app-root > div > header > div.header-upper > div > div > div.nav-outer.clearfix > nav > div.navbar-collapse.collapse.clearfix > ul > li.current > a').click();


   })
})