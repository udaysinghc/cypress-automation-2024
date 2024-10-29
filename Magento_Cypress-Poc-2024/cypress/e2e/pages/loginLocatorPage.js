class LoginPage {

    signInCTA() {
        return cy.get('.panel > .header > .authorization-link > a')
    }

    email() {
        return cy.get('[id="email"]')
    }

    password() {
        return cy.get('[name="login[password]"]')
    }

    loginCTA() {
        return cy.get('[class*="login primary"]')
    }

    loggedUserName() {
        return cy.get(':nth-child(2) > .greet > .logged-in')
    }

    dropdownMenu() {
        return cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action')
    }

    signOutCTA() {
        return cy.xpath('(//li[@class="authorization-link"]//following-sibling::a)[1]')
    }

}
export default LoginPage; 