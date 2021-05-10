class HomePage {
    getSignin() {
        return cy.get('#nav-link-accountList-nav-line-1');

    }

    getContinue() {
        return cy.get('.nav-short-width');
    }

    getGiftCard() {
        return cy.get(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none');
    }
    getcardvalue() {
        return cy.get('#gc-ui-balance-gc-balance-value');
    }
    getsearch() {
        return cy.get('#twotabsearchtextbox');

    }
    getsearchbutton() {
        return cy.get('#nav-search-submit-button');
    }
    gethover() {
        return cy.get('.icp-nav-flag');

    }
    getchange() {
        return cy.get(' #nav-flyout-icp > div.nav-template.nav-flyout-content.nav-tpl-itemList > span:nth-child(14) > span > a');

    }
    getchangecurrency() {
        return cy.get('#a-autoid-0-announce');
    }
    getAED() {
        return cy.get('#icp-sc-dropdown_3');
    }
    getupdate() {
        return cy.get('.a-button-input');
    }

}

export default HomePage