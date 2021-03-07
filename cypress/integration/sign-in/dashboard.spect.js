describe('visit the Dashboard page which manage the all user', () => {
	before(() => {
		cy.visit('http://localhost:4200');
    });
    it('"Login Accout User" page url function, which retrun visitUrl', () => {
        cy.log('Run the registration Form First with userName');
        
    });
    it('should click Register submit button', () => {
        cy.get('.btn-link').click();
    });
    it('should add the userName and Password', () => {
        cy.get('[formcontrolname="firstName"]').type('Test');
        cy.get('[formcontrolname="lastName"]').type('Server');
        cy.get('[formcontrolname="username"]').type('Test@gmail.com');
        cy.get('[formcontrolname="password"]').type('Test123456');

    });
    it('should click "Login" submit button', () => {
        cy.get('.btn-primary').click();
    });

    it('should click Register submit button', () => {
        cy.get('.btn-link').click();
    });


    it('should add the userName and Password', () => {
        cy.get('[formcontrolname="username"]').type('Test@gmail.com');
        cy.get('[formcontrolname="password"]').type('Test123456');

    });
    it('should click "Login" submit button', () => {
        cy.get('.btn-primary').click();
    });

    it('should click "Manage Users" achor button', () => {
        cy.get('[routerlink="/users"]').click({force: true, multiple: true})
    });
   
})