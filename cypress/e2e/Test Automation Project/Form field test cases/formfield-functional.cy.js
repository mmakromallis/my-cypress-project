import FormPage from '../../../pages/FormPage'


describe('Form field scenarios', () => {

    it('Verify that the user can input text into Name, Email, Phone, and Address fields', () =>{
        cy.visit('/')

        cy.url()
            .should('include', 'testautomationpractice')

        cy.get('.titlewrapper')
            .should('be.visible')
            .should('contain.text', 'Automation Testing Practice')

        FormPage.getFormPage()
            .should('be.visible')
            .and('contain.text', 'GUI Elements')

        FormPage.getFullNameField()
            .should('be.visible')
            .type('John Doe')
        
        FormPage.getEmailField()
            .should('be.visible')
            .type('johndoe@example.com')
        
        FormPage.getPhoneField()
            .should('be.visible')
            .type('1234567890')
        
        FormPage.getAddressField()
            .should('be.visible')
            .type('123 Main St, Anytown, USA')
    })
})