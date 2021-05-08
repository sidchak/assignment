Cypress.Commands.add('login', (email,password) =>{

cy.get('#ap_email').type(email);
cy.get('#continue').click();
cy.get('#ap_password').type(password);
cy.get('#signInSubmit').click;



})
