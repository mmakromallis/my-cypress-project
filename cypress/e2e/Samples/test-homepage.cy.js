
describe('My first Test', () => {
    beforeEach(() => {
        cy.exec('npm run db:reset && npm run db:seed')

        cy.request('POST', '/test/seed/user', {username: 'jane.lane' })
            .its('body')
            .as('currentUser')
    })

    
    it('sets auth cookie when logging in via form submission', function () {
        const { username, password } = this.currentUser

        cy.visit('/login')

        cy.get('input[name=username]').type(username)

        cy.get('input[name=password]').type(`${password}{enter}`)

        cy.url().should('include', '/dashboard')

        cy.getCookie('your-session-cookie').should('exist')

        cy.get('h1').should('contain', 'jane.lane')
    })



    it('Clicking "type" navigates to a new url', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value', 'fake@email.com')
    })
})




