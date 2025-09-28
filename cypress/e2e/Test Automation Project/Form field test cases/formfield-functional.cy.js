

describe('Form field scenarios', () => {

    it('Verify that the user can input text into Name, Email, Phone & Address fields', () =>{
        cy.visit('/')

        cy.url().should('include', 'testautomationpractice')

        cy.get('.titlewrapper')
            .should('be.visible')
            .should('contain.text', 'Automation Testing Practice')

        cy.get('')
    })
})