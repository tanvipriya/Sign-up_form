

describe('visit the Registration page', () => {
	before(() => {
		cy.visit('http://localhost:4200/account/login?returnUrl=%2F');
	});

    it('"Login Accout User" page url function, which retrun visitUrl', () => {
        cy.log('Run the registration Form First');
        
    });
    it('should add the userName and Password', () => {
        cy.get('[formcontrolname="username"]').type('Test@gmail.com');
        cy.get('[formcontrolname="password"]').type('Test123456');

    });
    it('should click "Login" submit button', () => {
        cy.get('.btn-primary').click();
    });

    it('should click Register submit button', () => {
        cy.get('.btn-link').click();
    });
});